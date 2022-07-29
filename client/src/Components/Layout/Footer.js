import styles from "./Footer.module.css"
import discordLogo from "../../Images/discord logo.png";

const Footer = () => {
    let dt = new Date();
    const year = dt.getFullYear();

    return (
      <footer className={styles.footer}>
        <div className={styles.socials}>
          <div
            onClick={() => {
              window.open(
                "https://discord.com",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            <img src={discordLogo} alt="discord logo" />
            <p>Join our discord.</p>
          </div>
        </div>
        <p>Copyrights BadClup™ {year}</p>
      </footer>
    );
}

export default Footer;