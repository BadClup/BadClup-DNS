import React from "react";
import Button from "./Button";
import styles from "./Header.module.css"
import { ReactComponent as BadclupLogo } from "../../Images/BadClup.svg";
import { ReactComponent as DnsPng } from "../../Images/DNS.svg";
import { useSelector, useDispatch } from "react-redux";
import { logActions } from "../../Store/Log";
import { Link } from "react-router-dom";

const Header = () =>{
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(
    (state) => state.log.isLoggedIn
  );

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const logoutHandler = () => {
    dispatch(logActions.logout())
    window.location = "/";
  };

  const sessionLogin = sessionStorage.getItem("login") || undefined;

    return (
      <header className={styles.header}>
        <div>
          <Link to="/">
            <BadclupLogo className={styles.firstSvg} />
          </Link>
          <DnsPng
            className={styles.secondSvg}
            onClick={() =>
              openInNewTab("https://pl.wikipedia.org/wiki/Domain_Name_System")
            }
          />
        </div>
        {isLoggedIn && (
          <Link to="/admin">
            <p className={styles.username}> {sessionLogin} </p>
          </Link>
        )}
        {isLoggedIn && <Button buttonText="Logout" onClick={logoutHandler} />}
        {!isLoggedIn && (
          <Link to="/login" className={styles.link}>
            <Button buttonText="Login">Login</Button>
          </Link>
        )}
      </header>
    );
}

export default Header;