import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import AddUserImg from "../sourse/img/addaccount.png";
const AddAccount = () => {
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

export default AddAccount;
