import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./component/Home";
import Parsing from "./component/Parsing";
import Autorization from "./component/Autorization";
import { useEffect, useState } from "react";

function App() {
  const [userName, setUserName] = useState();

console.log(userName)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout userName={userName}/>}>
          <Route path="/" index element={<Autorization />}></Route>
          <Route path="/home"  element={<Home />}></Route>
          <Route path="/parsing" element={<Parsing/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
