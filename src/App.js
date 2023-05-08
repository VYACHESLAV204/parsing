import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./component/Home";
import Parsing from "./component/Parsing";
import Autorization from "./component/Autorization";
import { useState } from "react";
import AddAccount from "./component/AddAccount";
import AddTemplate from "./component/AddTempates";
import TeplatesChange from "./component/TeplatesChange";

function App() {
  //Для страницы авторизации 1 для пароля второй для ответа
  const [login, setLogin] = useState({ user: "", password: "" });
  const [userChecked, setUserChecked] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          index
          element={
            <Autorization
              login={login}
              setLogin={setLogin}
              userChecked={userChecked}
              setUserChecked={setUserChecked}
            />
          }
        ></Route>
        <Route path="/" element={<MainLayout userChecked={userChecked} />}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/parsing" element={<Parsing />}></Route>
          <Route path="/add-account" element={<AddAccount />}></Route>
          <Route path="/add-template" element={<AddTemplate />}></Route>
          <Route
            path="/change-template"
            userChecked={userChecked}
            element={<TeplatesChange />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
