import React from "react";
import Button from "./Button";
import styles from "./Header.module.css"
import BadClupLogo from "../../Images/Badclup69.svg";
import dnsPng from "../../Images/DNS.svg";

const Header = (props) =>{
    return (
      <header className={styles.header}>
        <div>
          <img src={BadClupLogo} alt="BadClup" />
          <img src={dnsPng} alt="BadClup" />
        </div>
        <Button buttonText={props.buttonText} onClick={props.onClick} />
      </header>
    );
}

export default Header;