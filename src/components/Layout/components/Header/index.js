import React, {useEffect, useState} from 'react';
import styles from "./Header.module.scss"
import classNames from "classnames/bind";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark, faMagnifyingGlass, faSpinner} from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


import {Wrapper as PopperWrapper} from "../../../Popper";
import images from "../../../../assets/images";
import AccountItem from "../../../AccountItem";

const cx = classNames.bind(styles)
console.log(images.logo)

function Header(props) {
  const [searchResult, setSearchResult] = useState([])
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 23])
    }, 3000)

  }, [])
  return (<header className={cx("wrapper")}>
    <div className={cx("inner")}>
      <div className={cx("logo")}>
        <img src={images.logo} alt=""/>

      </div>
      <Tippy
        interactive={true}
        visible={searchResult.length > 0}
        render={attrs => (

          <div className={cx('search-result')} tabIndex={-1} {...attrs}>
            <PopperWrapper>
              <h4 className={cx("search-title")}>Accounts</h4>
              <AccountItem />
              <AccountItem />
              <AccountItem />
              <AccountItem />
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

      </div>


    </div>
  </header>);
}

export default Header;