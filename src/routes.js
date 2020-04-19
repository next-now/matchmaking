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
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import Login from "views/login/login.js";
import SignUp from "views/signup/signup.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import RequestMaps from "views/RequestsMap/RequestMap.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import AskForHelp from "./views/AskForHelp/AskForHelp";
// core components/views for RTL layout

const dashboardRoutes = [

  {
    path: "/signup",
    name: "Signup",
    rtlName: "لوحة القيادة",
    icon: Person,
    component: SignUp,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    rtlName: "لوحة القيادة",
    icon: Person,
    component: Login,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Dashboard,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/help-request",
    name: "Ask for help",
    icon: LiveHelpIcon,
    component: AskForHelp,
    layout: "/admin"
  },
  {
    path: "/givers-map",
    name: "Givers Maps",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/seekers-map",
    name: "Seekers Maps",
    rtlName: "خرائط",
    icon: LocationOn,
    component: RequestMaps,
    layout: "/admin"
  },

];

export default dashboardRoutes;
