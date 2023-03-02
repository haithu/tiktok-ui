import React from 'react';

import  style from "./Menu.module.scss"
import classNames from "classnames/bind";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";


const cx = classNames.bind(style)

function Header({title, onBack}) {

  return (
    <header className={cx("header")}>
      <button className={cx("back-btn")}>
        <FontAwesomeIcon icon={faChevronLeft} onClick={onBack}/>
      </button>
      <h4 className={cx("title")}>{title}</h4>

    </header>

  );
}

export default Header;