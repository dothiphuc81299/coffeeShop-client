import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";

import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import { getDetailOrders } from "../../admin/orders/actions";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Card    } from "@material-ui/core";
import SideBar from "../components/ui/UserSidebar";


import { DateFormat, DateUtils } from "../../utils";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: "#5FA3B7",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: 750,
  },
  table: {
    display: "flex",
    marginLeft: drawerWidth,
  },
  
  labelFormat:{
    // display: "flex",
    justifyContent: "flex-start",
    marginLeft: theme.spacing(40),
  },
  labelUsername :{
    justifyContent: "flex-start",
    marginLeft: theme.spacing(38),  
  },
  labelDrinks : {
    justifyContent: "flex-start",
    marginLeft: theme.spacing(88),  
  },
  labelStatus :{
    justifyContent: "flex-start",
    marginLeft: theme.spacing(42),  
  }
}));

const OrderDetailPage = (props) => {
  const dispatch = useDispatch();
  const { orderId } = useParams();
  console.log("orderID", orderId);
  const order = useSelector((state) => state.orderAdmin.detailOrder);
  useEffect(() => {
    dispatch(
      getDetailOrders({
        _id: orderId,
      })
    );
  }, [orderId]);

  
//   console.log("order", order);
//   console.log("user", order.user.address);
  const classes = useStyles();
  return (
    <div className="user-detail">
    <div className={classes.myContainer + " my-30 container"}>
      <SideBar />
      <Card className={classes.root}>
     <div>
     <div className={classes.input}>
     <h1 className="text-center mt-30">History Order Detail</h1>

      {/* <label className={classes.labelFormat} style={{ fontWeight: 600 }}>Address :</label>
      <span className={classes.labelFormat}>{order.user.address}</span>
      <br></br>
      <label className={classes.labelFormat} style={{ fontWeight: 600 }}>Username :</label>
      <span className={classes.labelUsername}>{order.user.username}</span>
      <br></br>
      <label className={classes.labelFormat} style={{ fontWeight: 600 }}>Drinks :</label>
      <span  className={classes.labelDrinks}>
        {order.drink.map((item, index) => (
          <React.Fragment>
            <div  className={classes.labelDrinks} style={{ fontWeight: 600 }}>
              {index + 1}. {item.name}
            </div>

            <div  className={classes.labelDrinks}>Price: {item.price.toLocaleString()}đ</div>

            <div className={classes.labelDrinks}>Quantity: {item.quantity}</div>
          </React.Fragment>
        ))}
      </span>
      <br></br>
      <label className={classes.labelFormat}style={{ fontWeight: 600 }}>Total Price :</label>
      <span  className={classes.labelUsername}> {order.totalPrice.toLocaleString()}đ</span>

      <br></br>
      <label className={classes.labelFormat} style={{ fontWeight: 600 }}>Status :</label>
      <span  className={classes.labelStatus}> {order.status}</span>
      <br></br>
      <label className={classes.labelFormat} style={{ fontWeight: 600 }}>CreatedAt :</label>
      <span  className={classes.labelUsername}>
        {" "}
        {DateUtils.format(order.createdAt, DateFormat.YYYY_MM_DD_hh_mm_ss)}
      </span> */}
      </div>

        </div>
        </Card>
    </div>
</div>
  );
};
export default OrderDetailPage;
