import React from "react";
import styles from "./Title.module.scss";

function Title({ value }) {
  return <h1 className={styles.title}>{value}</h1>;
}

export default Title;
