import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import styles from "./Modal.module.css"

const Modal = (props) =>{
    const Modal = () =>{
        return (
          <form className={styles.modal}>
            <label htmlFor="login">Login:</label>
            <input type="text" placeholder="login" name="login" id="login" />
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              placeholder="password"
              name="password"
              id="password"
            />
            <div className={styles.buttons}>
              <Button buttonText="Register" />
              <Button type="submit" buttonText="Login" />
            </div>
            <span onClick={props.onClick} >&#x2716;</span>
          </form>
        );
    }

    return (
      <Fragment>
        {ReactDOM.createPortal(
          <div className={styles.backdrop} onClick={props.onClick} />,
          document.getElementById("backdrop-root")
        )}
        {ReactDOM.createPortal(
          <Modal />,
          document.getElementById("modal-root")
        )}
      </Fragment>
    );
}

export default Modal;