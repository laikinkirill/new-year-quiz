import classNames from "classnames";
import React, { useState } from "react";
import styles from "./OptionsItem.module.scss";

function OptionsItem({
  title,
  resultText,
  onClick,
  disabled,
  category,
  cat1,
  cat2,
  cat3,
  cat4,
}) {
  const [optionActive, setOptionActive] = useState(false);

  const optionActiveHandler = () => {
    onClick(true);
    setOptionActive(true);

    if (category === "cat1") {
      cat1(1);
    }

    if (category === "cat2") {
      cat2(1);
    }

    if (category === "cat3") {
      cat3(1);
    }

    if (category === "cat4") {
      cat4(1);
    }
  };

  return (
    <button
      onClick={optionActiveHandler}
      className={classNames({
        [styles.optionsItem]: true,
        [styles.optionsItemActive]: optionActive,
      })}
      disabled={disabled}
    >
      <span className={styles.title}>{title}</span>
      {optionActive ? <span className={styles.text}>{resultText}</span> : <></>}
    </button>
  );
}

export default OptionsItem;
