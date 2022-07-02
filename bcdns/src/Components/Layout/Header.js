import React from "react";
import Button from "./Button";
import styles from "./Header.module.css"
import { ReactComponent as BadclupLogo } from "../../Images/BadClup.svg";
import { ReactComponent as DnsPng } from "../../Images/DNS.svg";

const Header = (props) =>{
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

    return (
      <header className={styles.header}>
        <div>
          <BadclupLogo
            onClick={() =>
              openInNewTab("http://badclup.com")
            }
          />
          <DnsPng
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