import { combineReducers } from "redux";
import listAdminReducer from "../admin/categories/reducers/listAdminReducer";
import staffAdminReducer from "../admin/employees/reducers/staffAdminReducer";
import eventAdminReducer from "../admin/events/reducers/eventAdminReducer";
import feedbackAdminReducer from "../admin/feedbacks/reducers/feedbackAdminReducer";
import authAdminReducer from "../admin/login/reducers/authAdminReducer";
import menuAdminReducer from "../admin/menus/reducers/menuAdminReducer";
import orderAdminReducer from "../admin/orders/reducers/orderAdminReducer";
import roleAdminReducer from "../admin/roles/reducers/roleAdminReducer";
import salaryAdminReducer from "../admin/salary/reducers/salaryAdminReducer";
import shiftAdminReducer from "../admin/schedules/reducers/shiftAdminReducer";
import userAdminReducer from "../admin/users/reducers/userAdminReducer";
import authReducer from "./reducer/auth";
import cartReducer from "./reducer/cart";
import drinkReducer from "./reducer/drink";
import salaryReducer from "./reducer/salary";
import shiftReducer from "./reducer/shift";
import orderReducer from "./reducer/order";
import inforStaffReducer from "./reducer/inforStaff";
import eventReducer from "./reducer/event";
import hobbyReducer from "../learn/reducers/hobby";

const rootReducer = combineReducers({
  auth: authReducer,
  drink: drinkReducer,
  cart: cartReducer,
  order: orderReducer,
  event: eventReducer,
  listAdmin: listAdminReducer,
  drinkAdmin: menuAdminReducer,
  staffAdmin: staffAdminReducer,
  userAdmin: userAdminReducer,
  orderAdmin: orderAdminReducer,
  eventAdmin: eventAdminReducer,
  feedbackAdmin: feedbackAdminReducer,
  salaryAdmin: salaryAdminReducer,
  cart: cartReducer,
  salary: salaryReducer,
  shift: shiftReducer,
  roleAdmin: roleAdminReducer,
  authAdmin: authAdminReducer,
  inforStaff: inforStaffReducer,
  shiftAdmin: shiftAdminReducer,
  hobby :hobbyReducer,
});

export default rootReducer;
