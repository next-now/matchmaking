/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import LocationOn from "@material-ui/icons/LocationOn";
// core components/views for Admin layout
import Login from "views/login/login.js";
import SignUp from "views/signup/signup.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import Maps from "views/Maps/Maps.js";
import RequestMaps from "views/RequestsMap/RequestMap.js";
import AskForHelp from "./views/AskForHelp/AskForHelp";
// core components/views for RTL layout

const dashboardRoutes = [

  {
    path: "/signup",
    name: "Signup",
    rtlName: "لوحة القيادة",
    icon: Person,
    component: SignUp,
    layout: "/soci-hunt"
  },
  {
    path: "/login",
    name: "Login",
    rtlName: "لوحة القيادة",
    icon: Person,
    component: Login,
    layout: "/soci-hunt"
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Dashboard,
    component: UserProfile,
    layout: "/soci-hunt"
  },
  {
    path: "/help-request",
    name: "Ask for help",
    icon: LiveHelpIcon,
    component: AskForHelp,
    layout: "/soci-hunt"
  },
  {
    path: "/givers-map",
    name: "Givers Maps",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/soci-hunt"
  },
  {
    path: "/seekers-map",
    name: "Seekers Maps",
    rtlName: "خرائط",
    icon: LocationOn,
    component: RequestMaps,
    layout: "/soci-hunt"
  },

];

export default dashboardRoutes;
