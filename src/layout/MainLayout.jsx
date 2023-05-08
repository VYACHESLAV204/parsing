import { Outlet } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import MyContext from "../component/Mycontext";
import Header from "../component/Header";
import TeplatesChange from "../component/TeplatesChange";
const MainLayout = ({ userChecked }) => {
  return (
    <MyContext.Provider value={userChecked}>
      <Header userChecked={userChecked} />
      <Outlet userChecked={userChecked} />
    </MyContext.Provider>
  );
};

export default MainLayout;
