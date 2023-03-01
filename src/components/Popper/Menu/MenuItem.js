import React from 'react';

import Button from "../../Button";
import style from "./Menu.module.scss"
import classNames from "classnames/bind";

const cx = classNames.bind(style)


function MenuItem({data}) {
  return (
    <Button className={cx("menu-item")} leftIcon={data.icon} to={data.to}>
      {data.title}
    </Button>);
}

export default MenuItem;