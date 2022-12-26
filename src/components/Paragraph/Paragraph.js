import classNames from "classnames";
import React from "react";
import styles from "./Paragraph.module.scss";

function Paragraph({ value, strong, className }) {
  return (
    <p
      className={classNames({
        [className]: className,
        [styles.paragraph]: true,
        [styles.strong]: strong,
      })}
    >
      {value}
    </p>
  );
}

export default Paragraph;
