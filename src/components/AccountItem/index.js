import React from 'react';
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles)

function AccountItem(props) {
  return (
    <div className={cx("wrapper")}>
      <img className={cx("avatar")} src="https://assets.teenvogue.com/photos/605e098ee06add019cb8de70/16:9/w_2560%2Cc_limit/HERA%2520BLACKPINK%2520JENNIE%2520CAMPAIGN%25209.jpg" alt="Lala"/>
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle}/>


        </p>
        <span className={cx("username")}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;