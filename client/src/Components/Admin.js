import styles from "./Admin.module.css";
import Button from "./Layout/Button";
import { Fragment, useState } from "react";
import { useRef } from "react";
import trashIcon from "../Images/delete.svg"

const Admin = () => {
    const [pOrD, setPOrD] = useState("P");
    const [whatToDisplay, setWhatToDisplay] = useState("profile");
    const sessionLogin = sessionStorage.getItem("login") || undefined;

    const [firstInputError, setFirstInputError] = useState(false);
    const [secondInputError, setSecondInputError] = useState(false);
    const [thirdInputError, setThirdInputError] = useState(false);        

    const firstRef = useRef(void 0);
    const secondRef = useRef(void 0);
    const thirdRef = useRef(void 0);

    const profile = (
      <Fragment>
        <div>
          <p>{sessionLogin}</p>
          <p>Informations about user</p>
        </div>
        <div className={styles.buttons}>
          <Button
            buttonText="Change user informations"
            onClick={() => {
              setWhatToDisplay("changeUserInfo");
            }}
          />
          <Button
            buttonText="Change password"
            onClick={() => {
              setWhatToDisplay("changePassword");
              setFirstInputError(false);
              setSecondInputError(false);
              setThirdInputError(false);
            }}
          />
        </div>
      </Fragment>
    );

    const domains = (
      <Fragment>
        <p>{sessionLogin}'s domains</p>
        <div className={styles.domains}>
          <Button
            buttonText="domain.domain"
            onClick={() => {
              setWhatToDisplay("editDomain");
              setFirstInputError(false);
              setSecondInputError(false);
              setThirdInputError(false);
            }}
          />
          <Button buttonText="domain.domain" />
          <Button buttonText="domain.domain" />
          <Button buttonText="domain.domain" />
          <Button buttonText="domain.domain" />
        </div>
        <Button
          buttonText="Add Domain"
          className={styles.add}
          onClick={() => {
            setWhatToDisplay("addDomain");
          }}
        />
      </Fragment>
    );

    const changePasswordHandler = () => {
      setFirstInputError(false);
      setSecondInputError(false);
      setThirdInputError(false);

      if (firstRef.current.value.length < 1) {
        setFirstInputError(true)
      }

      if (secondRef.current.value.length < 1) {
        setSecondInputError(true);
      }

      if (thirdRef.current.value.length < 1) {
        setThirdInputError(true);
      }
    };

    const arrow = "<--";

    const changePassword = (
      <Fragment>
        <p
          className={styles.back}
          onClick={() => {
            setWhatToDisplay("profile");
          }}
        >
          {arrow} Back to profile
        </p>
        <p>Change password</p>
        <input
          type="password"
          placeholder="Old Password"
          name="old password"
          id="old Password"
          className={`${styles.input} ${firstInputError ? styles.error : ""}`}
          ref={firstRef}
        />
        <input
          type="password"
          placeholder="New Password"
          name="new password"
          id="new Password"
          ref={secondRef}
          className={`${styles.input} ${secondInputError ? styles.error : ""}`}
        />
        <input
          type="password"
          placeholder="Repeat new Password"
          name="repeat new password"
          id="repeat new Password"
          ref={thirdRef}
          className={`${styles.input} ${thirdInputError ? styles.error : ""}`}
        />
        <Button buttonText="Change password" className={styles.add} onClick={changePasswordHandler}/>
      </Fragment>
    );

    const changeUserInfo = (
      <Fragment>
        <p
          className={styles.back}
          onClick={() => {
            setWhatToDisplay("profile");
          }}
        >
          {arrow} Back to profile
        </p>
        <p>Change User Informations</p>
        <div className={styles.userInfoFlex}>
          <input
            type="text"
            placeholder="Change username"
            name="newUsername"
            id="newUsername"
            className={`${styles.input} ${firstInputError ? styles.error : ""}`}
            ref={firstRef}
          />
          <Button buttonText="Save" className={styles.smallAdd} />
        </div>
        <div className={styles.userInfoFlex}>
          <textarea
            placeholder="Change user informations"
            name="user_info"
            id="user_info"
            className={`${styles.input} ${firstInputError ? styles.error : ""}`}
            ref={firstRef}
          />
          <Button buttonText="Save" className={styles.smallAdd} />
        </div>
        <Button
          buttonText="Delete account"
          className={styles.delete}
          onClick={() => {
            setWhatToDisplay("deleteProfile");
          }}
        />
      </Fragment>
    );

    const deleteProfile = (
      <Fragment>
        <p
          className={styles.back}
          onClick={() => {
            setWhatToDisplay("profile");
          }}
        >
          {arrow} Back to profile
        </p>
        <p>DELETE ACCOUNT</p>
        <p className={styles.warningText}>(It can't be undone)</p>
        <input
          type="text"
          placeholder="Current password"
          name="currentPassword"
          id="currentPassword"
          className={`${styles.input} ${firstInputError ? styles.error : ""}`}
          ref={firstRef}
        />
        <input
          type="text"
          placeholder="Repeat Current Password"
          name="repeatCurrentPassword"
          id="repeatCurrentPassword"
          className={`${styles.input} ${firstInputError ? styles.error : ""}`}
          ref={secondRef}
        />
        <div className={styles.checkboxFlex}>
          <input
            type="checkbox"
            id="checkProfileDelete"
            className={`${styles.input} ${firstInputError ? styles.error : ""}`}
          />
          <label htmlFor="checkProfileDelete">
            I understand that my account will vanish permanently
          </label>
        </div>
        <Button buttonText="Delete account" className={styles.delete} />
      </Fragment>
    );

    const deleteDomain = (
      <Fragment>
        <p
          className={styles.back}
          onClick={() => {
            setWhatToDisplay("domains");
          }}
        >
          {arrow} Back to Domains
        </p>
        <p>DELETE Domain</p>
        <p className={`${styles.warningText} ${styles.secondWarningText}`}>(It can't be undone)</p>
        <input
          type="text"
          placeholder="Current password"
          name="currentPassword"
          id="currentPassword"
          className={`${styles.input} ${firstInputError ? styles.error : ""}`}
        />
        <input
          type="text"
          placeholder="Repeat Current Password"
          name="repeatCurrentPassword"
          id="repeatCurrentPassword"
          className={`${styles.input} ${firstInputError ? styles.error : ""}`}
        />
        <div className={styles.checkboxFlex}>
          <input
            type="checkbox"
            id="checkProfileDelete"
            className={`${styles.input} ${firstInputError ? styles.error : ""}`}
          />
          <label htmlFor="checkProfileDelete">
            I understand that my domain will vanish permanently
          </label>
        </div>
        <Button buttonText="Delete domain" className={styles.delete} />
      </Fragment>
    );

    const addDomain = (
      <Fragment>
        <p>Add Domain</p>
        <p
          className={styles.back}
          onClick={() => {
            setWhatToDisplay("domains");
          }}
        >
          {arrow} Back to domains
        </p>
        <input
          type="text"
          placeholder="Domain name"
          name="DomainName"
          id="DomainNameInput"
          className={`${styles.input} ${firstInputError ? styles.error : ""}`}
        />
        <input
          type="text"
          placeholder="Ipv4 Address"
          name="Ipv4"
          id="IPAddress"
          className={`${styles.input} ${firstInputError ? styles.error : ""}`}
        />
        <Button buttonText="Edit JSON" className={styles.jsonbtn} />
        <Button buttonText="Add domain" className={styles.add} />
      </Fragment>
    );

    const editDomain = (
      <Fragment>
        <div className={styles.editDomainFlex}>
          <p>Domain.Domain</p>
          <img src={trashIcon} alt="delete" onClick={() => {
            setWhatToDisplay("deleteDomain");
          }}/>
        </div>
        <p
          className={styles.back}
          onClick={() => {
            setWhatToDisplay("domains");
          }}
        >
          {arrow} Back to domains
        </p>
        <input
          type="text"
          placeholder="Change domain name"
          name="DomainName"
          id="DomainNameInput"
          className={`${styles.input} ${firstInputError ? styles.error : ""}`}
        />
        <input
          type="text"
          placeholder="Change Ipv4 Address"
          name="Ipv4"
          id="IPAddress"
          className={`${styles.input} ${firstInputError ? styles.error : ""}`}
        />
        <Button buttonText="Edit JSON" className={styles.jsonbtn} />
        <Button buttonText="Save" className={styles.add} />
      </Fragment>
    );

    return (
      <div className={styles.main}>
        <div className={styles.buttons}>
          <Button
            buttonText="Profile"
            className={pOrD === "P" && styles.active}
            onClick={() => {
              setPOrD("P");
              setWhatToDisplay("profile");
            }}
          />
          <Button
            buttonText="Domains"
            className={pOrD === "D" && styles.active}
            onClick={() => {
              setPOrD("D");
              setWhatToDisplay("domains");
            }}
          />
        </div>
        <div className={styles.adminPanel}>
          {whatToDisplay === "profile" && profile}
          {whatToDisplay === "domains" && domains}
          {whatToDisplay === "changePassword" && changePassword}
          {whatToDisplay === "changeUserInfo" && changeUserInfo}
          {whatToDisplay === "deleteProfile" && deleteProfile}
          {whatToDisplay === "addDomain" && addDomain}
          {whatToDisplay === "editDomain" && editDomain}
          {whatToDisplay === "deleteDomain" && deleteDomain}
        </div>
      </div>
    );
}

export default Admin;