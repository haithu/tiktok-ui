import React, {useEffect, useState} from 'react';
import styles from "./Header.module.scss"
import classNames from "classnames/bind";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion, faCoins,
  faEarthAsia,
  faEllipsisVertical, faGear, faKeyboard,
   faSignOut
  , faUser
} from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import images from "../../../assets/images";

import Button from "../../../components/Button";
import Menu from "../../../components/Popper/Menu";
import {MessageIcon} from "../../../components/Icons";
import Image from "../../../components/Image";
import Search from "../Search";
import {Link} from "react-router-dom";
import routesConfig from "../../../config/routes";


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
        },
        {
          type: "language",
          code: "en",
          title: "english"
        },
        {
          type: "language",
          code: "vi",
          title: "vietnamese"
        },
        {
          type: "language",
          code: "en",
          title: "english"
        },
        {
          type: "language",
          code: "vi",
          title: "vietnamese"
        },
        {
          type: "language",
          code: "en",
          title: "english"
        },
        {
          type: "language",
          code: "vi",
          title: "vietnamese"
        },
        {
          type: "language",
          code: "en",
          title: "english"
        },
        {
          type: "language",
          code: "vi",
          title: "vietnamese"
        },
        {
          type: "language",
          code: "en",
          title: "english"
        },
        {
          type: "language",
          code: "vi",
          title: "vietnamese"
        },
        {
          type: "language",
          code: "en",
          title: "english"
        },
        {
          type: "language",
          code: "vi",
          title: "vietnamese"
        },

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
        <Link to={routesConfig.home} className={cx("logo-link")}><img src={images.logo} alt=""/></Link>

      </div>
      {/*search*/}
      <Search/>
      <div className={cx("action")}>

        {currentUser ? (
          <>
            <Tippy
            content={"Inbox"}
            placement={"bottom"}>
            <div className={cx("current-user")}>
              <button className={cx("action-btn")}>
                <MessageIcon/>
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

        <Menu items={currentUser? userMenu: MENU_ITEMS} onChange={handleMenuChange} hideOnClick>
          {currentUser ? (
            <Image
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