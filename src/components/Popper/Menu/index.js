import React, {useState} from 'react';
import {Wrapper as PopperWrapper} from "../index";

import Tippy from "@tippyjs/react";
import  style from "./Menu.module.scss"
import classNames from "classnames/bind";
import MenuItem from "./MenuItem";
import Header from "./Header";
const cx = classNames.bind(style)
const defaultFn = () => {}

function Menu({children, items = [], onChange = defaultFn()}) {
  const [history, setHistory] = useState([{data: items}])
  const current = history[history.length - 1]


  const renderItems = () => {
    return current.data.map((item, key) => {
      const isParent = !!item.children;

      return (

        <MenuItem key={key} data={item} onClick={() => {

          if (isParent) {
            setHistory(pre => [...pre, item.children])


          } else {
            console.log(onChange)
            onChange(item);
          }
        }}></MenuItem>
        )


    })
  }
  return (
    <Tippy
      interactive
      offset={[12, 10]}
      delay={[0, 700]}
      placement={"bottom-end"}
      animation={false}
      render={attrs => (

        <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            {history.length > 1 && <Header title={"language"} onBack={() => {
              setHistory(pre => pre.slice(0, pre.length -1))
            }}/>}
            {renderItems()}


          </PopperWrapper>
        </div>

      )}
      onHide={() => setHistory(pre => pre.slice(0, 1))}
    >

      {children}


    </Tippy>
  );
}

export default Menu;