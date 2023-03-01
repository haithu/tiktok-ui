import React from 'react';
import {Wrapper as PopperWrapper} from "../index";

import Tippy from "@tippyjs/react";
import  style from "./Menu.module.scss"
import classNames from "classnames/bind";
import MenuItem from "./MenuItem";
const cx = classNames.bind(style)

function Menu({children, items = []}) {
  const renderItems = () => {
    return items.map((item, key) => (
      <MenuItem key={key} data={item}></MenuItem>

    ))
  }
  return (
    <Tippy
      interactive
      delay={[0, 700]}
      placement={"bottom-end"}
      animation={false}
      render={attrs => (

        <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            {renderItems()}

          </PopperWrapper>
        </div>

      )}
    >

      {children}


    </Tippy>
  );
}

export default Menu;