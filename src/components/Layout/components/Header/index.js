import React, {useEffect, useState} from 'react';
import styles from "./Header.module.scss"
import classNames from "classnames/bind";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCircleXmark, faCloudUpload, faCoins,
  faEarthAsia,
  faEllipsisVertical, faGear, faKeyboard,
  faMagnifyingGlass, faMessage, faSignOut,
  faSpinner, faUser
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
    children: {
      title: "language",
      data: [
        {
          type: "language",
          code: "en",
          title: "english"
        },
        {
          type: "language",
          code: "vi",
          title: "vietnamese"
        }
      ]
    }

  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
    title: "Feedback and help",
    // to: "./feedback"

  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard}/>,
    title: "Keyboard shortcuts"
  }

]

function Header(props) {
  const currentUser = true;


  useEffect(() => {


  }, [])
  const handleMenuChange = (menuItem) => {
    console.log(menuItem)
  }
  const userMenu = [

    {
      icon: <FontAwesomeIcon icon={faUser}/>,
      title: "View Profile",
      to: "./feedback"

    },
    {
      icon: <FontAwesomeIcon icon={faCoins}/>,
      title: "Get coins",
      to: "./feedback"

    },
    {
      icon: <FontAwesomeIcon icon={faGear}/>,
      title: "Setting",
      to: "./feedback"

    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut}/>,
      title: "Log out",
      to: "./feedback",
      separate: true,

    }


  ]
  return (<header className={cx("wrapper")}>
    <div className={cx("inner")}>
      <div className={cx("logo")}>
        <img src={images.logo} alt=""/>

      </div>
      <Tippy
        interactive={true}
        animation={false}

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

        {currentUser ? (
          <>
            <Tippy
            content={"upload video"}
            placement={"bottom"}>
            <div className={cx("current-user")}>
              <button className={cx("action-btn")}>
                <FontAwesomeIcon icon={faCloudUpload}/>
              </button>


            </div>
          </Tippy>
          </>

        ) : (

          <>
            <Button text>Upload</Button>
            <Button primary>Log in</Button>


          </>


        )}

        <Menu items={currentUser? userMenu: MENU_ITEMS} onChange={handleMenuChange}>
          {currentUser ? (
            <img
              className={cx("user-avatar")}
              src="https://assets.teenvogue.com/photos/605e098ee06add019cb8de70/16:9/w_2560%2Cc_limit/HERA%2520BLACKPINK%2520JENNIE%2520CAMPAIGN%25209.jpg"
              alt=""/>

          ) : (
            <button className={cx("more-btn")}>
              <FontAwesomeIcon icon={faEllipsisVertical}/>
            </button>

          )}
        </Menu>
      </div>

    </div>
  </header>);
}

export default Header;