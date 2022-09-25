import styles from "./Admin.module.css";
import Button from "./Layout/Button";
import { Fragment, useState } from "react";
import { useRef } from "react";

const Admin = () => {
    const [pOrD, setPOrD] = useState("P");
    const [whatToDisplay, setWhatToDisplay] = useState("profile");
    const sessionLogin = sessionStorage.getItem("login") || undefined;

    const [firstInputError, setFirstInputError] = useState(false);
    const [secondInputError, setSecondInputError] = useState(false);
    const [thirdInputError, setThirdInputError] = useState(false);        

    const firstRef = useRef(void 0);
    const secondRef = useRef(void 0);
    const thirdRef = useRef(void 0);

    const profile = (
      <Fragment>
        <div>
          <p>{sessionLogin}</p>
          <p>Informations about user</p>
        </div>
        <div className={styles.buttons}>
          <Button buttonText="Change user informations" />
          <Button buttonText="Change password" onClick={() => {
            setWhatToDisplay("changePassword")
          }}/>
        </div>
      </Fragment>
    );

    const domains = (
      <Fragment>
        <p>{sessionLogin}'s domains</p>
        <div className={styles.domains}>
          <Button buttonText="domain.domain" />
          <Button buttonText="domain.domain" />
          <Button buttonText="domain.domain" />
          <Button buttonText="domain.domain" />
          <Button buttonText="domain.domain" />
        </div>
        <Button buttonText="Add Domain" className={styles.add}/>
      </Fragment>
    );

    const changePasswordHandler = () => {
      setFirstInputError(false);
      setSecondInputError(false);
      setThirdInputError(false);

      if (firstRef.current.value.length < 1) {
        setFirstInputError(true)
      }

      if (secondRef.current.value.length < 1) {
        setSecondInputError(true);
      }

      if (thirdRef.current.value.length < 1) {
        setThirdInputError(true);
      }
    }

    const arrow = "<--";

    const changePassword = (
      <Fragment>
        <p
          className={styles.back}
          onClick={() => {
            setWhatToDisplay("profile");
          }}
        >
          {arrow} Back to profile
        </p>
        <p>Change password</p>
        <input
          type="password"
          placeholder="Old Password"
          name="old password"
          id="old Password"
          className={`${styles.input} ${firstInputError ? styles.error : ""}`}
          ref={firstRef}
        />
        <input
          type="password"
          placeholder="New Password"
          name="new password"
          id="new Password"
          ref={secondRef}
          className={`${styles.input} ${secondInputError ? styles.error : ""}`}
        />
        <input
          type="password"
          placeholder="Repeat new Password"
          name="repeat new password"
          id="repeat new Password"
          ref={thirdRef}
          className={`${styles.input} ${thirdInputError ? styles.error : ""}`}
        />
        <Button buttonText="Change password" className={styles.add} onClick={changePasswordHandler}/>
      </Fragment>
    );

    return (
      <div className={styles.main}>
        <div className={styles.buttons}>
          <Button
            buttonText="Profile"
            className={pOrD === "P" && styles.active}
            onClick={() => {
              setPOrD("P");
              setWhatToDisplay("profile");
            }}
          />
          <Button
            buttonText="Domains"
            className={pOrD === "D" && styles.active}
            onClick={() => {
              setPOrD("D");
              setWhatToDisplay("domains");
            }}
          />
        </div>
        <div className={styles.adminPanel}>
          {whatToDisplay === "profile" && profile}
          {whatToDisplay === "domains" && domains}
          {whatToDisplay === "changePassword" && changePassword}
        </div>
      </div>
    );
}

export default Admin;