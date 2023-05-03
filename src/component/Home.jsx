import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import AddTemplateImg from "../sourse/img/material-symbols_edit-rounded.png";
import ChangeTemplateImg from "../sourse/img/Vector.png";
import AddUserImg from "../sourse/img/addaccount.png";
const Home = () => {
  return (
    <div className={styles.Main_MainDiv}>
      <div className={styles.InnerDiv}>
        <Link className={styles.startParsingLink}>Начать парсинг</Link>
        <div className={styles.LinksDiv}>
          <Link className={styles.Links1}>
            <img className={styles.LinkImg} src={AddTemplateImg}></img>Создать
            шаблон
          </Link>
          <Link className={styles.Links2}>
            <img className={styles.LinkImg} src={ChangeTemplateImg}></img>
            Изменить шаблон
          </Link>
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

export default Home;
