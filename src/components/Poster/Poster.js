import React from "react";
import styles from "./Poster.module.scss";

function Poster(props) {
  return (
    <div className={styles.posterContainer}>
      <img src={props.value} className={styles.image} alt="" />
    </div>
  );
}

export default Poster;
