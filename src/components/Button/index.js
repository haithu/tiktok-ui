import React from 'react';
import classNames from "classnames/bind";
import styles from "./Button.module.scss"
import {Link} from "react-router-dom";
import PropTypes from "prop-types";


const cx = classNames.bind(styles)

function Button({
                  to,
                  href,
                  primary = false,
                  outline = false,
                  text = false,
                  disabled = false,
                  small = false,
                  large = false,
                  rounded = false,
                  children,
                  className,
                  leftIcon,
                  rightIcon,
                  onClick,
                  ...passProps
                }) {
  let Comp = "button"
  const props = {
    onClick,
    ...passProps

  }
  //delete all the functions of button when it disable
  if (disabled) {
    Object.keys(props).forEach(key => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key]
      }
    })
  }
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a"

  }
  let classes = cx("wrapper", {
    primary,
    outline,
    small,
    large,
    text,
    disabled,
    rounded,
    [className]: className
  })

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}


    </Comp>
  );
}
Button.propsTypes = {
  to:PropTypes.string,
  href:PropTypes.string,
  primary:PropTypes.bool,
  outline:PropTypes.bool,
  text:PropTypes.bool,
  disabled:PropTypes.bool,
  small:PropTypes.bool,
  large:PropTypes.bool,
  rounded:PropTypes.bool,
  children:PropTypes.node.isRequired,
  className:PropTypes.string,
  leftIcon:PropTypes.node,
  rightIcon:PropTypes.node,
  onClick:PropTypes.func,
}

export default Button;