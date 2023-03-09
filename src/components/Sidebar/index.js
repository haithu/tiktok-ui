import React from 'react';
import styles from "./Sidebar.module.scss"
import classNames from "classnames/bind";
import Menu from "./Menu/Menu";
import MenuItems from "./Menu/MenuItems";
import routes from "../../config/routes";
import {HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, UserGroupActiveIcon, UserGroupIcon} from "../Icons/icon";
const cx = classNames.bind(styles)
function Sidebar(props) {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItems to={routes.home} title={"For you"} icon={<HomeIcon/>} activeIcon={<HomeActiveIcon/>}/>
        <MenuItems to={routes.following} title={"Following"} icon={<UserGroupIcon/>} activeIcon={<UserGroupActiveIcon/>}/>
        <MenuItems to={routes.live} title={"LIVE"} icon={<LiveIcon/>} activeIcon={<LiveActiveIcon/>}/>

      </Menu>

    </aside>

  );
}

export default Sidebar;