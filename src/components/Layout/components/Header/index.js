import React, {useEffect, useState} from 'react';
import styles from "./Header.module.scss"
import classNames from "classnames/bind";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCircleXmark,
  faEarthAsia,
  faEllipsisVertical, faKeyboard,
  faMagnifyingGlass,
  faSpinner
} from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


import {Wrapper as PopperWrapper} from "../../../Popper";
import images from "../../../../assets/images";
import AccountItem from "../../../AccountItem";
import Button from "../../../Button";
import Menu from "../../../Popper/Menu";

const cx = classNames.bind(styles)
console.log(images.logo)
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia}/>,
    title: "English",

  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
    title: "Feedback and help",
    to: "./feedback"

  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard}/>,
    title: "Keyboad shortcuts"

  }

]

function Header(props) {

  useEffect(() => {


  }, [])
  return (<header className={cx("wrapper")}>
    <div className={cx("inner")}>
      <div className={cx("logo")}>
        <img src={images.logo} alt=""/>

      </div>
      <Tippy
        interactive={true}
        // animation={false}

        render={attrs => (

          <div className={cx('search-result')} tabIndex={-1} {...attrs}>
            <PopperWrapper>
              <h4 className={cx("search-title")}>Accounts</h4>
              <AccountItem/>
              <AccountItem/>
              <AccountItem/>
              <AccountItem/>
            </PopperWrapper>
          </div>

        )}
      >
        <div className={cx("search")}>
          <input
            placeholder={"search accounts and videos"}
            type="text"
          />
          <button className={cx("clear")}>
            {/*  clear*/}
            <FontAwesomeIcon icon={faCircleXmark}/>

          </button>
          <FontAwesomeIcon className={cx("loading")} icon={faSpinner}/>
          {/*  Loading*/}

          <button className={cx("search-btn")}>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
            {/*  search*/}
          </button>


        </div>
      </Tippy>

      <div className={cx("action")}>
        <Button text>Upload</Button>
        <Button primary>Log in</Button>


        <Menu items={MENU_ITEMS}>
          <button className={cx("more-btn")}>
            <FontAwesomeIcon icon={faEllipsisVertical}/>
          </button>
        </Menu>


      </div>


    </div>
  </header>);
}

export default Header;