import { Outlet } from "react-router-dom";
import Header from "../component/Header"
const MainLayout = ({userName}) => {
  return (
    <>
      <Header userName={userName} />
      <Outlet />
    </>
  );
};

export default MainLayout;
