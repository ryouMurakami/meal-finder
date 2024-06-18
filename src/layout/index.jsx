import Header from "../components/Header.jsx";
import Form from "../components/Form.jsx";
import { Outlet } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode.jsx";
import History from "../components/History.jsx";
import Button from "../components/Button.jsx";
import { useContext } from "react";
import { AppContext } from "../context";

const Layout = () => {
  const contextValues = useContext(AppContext);
  return (
    <div
      className="mode-body"
      data-theme={contextValues.theme === "light" ? "light" : "dark"}
    >
      <div className="container">
        <Header />
        <Button type="darkmode" />
        <Button type="delete" />
        <Form />
        <History />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
