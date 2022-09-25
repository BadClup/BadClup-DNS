import styles from "./NotFound.module.css"
import notFoundImg from "../Images/notFound.svg"

const NotFound = () => {
    return (
      <div className={styles.centered}>
        <h2>Not Found!</h2>
        <p>Are you sure you typed it right?</p>
        <img src={notFoundImg} alt="Not found img" />
      </div>
    );
}

export default NotFound;