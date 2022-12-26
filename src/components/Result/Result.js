/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState, useEffect } from "react";
import Title from "../Title/Title";
import Button from "../Button/Button";
import Paragraph from "../Paragraph/Paragraph";
import styles from "./Result.module.scss";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import classNames from "classnames";
import { RWebShare } from "react-web-share";
import {
  VKShareButton,
  OKShareButton,
  ViberShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from "react-share";
import {
  VKIcon,
  OKIcon,
  ViberIcon,
  WhatsappIcon,
  TelegramIcon,
} from "react-share";

function Result({ title, text, imageSrc }) {
  const [copySuccess, setCopySuccess] = useState("");
  const [showConditions, setShowConditions] = useState(false);
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    console.log(textAreaRef.current.value);
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess(
      <div className={styles.copySuccess}>Промокод скопирован.</div>
    );

    setTimeout(() => {
      setCopySuccess(
        <div className={classNames(styles.copySuccess, styles.displayNone)}>
          Промокод скопирован.
        </div>
      );
    }, "1500");
  }

  const [offset, setOffset] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY > 50) {
        setOffset(true);
      } else {
        setOffset(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const SiteURL = "https://newyyear.taximaximapp.ru/";
  const ImageURL = SiteURL + imageSrc;

  return (
    <>
      {!showConditions ? (
        <>
          <div className={styles.posterContainer}>
            <img src={imageSrc} className={styles.image} alt="" />
          </div>
          <div className={styles.resultContainer}>
            <div
              className={classNames({
                [styles.resultContainerBox]: true,
                [styles.onScrollOption]: offset,
              })}
            >
              <Title value={title} />
              <Paragraph value={text} />
              <div className={styles.promoBox}>
                <Paragraph
                  className={styles.paragraph}
                  value=" 
              У тебя еще нет нашего приложения? Тогда скачивай его скорее и получай 
              подарок — 500 премиальных рублей на поездки и услуги в сервисе «Максим» по промокоду"
                />

                <div className={styles.promoButtonsWrapper}>
                  <div className={styles.promoWrapper}>
                    <div className={styles.inputPromoWrapper}>
                      <form className={styles.form}>
                        <input
                          ref={textAreaRef}
                          value="NY2023"
                          className={styles.inputPromo}
                          readOnly
                        />
                      </form>

                      <button onClick={copyToClipboard} className={styles.copy}>
                        <ContentCopyIcon />
                      </button>
                    </div>
                  </div>

                  <div className={styles.buttonBox}>
                    <a
                      href="https://taximaxim.onelink.me/KKXl/dzdosj15"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button
                        value="Активировать промокод"
                        className={styles.buttonPresent}
                      />
                    </a>

                    <div
                      className={styles.buttonBoxLink}
                      onClick={() => {
                        setShowConditions(true);
                      }}
                    >
                      Условия акции
                    </div>
                  </div>
                </div>
              </div>
              <RWebShare
                data={{
                  title: "Я знаю, каким будет мой Новый год! А ты?",
                  text: "Я знаю, каким будет мой Новый год! А ты?",
                  url: SiteURL,
                }}
                onClick={() => console.log("shared successfully!")}
              >
                <Button
                  value="Поделиться результатом"
                  className={styles.buttonShare}
                />
              </RWebShare>

              <div className={styles.socialBox}>
                <Paragraph value="Поделиться результатом" />
                <div className={styles.social}>
                  <VKShareButton
                    url={SiteURL}
                    title="Я знаю, каким будет мой Новый год! А ты?"
                    image={ImageURL}
                    hashtag="#Maxim"
                  >
                    <VKIcon size={48} round={true} className={styles.icon} />
                  </VKShareButton>

                  <OKShareButton
                    url={SiteURL}
                    title="Я знаю, каким будет мой Новый год! А ты?"
                    image={ImageURL}
                    description={text}
                  >
                    <OKIcon size={48} round={true} className={styles.icon} />
                  </OKShareButton>

                  <ViberShareButton
                    url={SiteURL}
                    title="Я знаю, каким будет мой Новый год! А ты?"
                    image={ImageURL}
                  >
                    <ViberIcon size={48} round={true} className={styles.icon} />
                  </ViberShareButton>

                  <WhatsappShareButton
                    url={SiteURL}
                    title="Я знаю, каким будет мой Новый год! А ты?"
                    image={ImageURL}
                  >
                    <WhatsappIcon
                      size={48}
                      round={true}
                      className={styles.icon}
                    />
                  </WhatsappShareButton>

                  <TelegramShareButton
                    url={SiteURL}
                    title="Я знаю, каким будет мой Новый год! А ты?"
                    image={ImageURL}
                  >
                    <TelegramIcon
                      size={48}
                      round={true}
                      className={styles.icon}
                    />
                  </TelegramShareButton>
                </div>
              </div>
            </div>
          </div>

          {copySuccess}
        </>
      ) : (
        <>
          <div className={styles.posterContainer}>
            <img src={imageSrc} className={styles.image} alt="" />
          </div>
          <div className={styles.resultContainer}>
            <div
              className={classNames({
                [styles.resultContainerBox]: true,
                [styles.onScrollOption]: offset,
              })}
            >
              <Title value="Условия акции" />
              <Paragraph value="Номинал промокода 500 премиальных рублей. Промокод можно зарегистрировать до 31.12.2023 г. Премиальными рублями можно оплатить до 10% стоимости заказа. " />
              <Paragraph value="Акция распространяется на новых пользователей и пользователей, не совершавших заказы в сервисе «Максим» в течение 90 дней до активации промокода. " />
              <p className={styles.label}>
                Подробности акции на{" "}
                <a
                  href="https://legal.taximaxim.ru/bonus-program-rules"
                  target="_blank"
                  rel="noreferrer"
                >
                  сайте
                </a>
                .
              </p>
              <Button
                className={styles.buttonConditions}
                value="Назад"
                onClick={() => {
                  setShowConditions(false);
                }}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Result;
