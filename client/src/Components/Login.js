import styles from "./Login.module.css";
import Button from "./Layout/Button";
import { Fragment, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { logActions } from "../Store/Log";

function post(url, data) {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

const Login = () => {
  const dispatch = useDispatch();
  const loginRef = useRef(null);
  const passwordRef = useRef(null);
  const rPasswordRef = useRef(null);
  const emailRef = useRef(null);
  const domainRef = useRef(null);
  
  const [isRegistering, setIsRegistering] = useState(false);
  const [passwordInputError, setPasswordInputError] = useState(false);
  const [loginInputError, setLoginInputError] = useState(false);
  const [emailInputError, setEmailInputError] = useState(false);
  const [rPasswordInputError, setRPasswordInputError] = useState(false);
  const [domainInputError, setDomainInputError] = useState(false);
  const [accountError, setAccountError] = useState(false);

  const submitLoginFormHandler = (event) => {
    event.preventDefault();

    setLoginInputError(false);
    setPasswordInputError(false);

    if (loginRef.current.value.trim().length === 0){
      setLoginInputError(true);
    }

    if (passwordRef.current.value.trim().length === 0) {
      setPasswordInputError(true);
    }

    if (
      loginRef.current.value.trim().length !== 0 &&
      passwordRef.current.value.trim().length !== 0
    ){
      post("http://localhost:5000/login", {
        login: loginRef.current.value,
        password: passwordRef.current.value,
      })
      .then((data) => data.json())
      .then((data) => {
        if(data.isLoggedIn){
            dispatch(logActions.login(loginRef.current.value));
            window.location = "/";
        }else{
          setAccountError(true);
        }
      });
    }
    return;
  };

  const submitRegisterFormHandler = (event) => {
    event.preventDefault();
    setLoginInputError(false);
    setPasswordInputError(false);
    setRPasswordInputError(false);
    setEmailInputError(false);
    setDomainInputError(false);

    // const afterDot = domainRef.current.value.substr(domainRef.current.value.indexOf("."));
    const domainSliced = domainRef.current.value.split(".")

    if (loginRef.current.value.trim().length === 0) {
      setLoginInputError(true);
    }

    if (passwordRef.current.value.trim().length === 0) {
      setPasswordInputError(true);
    }

    if (
      rPasswordRef.current.value.trim().length === 0 ||
      rPasswordRef.current.value !== passwordRef.current.value
    ) {
      setRPasswordInputError(true);
    }

    if (!(domainSliced.length === 2 && domainSliced[0].length > 0 && domainSliced[1].length > 0)) {
      setDomainInputError(true)
    }

    if (
      !(loginRef.current.value.trim().length === 0 ||
      passwordRef.current.value.trim().length === 0 ||
      rPasswordRef.current.value.trim().length === 0 ||
      rPasswordRef.current.value !== passwordRef.current.value ||
      !(
        domainSliced.length === 2 &&
        domainSliced[0].length > 0 &&
        domainSliced[1].length > 0
      ))
    ) {
      post("http://localhost:5000/register", {
        login: loginRef.current.value,
        password: passwordRef.current.value,
      })
        .then((data) => data.json())
        .then((data) => {
          if (data.wasRegistered) {
            window.location = "/";
          } else {
            setAccountError(true);
          }
        });
    }
    return;
  }
 
  const loginForm = (
    <Fragment>
      <p>Sign In</p>
      <form className={styles.loginform} onSubmit={submitLoginFormHandler}>
        <input
          className={`${styles.input} ${loginInputError ? styles.error : ""}`}
          type="text"
          placeholder="Login"
          name="login"
          id="login"
          ref={loginRef}
        />
        <input
          className={`${styles.input} ${passwordInputError ? styles.error : ""}`}
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          ref={passwordRef}
        />
        <div className={styles.buttons}>
          <Button type="submit" buttonText="Login" />
          <Button
            buttonText="Register"
            onClick={() => {
              setIsRegistering(true);
              setLoginInputError(false);
              setPasswordInputError(false);
              setRPasswordInputError(false);
              setEmailInputError(false);
            }}
          />
        </div>
      </form>
    </Fragment>
  );

  const registerForm = (
    <Fragment>
      <p>Register</p>
      <form className={styles.loginform} onSubmit={submitRegisterFormHandler}>
        <input
          type="text"
          placeholder="Login"
          name="login"
          id="login"
          ref={loginRef}
          className={`${styles.input} ${loginInputError ? styles.error : ""}`}
        />
        <input
          className={`${styles.input} ${
            passwordInputError ? styles.error : ""
          }`}
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          ref={passwordRef}
        />
        <input
          className={`${styles.input} ${
            rPasswordInputError ? styles.error : ""
          }`}
          type="password"
          placeholder="Repeat password"
          name="repeatPassword"
          id="repeatPassword"
          ref={rPasswordRef}
        />
        <input
          className={`${styles.input} ${
            domainInputError ? styles.error : ""
          }`}
          type="text"
          placeholder="Your first domain"
          name="domain"
          id="domain"
          ref={domainRef}
        />
        <input
          className={`${styles.input} ${emailInputError ? styles.error : ""}`}
          type="email"
          placeholder="E-mail (optionally)"
          name="email"
          id="email"
          ref={emailRef}
        />
        <div className={styles.buttons}>
          <Button buttonText="Register" type="submit" />
        </div>
      </form>
      <span
        onClick={() => {
          setIsRegistering(false);
          setLoginInputError(false);
          setPasswordInputError(false);
          setRPasswordInputError(false);
          setDomainInputError(false);
          setEmailInputError(false);
        }}
      >
        &#10508;Back to login
      </span>
    </Fragment>
  );

  return (
    <div className={styles.formpage}>
      {!isRegistering && loginForm}
      {isRegistering && registerForm}
    </div>
  );
};

export default Login;
