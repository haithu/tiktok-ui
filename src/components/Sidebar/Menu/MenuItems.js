import React from 'react';
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import style from "./Menu.module.scss"
import classNames from "classnames/bind";
const  cx = classNames.bind(style)

function MenuItems({title, to, icon, activeIcon}) {
  return (
    // The className prop in NavLink works like a normal className,
    // but you can also pass it a function to customize the classNames applied based on the active and pending state of the link.
    <NavLink
      to={to}
      className={(nav) => cx("menu-item", {active: nav.isActive})}
    >
      <span className={cx("icon")}>{icon}</span>

      <span className={cx("active-icon")}>{activeIcon}</span>

      <span className={cx("title")}>{title}</span>

    </NavLink>
  );
}
MenuItems.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired
}

export default MenuItems;