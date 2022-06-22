import React from "react";
import Button from "./Button";
import styles from "./Header.module.css"
import BadClupLogo from "../../Images/Badclup.svg";
import dnsPng from "../../Images/icons8-dns-80.png";

const Header = (props) =>{
    return (
      <header className={styles.header}>
        <div>
          <img src={BadClupLogo} alt="BadClup" />
          <img src={dnsPng} alt="BadClup" />
        </div>
        <Button buttonText="Login" onClick={props.onClick} />
      </header>
    );
}

export default Header;