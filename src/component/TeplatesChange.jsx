import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "./Parsing.module.css";
import TeplatesChangeStyles from "./TemplateChange.module.css";
import AddTemplateImg from "../sourse/img/material-symbols_edit-rounded.png";
import MyContext from "./Mycontext";
import { useContext } from "react";
const TeplatesChange = () => {
  const [buttonDecoration, setButtonDecoration] = useState();
  const userChecked = useContext(MyContext);
  const [target, setTarget] = useState({ key: "" });
  const [getTarget, setGetTarget] = useState("");
  function sendTemplate() {
    fetch("http://192.168.1.189:5000/api/pattern", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(target),
    })
      .then(() => getTemplate())
      .catch((error) => console.log(error));
  }

  function getTemplate() {
    fetch("http://192.168.1.189:5000/api/pattern/result", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.log(error));
  }

  function handleOnChange(event) {
    const newValue = event.target.value;
    setTarget({ ...target, key: newValue });

    sendTemplate();
  }
  return (
    <div className={styles.ParsingMainDiv}>
      <div className={TeplatesChangeStyles.innerDiv}>
        <div className={TeplatesChangeStyles.targetTempalateDiv}>
          <h3 className={TeplatesChangeStyles.from}>
            Выберите шаблон, который хотите изменить
          </h3>
          {userChecked.user_profile.list_pat.map((el, index) => {
            return (
              <div key={index}>
                <p
                  className={`${styles.Radio} ${
                    buttonDecoration ? styles.active : ""
                  } `}
                >
                  <input
                    name="From"
                    type="radio"
                    value={el}
                    onClick={handleOnChange}
                  />
                  {el}
                </p>
              </div>
            );
          })}

          <Link className={TeplatesChangeStyles.AddAccountMainButton}>
            <img
              alt=""
              className={TeplatesChangeStyles.LinkImg}
              src={AddTemplateImg}
            ></img>
            Создать шаблон
          </Link>
        </div>
        {
          <div>
            {/* {userChecked.table_data[0].user12_123.map((item) => {
            return (
              <div key={item.user_admin_шаблон[0]}>
                {" "}
                <textarea
                  name=""
                  id=""
                  className={TeplatesChangeStyles.MainTextArea}
                  defaultValue={item.user_admin_шаблон[2]}
                  cols="30"
                  rows="10"
                ></textarea>
                {[...Array(item.data.count)].map((_, index) => {
                  return (
                    <div
                      className={TeplatesChangeStyles.templateDynamicInnerDiv}
                      key={index}
                    >
                      <input
                        type="text"
                        className={TeplatesChangeStyles.inputs}
                        placeholder={`Cсылка ${++index}`}
                      />
                      <input
                        type="text"
                        className={TeplatesChangeStyles.inputs}
                        placeholder={`Название товара ${index}`}
                      />
                      <textarea
                        placeholder={`Ссылки на конкурентов (каждая с новой строки) ${index}`}
                        name="To opposition"
                        id="opposition"
                        className={TeplatesChangeStyles.MainTextArea}
                        cols="30"
                        defaultValue={item.user_admin_шаблон[4]}
                        rows="10"
                      ></textarea>
                    </div>
                  );
                })}
              </div>
            );
          })} */}
          </div>
        }
      </div>
    </div>
  );
};

export default TeplatesChange;
