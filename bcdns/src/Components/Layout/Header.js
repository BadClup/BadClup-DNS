import React from "react";
import Button from "./Button";
import styles from "./Header.module.css"
import { ReactComponent as BadclupLogo } from "../../Images/BadClup.svg";
import { ReactComponent as DnsPng } from "../../Images/DNS.svg";

import { useSelector, useDispatch } from "react-redux";
import { logActions } from "../../Store/Log";

const Header = () =>{
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(
    (state) => state.log.isLoggedIn
  );

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const loginHandler = () => {
    window.location = "/login";
  }

  const logoutHandler = () => {
    dispatch(logActions.logout())
    window.location = "/";
  };

  const sessionLogin = sessionStorage.getItem("login") || undefined;

    return (
      <header className={styles.header}>
        <div>
          <BadclupLogo onClick={() => (window.location = "/")} />
          <DnsPng
            onClick={() =>
              openInNewTab("https://pl.wikipedia.org/wiki/Domain_Name_System")
            }
          />
        </div>
        {isLoggedIn ? <p className={styles.username} onClick={() => {window.location = "/userpanel";}}>{sessionLogin}</p> : ""}
        {isLoggedIn && <Button buttonText="Logout" onClick={logoutHandler} />}
        {!isLoggedIn && <Button buttonText="Login" onClick={loginHandler} />}
      </header>
    );
}

export default Header;