import React from "react";
import styles from "./Content.module.scss";
import Title from "../Title/Title";
import Button from "../Button/Button";
import Paragraph from "../Paragraph/Paragraph";

function Content() {
  return (
    <div className={styles.contentContainer}>
      <div>
        <Title text="«Максим» ❤️ тебя, а ты?" />
        <Paragraph
          value="14 февраля, почти во всем мире празднуется День святого Валентина!
        Влюбленные делают друг другу подарки, сюрпризы, а самое главное -
        признаются в своих чувствах! Кого или что любишь ты? Пройди тест, ответь
        на 8 вопросов и узнай свои любовные предпочтения!"
        />

        <Paragraph value="Пройди тест и получи 500 рублей на поездки и доставку." />

        <Button value="Пройди тест" />
      </div>
    </div>
  );
}

export default Content;
