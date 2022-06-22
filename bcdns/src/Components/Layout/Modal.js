import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import styles from "./Modal.module.css"

const Modal = (props) =>{
    const ModalForm = () =>{
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
    
    const Backdrop = () =>{
      return <div className={styles.backdrop} onClick={props.onClick} />;
    }

    return (
      <Fragment>
        {ReactDOM.createPortal(
          <Backdrop />,
          document.getElementById("backdrop-root")
        )}
        {ReactDOM.createPortal(
          <ModalForm />,
          document.getElementById("modal-root")
        )}
      </Fragment>
    );
}

export default Modal;