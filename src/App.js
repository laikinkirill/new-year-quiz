import Title from "./components/Title/Title";
import Paragraph from "./components/Paragraph/Paragraph";
import Button from "./components/Button/Button";
import OptionsItem from "./components/OptionsItem/OptionsItem";
import React, { useEffect, useState } from "react";
import imagePrev from "./assets/images/00.webp";
import imageResult1 from "./assets/images/91.webp";
import imageResult2 from "./assets/images/92.webp";
import imageResult3 from "./assets/images/93.webp";
import styles from "./App.module.scss";
import questions from "./state/questions";
import classNames from "classnames";
import Result from "./components/Result/Result";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [stateFlow, setStateFlow] = useState("Prev");
  const [option, setOption] = useState(false);
  const [resultState, setResultState] = useState("");

  const [counterCat1, setCounterCat1] = useState(1);
  const [counterCat2, setCounterCat2] = useState(1);
  const [counterCat3, setCounterCat3] = useState(1);
  const [counterCat4, setCounterCat4] = useState(1);

  const optionActiveHandler = (option) => {
    setOption(option);

    setTimeout(() => {
      window.scrollTo({ top: 1000, behavior: "smooth" });
    }, "50");
  };

  const catOne = (cat1) => {
    setCounterCat1(counterCat1 + cat1);
  };

  const catTwo = (cat2) => {
    setCounterCat2(counterCat2 + cat2);
  };

  const catThree = (cat3) => {
    setCounterCat3(counterCat3 + cat3);
  };

  const catFour = (cat4) => {
    setCounterCat4(counterCat4 + cat4);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handlerNext = () => {
    if (currentQuestion === 7) {
      setStateFlow("End");

      setResultState(() => {
        if (
          counterCat1 >= counterCat2 &&
          counterCat1 >= counterCat3 &&
          counterCat1 >= counterCat4
        ) {
          setResultState(() => {
            return (
              <Result
                title="Праздник — это ты"
                text="Ты точно знаешь, что Новый год — самый семейный праздник. 
                Для тебя традиции не пустой звук, а близкие превыше всего. 
                И твое сердце так же, как в детстве, замирает в ожидании подарков."
                imageSrc={imageResult3}
              />
            );
          });

          scrollToTop();
        }

        if (
          counterCat2 >= counterCat1 &&
          counterCat2 >= counterCat3 &&
          counterCat2 >= counterCat4
        ) {
          setResultState(() => {
            return (
              <Result
                title="Ты всегда в движении"
                text="Для тебя Новый год — это новые впечатления. 
              Поэтому мерцанию гирлянд ты предпочитаешь звездное небо, а горячему чаю с тортиком — объятия новых друзей. 
              Самое время отправиться навстречу приключениям и подаркам. Поехали!"
                imageSrc={imageResult1}
              />
            );
          });

          scrollToTop();
        }

        if (
          counterCat3 >= counterCat1 &&
          counterCat3 >= counterCat2 &&
          counterCat3 >= counterCat4
        ) {
          setResultState(() => {
            return (
              <Result
                title="Твой праздник еще впереди"
                text="Похоже, тебя сложно удивить новогодними чудесами. 
            Но даже если тебе совсем не хочется окружать себя праздничной атмосферой, не забывай, что 
            Новый год — это еще и несколько выходных подряд."
                imageSrc={imageResult2}
              />
            );
          });

          scrollToTop();
        }

        if (
          counterCat4 >= counterCat1 &&
          counterCat4 >= counterCat2 &&
          counterCat4 >= counterCat3
        ) {
          setResultState(() => {
            return (
              <Result
                title="Ты всегда в движении"
                text="Для тебя Новый год — это новые впечатления. 
            Поэтому мерцанию гирлянд ты предпочитаешь звездное небо, 
            а горячему чаю с тортиком — объятия новых друзей. 
            Самое время отправиться навстречу приключениям и подаркам. Поехали!"
                imageSrc={imageResult1}
              />
            );
          });

          scrollToTop();
        }
      });
    } else {
      setOption(false);
      setCurrentQuestion(currentQuestion + 1);

      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, "50");
    }
  };

  const handlerBack = () => {
    setOption(false);
    setStateFlow("Prev");
    setCurrentQuestion(0);
  };

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

  return (
    <>
      <div className={styles.wrapperContainer}>
        {stateFlow === "Prev" ? (
          <>
            <div className={styles.posterContainer}>
              <img src={imagePrev} className={styles.image} alt="" />
            </div>

            <div className={styles.firstscreenContainer}>
              <div>
                <Title value="Вместе встретим Новый год!" />
                <Paragraph
                  value="Вот так всегда!
                  Оглянуться не успеешь, как на календаре уже 31-е число.
                  Предпраздничная суета кружит голову всем одинаково, а Новый год каждый все равно встречает по-своему."
                />

                <Paragraph
                  value="Ответь на 8 вопросов, чтобы узнать, какой праздник тебя ждет."
                  strong
                />

                <Button
                  value="Пройди тест"
                  onClick={() => setStateFlow("Flow")}
                />
              </div>
            </div>
          </>
        ) : stateFlow === "Flow" ? (
          <>
            <div className={styles.posterContainer}>
              <img
                src={questions[currentQuestion].image}
                className={styles.image}
                alt={questions[currentQuestion].image}
              />
            </div>

            <div
              className={classNames({
                [styles.optionsContainer]: true,
                [styles.onScrollOption]: offset,
              })}
            >
              <div className={styles.bgWhite}>
                <div className={styles.header}>
                  <div className={styles.topBarContainer}>
                    <div>
                      Вопрос {currentQuestion + 1} из {questions.length}
                    </div>
                    <div onClick={handlerBack} className={styles.back}>
                      На главную
                    </div>
                  </div>
                  <div className={styles.titleWrapper}>
                    <Title value={questions[currentQuestion].questionText} />
                  </div>
                </div>

                <div className={styles.optionsWrapper}>
                  {questions[currentQuestion].answerOptions.map((item) => (
                    <OptionsItem
                      key={item.answerText}
                      title={item.answerText}
                      resultText={item.answerResult}
                      onClick={optionActiveHandler}
                      disabled={option}
                      category={item.category}
                      cat1={catOne}
                      cat2={catTwo}
                      cat3={catThree}
                      cat4={catFour}
                    />
                  ))}
                </div>

                <div className={styles.buttonContainer}>
                  <Button
                    className={styles.buttonNotfix}
                    value="Далее"
                    onClick={() => handlerNext()}
                    disabled={!option}
                    id={"btn" + (currentQuestion + 1)}
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>{resultState}</>
        )}
      </div>
    </>
  );
}

export default App;
