import React from "react";
import Button from "./Button";
import styles from "./Header.module.css"
import BadClupLogo from "../../Images/a.svg";
import dnsPng from "../../Images/DNS2.svg";

const Header = (props) =>{
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

    return (
      <header className={styles.header}>
        <div>
          <img
            src={BadClupLogo}
            alt="BadClup"
            onClick={() => openInNewTab("http://badclup.com")}
          />
          <img
            src={dnsPng}
            alt="BadClup"
            onClick={() =>
              openInNewTab("https://pl.wikipedia.org/wiki/Domain_Name_System")
            }
          />
        </div>
        <Button buttonText={props.buttonText} onClick={props.onClick} />
      </header>
    );
}

export default Header;