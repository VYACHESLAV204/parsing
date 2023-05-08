import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./Header.module.css";
import HomeImg from "../sourse/img/Home.png";
import ParsingImg from "../sourse/img/parsing.png";
import TemplateImg from "../sourse/img/templates.png";
import AddUserImg from "../sourse/img/addaccount.png";
import MenuArrowImg from "../sourse/img/littlearrow.png";
import AddTemplateImg from "../sourse/img/material-symbols_edit-rounded.png";
import ChangeTemplateImg from "../sourse/img/Vector.png";
const Header = ({userChecked}) => {
  console.log(userChecked)
  const [toggleMenu, setToggleMenu] = useState(true);
 
  //  useEffect(() => {

  //    fetch('http://192.168.8.144:5000/api/data',)
  //      .then(response => response.json())
  //     .then(data => setName(data))
  //      .then(data => console.log(data))
  //      .catch(Error => console.log(Error))
  //    }, []);
  //   console.log(name)
  const toggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className={styles.mainDiv}>
      <div className={styles.innerDiv}>
        <div className={styles.buttonDiv}>
          <img className={styles.images} src={HomeImg} alt=""></img>
          <NavLink to={"/home"}>Главная</NavLink>
        </div>
        <div className={styles.buttonDiv}>
          <img className={styles.images} src={ParsingImg} alt=""></img>
          <NavLink to={"./parsing"}>Парсинг</NavLink>
        </div>
        <div
          className={
            toggleMenu
              ? styles.buttonDiv
              : `${styles.buttonDiv} ${styles.active}`
          }
        >
          <img className={styles.images} src={TemplateImg} alt=""></img>
          <NavLink onClick={() => toggle()}>Шаблоны</NavLink>
          <img src={MenuArrowImg} className={styles.arrow} alt="" />
          <div className={toggleMenu ? styles.menu : styles.acctive}>
            <div className={styles.innerDivActive}>
              <img className={styles.divInnerImg} src={ChangeTemplateImg}></img>
              <NavLink to={"/change-template"}>Изменить</NavLink>
            </div>
            <div className={styles.innerDivActive}>
              <img className={styles.divInnerImg} src={AddTemplateImg}></img>
              <NavLink to={"/add-template"}>Создать</NavLink>
            </div>
          </div>
        </div>
        <div className={styles.buttonDiv}>
          <img className={styles.images} src={AddUserImg} alt=""></img>
          <NavLink to={"add-account"}>Создать аккаунт</NavLink>
        </div>
      </div>
      <h2>{`Добро пожаловать ${userChecked ? userChecked.user_profile.username : ""}`}</h2>
    </div>
  );
};

export default Header;
