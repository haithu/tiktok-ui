import React from 'react';

import Sidebar from "../../components/Sidebar";
import styles from "./DefaultLayout.module.scss"
import classNames from "classnames/bind";
import Header from "../components/Header";
import PropTypes from "prop-types";
const cx = classNames.bind(styles)

function DefaultLayout({children}) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>

        <Sidebar/>
        <div className={cx("content")}>{children}</div>

      </div>
    </div>
  );
}
DefaultLayout.propstype = {
  children: PropTypes.node.isRequired
}

export default DefaultLayout;