import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Admin from "../admin/Admin";
import AdminLoginPage from "../admin/login/pages/Login";
import AdminMenuPage from "../admin/menus/pages/Menu";
import EmployeePage from "../admin/employees/pages/EmployeePage";
import UserPage from "../admin/users/pages/UserPage";
import SalaryPage from "../admin/salary/pages/SalaryPage";
import SchedulePage from "../admin/schedules/pages/SchedulePage";
import CategoryPage from "../admin/categories/pages/CategoryPage";
import FeedbackPage from "../admin/feedbacks/pages/FeedbackPage";
import OrderPage from "../admin/orders/pages/OrderPage";
import EventPage from "../admin/events/pages/EventPage";

import Salary from '../employee/pages/Salary';
import Calendar from '../employee/pages/Calendar';
import InformationStaff from "../employee/pages/Information";
import ChangePasswordStaffPage from "../employee/pages/Information/changePassword";


import LoginPage from "../users/pages/LoginPage";
import SignupPage from "../users/pages/SignupPage";
import EmailAuthenPage from "../users/pages/EmailAuthenPage";
import HomePage from "../users/pages/HomePage";
import MenuPage from "../users/pages/MenuPage";


import ConfirmOrderPage from "../users/pages/ConfirmOrderPage";
import UserDetailPage from "../users/pages/UserDetailPage";
import UserChangePasswordPage from "../users/pages/UserChangePasswordPage";
import UserHistoryOrder from "../users/pages/UserHistoryOrder";

import NotFound from "../components/NotFound";

import { PrivateRoute } from "./PrivateRoute";
import { UserPrivateRoute } from "./PrivateRoute";
import RolePage from "../admin/roles/pages/RolePage";
import AboutUsPage from "../users/pages/aboutus";
import AboutUs from "../users/components/aboutus/aboutus";
import DetailPage  from "../admin/orders/pages/DetailPage";
import OrderDetailPage from "../users/pages/OrderDetailPage";
import StatisticPage from "../admin/statistic/page/StatisticPage";


const routes = () => {
  return (
    <Switch>
      
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/authen" component={EmailAuthenPage}/> 
      <Route path="/menu" component={MenuPage} />
      {/* <Route path="/about-us" component={AboutUs} /> */}
      <UserPrivateRoute path="/order" component={ConfirmOrderPage} />
      <UserPrivateRoute exact path="/user/detail" component={UserDetailPage} />
      <UserPrivateRoute exact path="/user/change-password" component={UserChangePasswordPage} />
      <UserPrivateRoute exact path="/user/history-order" component={UserHistoryOrder} />
      {/* <PrivateRoute  path="/user/history-order/:orderId" component={OrderDetailPage} /> */}
      
      <Route path="/admin/login" component={AdminLoginPage} />
      <Redirect exact from="/admin" to="/admin/statistic" />
      <PrivateRoute path="/admin/statistic" component={StatisticPage} />
      <PrivateRoute path="/admin/menu" component={AdminMenuPage} />
      <PrivateRoute path="/admin/employees" component={EmployeePage} />
      <PrivateRoute path="/admin/users" component={UserPage} />
      <PrivateRoute path="/admin/salary" component={SalaryPage} />
      <PrivateRoute path="/admin/schedule" component={SchedulePage} />
      <PrivateRoute path="/admin/categories" component={CategoryPage} />
      <PrivateRoute path="/admin/feedbacks" component={FeedbackPage} />
      <PrivateRoute path="/admin/events" component={EventPage} />

      {/* <PrivateRoute path ="/admin/statistic" component={StatisticPage}/> */}

      <PrivateRoute exact path="/admin/orders" component={OrderPage} />
      <PrivateRoute path ="/admin/orders/:orderId" component={DetailPage} />
      <PrivateRoute path="/admin/roles" component={RolePage} />
      <PrivateRoute path ="/admin/myaccount" component={InformationStaff}/>
      <PrivateRoute path="/admin/account/detail" component={InformationStaff} />
      {/* <PrivateRoute path="/employee/:employeeId/account/change-password" component={ChangePasswordStaffPage} /> */
      }

      <PrivateRoute path="/admin/account/changePassword" component={ChangePasswordStaffPage} />
      <PrivateRoute path="/employee/:employeeId/salary" component={Salary} />
      <PrivateRoute path="/employee/:employeeId/calendar" component={Calendar} />
      
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default routes;
