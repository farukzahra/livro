import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
import Livro from "../Livro/Livro.js";
import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Livro: { screen: Livro },
    Pagina: { screen: Livro }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
