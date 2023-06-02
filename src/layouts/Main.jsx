import React from "react";
import NavBar from "../pages/navBar/NavBar";
import { Outlet, useNavigation } from "react-router-dom";
import Loading from "../pages/loding/Loading";

const Main = () => {
  const navigation = useNavigation();
  return (
    <div>
      <NavBar />
      <div>{navigation.state === "loading" ? <Loading /> : ""}</div>
      <Outlet />
    </div>
  );
};

export default Main;
