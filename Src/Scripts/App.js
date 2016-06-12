import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, useRouterHistory} from "react-router";
import {createHashHistory} from "history";
import Dashboard from "./Main/Dashboard/Dashboard";
import Tracking from "./Main/Tracking/Tracking";
import cookie from "react-cookie";

import "./../Css/Main.css";

console.log("appppp");

const appHistory = useRouterHistory(createHashHistory)({queryKey: false});
const app = document.getElementById("app");

ReactDOM.render(
  <Router history={appHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/dashboard" components={Dashboard} />
    <Route path="/tracking" component={Tracking} />
  </Router>,
app);
