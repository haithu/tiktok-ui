import React from 'react';
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
const cx = classNames.bind(styles)

function AccountItem({ data }) {
  return (
    <Link to={`/sadd${data.nickname}`} className={cx("wrapper")}>
      <img className={cx("avatar")} src={data.avatar} alt={data.full_name}/>
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>{data.full_name}</span>
          {data.tick && <FontAwesomeIcon className={cx("check")} icon={faCheckCircle}/>}


        </p>
        <span className={cx("username")}>{data.nickname}</span>
      </div>
    </Link>
  );
}

export default AccountItem;