import React, { useEffect, useState } from "react";
import styles from "./Parsing.module.css";
import data from "./array";
const Parsing = () => {
  const [template_name, setTemplate_name] = useState(null);
  const [buttonDecoration, setButtonDecoration] = useState();
  //console.log(buttonDecoration);
  return (
    <div className={styles.ParsingMainDiv}>
      <div className={styles.innerDiv}>
        <h3 className={styles.from}>
          Выберете откуда будет происходить парсинг
        </h3>
        <div>
          <p
            className={`${styles.Radio} ${
              buttonDecoration === "Яндекс лавка" ? styles.active : ""
            }`}
          >
            <input
              name="From"
              type="radio"
              value={"Яндекс лавка"}
              onClick={(e) => setButtonDecoration(e.target.value)}
            />
            Яндекс лавка
          </p>
          <p
            className={`${styles.Radio} ${
              buttonDecoration === "Сбермаркет" ? styles.active : ""
            }`}
          >
            <input
              name="From"
              type="radio"
              value={"Сбермаркет"}
              onClick={(e) => setButtonDecoration(e.target.value)}
            />
            Сбермаркет
          </p>
        </div>
        <h3 className={styles.Method}>
          Выберете способ указывания адресов и ссылок
        </h3>
        <div>
          <p
            className={`${styles.Radio} ${
              template_name === "template" ? styles.active : ""
            }`}
          >
            <input
              name="Method"
              type="radio"
              value={"template"}
              onClick={(e) => setTemplate_name(e.target.value)}
            />
            template_name
          </p>
          <p
            className={`${styles.Radio} ${
              template_name === "default" ? styles.active : ""
            }`}
          >
            <input
              name="Method"
              type="radio"
              value={"default"}
              onClick={(e) => setTemplate_name(e.target.value)}
            />
            Вручную
          </p>
        </div>
        <div>
          {data.map((item) => (
            <div className={styles.DynamicPeaceMainDiv} key={item.id}>
              <textarea
                placeholder="Адреса (каждый с новой строки)"
                name="adress"
                key={item.id}
                id="adress"
                className={styles.DynamicMainTextArea}
                cols="30"
                rows="10"
              ></textarea>
              {[...Array(item.count)].map((_, index) => (
                <div className={styles.div} key={index}>
                  <input
                    type="text"
                    className={styles.inputs}
                    placeholder={`Cсылка ${++index} `}
                  />
                  <input
                    type="text"
                    className={styles.inputs}
                    placeholder={`Название товара ${++index} `}
                  />
                  <textarea
                    placeholder={`Ссылки на конкурентов (каждая с новой строки) ${++index} `}
                    name="To opposition"
                    id="opposition"
                    cols="30"
                    className={styles.secondTextarea}
                    rows="10"
                  ></textarea>
                </div>
              ))}
            </div>
          ))}
        </div>
        <button className={styles.Button}>Начать парсинг</button>
      </div>
    </div>
  );
};

export default Parsing;
