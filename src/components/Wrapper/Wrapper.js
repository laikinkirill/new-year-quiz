import React from "react";
import styles from "./Wrapper.module.scss";

function Wrapper(props) {
  return <div className={styles.wrapperContainer}>{props.children}</div>;
}

export default Wrapper;
