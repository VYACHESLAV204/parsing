import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Authorization = ({ login, setLogin, userChecked, setUserChecked }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLogin((prevState) => ({ ...prevState, [name]: value }));
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://192.168.1.189:5000/api/all_users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((response) => response.json())
      .then((data) => setUserChecked(data))
      .then((data) => navigate("/home"))

      .catch((error) => alert("Wrong password"))
      .catch((error) => console.error(error));

    console.log(userChecked);
  };

  return (
    <div className={styles.Main_MainDiv}>
      <div className={styles.InnerDiv}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="user"
            value={login.user}
            placeholder="Логин"
            className={styles.AddAccountMainButton}
            onChange={handleInputChange}
          />
          <div className={styles.LinksDiv}>
            <input
              type="password"
              name="password"
              value={login.password}
              placeholder="Пароль"
              className={`${styles.AddAccountMainButton} ${styles.AddAccountMainButtonHover}`}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.DivForAddAccountMainButton}>
            <button type="submit" className={styles.AddAccountMainButton}>
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Authorization;
