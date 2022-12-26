import classNames from "classnames";
import React from "react";
import styles from "./Button.module.scss";

function Button({ className, value, disabled, onClick, id }) {
  return (
    <button
      className={classNames(styles.button, className)}
      onClick={onClick}
      disabled={disabled}
      id={id}
    >
      {value}
    </button>
  );
}

export default Button;
