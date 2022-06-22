import styles from "./UserParagraph.module.css"

const UserParagraph = (props) =>{
    return (
      <div className={styles.paragraph}>
        <h2>Here will be displayed user name</h2>
        <div className={styles.inputs}>
          <input type="text" placeholder="Domain Name" />
          <input type="text" placeholder="Serwer Address" />
        </div>
      </div>
    );
}

export default UserParagraph