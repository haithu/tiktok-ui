import React from 'react';
import styles from "./Sidebar.module.scss"
import classNames from "classnames/bind";
const cx = classNames.bind(styles)
function Sidebar(props) {
  return (
    <aside className={cx("wrapper")}>
      <h2>Sidebar</h2>

    </aside>

  );
}

export default Sidebar;