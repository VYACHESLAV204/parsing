import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import AddTemplateImg from "../sourse/img/material-symbols_edit-rounded.png";
import ChangeTemplateImg from "../sourse/img/Vector.png";
import AddUserImg from "../sourse/img/addaccount.png";
const Autorization = () => {
  return (
    <div className={styles.Main_MainDiv}>
      <div className={styles.InnerDiv}>
        <input
          placeholder="Логин"
          className={styles.AddAccountMainButton}
        ></input>
        <div className={styles.LinksDiv}>
          <input
            placeholder="Пароль"
            className={`${styles.AddAccountMainButton} ${styles.AddAccountMainButtonHover}}`}
          ></input>

          <div className={styles.DivForAddAccountMainButton}>
            <Link className={styles.AddAccountMainButton}>Войти</Link>
          </div>
          <div className={styles.DivForAddAccountMainButton}>
            <Link className={styles.AddAccountMainButton}>
              <img
                className={styles.AddAccountLinkImg}
                src={AddUserImg}
                alt=""
              />{" "}
              Создать аккаунт
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Autorization;
