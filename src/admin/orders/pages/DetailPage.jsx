import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";

import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../../employee/PrivateLayout";
import ResponsiveDrawer from "../../components/ResponsiveDrawer";
import { getDetailOrders } from "../actions";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Loading from "../../../employee/containers/ui/Loading";
import { DateFormat, DateUtils } from "../../../utils";
import { useLocation, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CancelIcon from "@mui/icons-material/Cancel";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import DoneIcon from "@material-ui/icons/Done";
import Chip from "@material-ui/core/Chip";
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
    backgroundColor: "#177245",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: 750,
  },
  table: {
    // display: "flex",
    marginLeft: 450,
    marginTop: 40,
  },
  textTypo: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(10),
    marginBottom: theme.spacing(7),
    color: "#177245",
  },
  labelFormat: {
    // display: "flex",
    justifyContent: "flex-start",
    marginLeft: theme.spacing(40),
  },
  labelUsername: {
    justifyContent: "flex-start",
    marginLeft: theme.spacing(38),
  },

  labelUsePoint : {
    justifyContent: "flex-start",
    marginLeft: theme.spacing(42),
  },

  labelDrinks: {
    justifyContent: "flex-start",
    marginLeft: theme.spacing(88),
  },
  labelStatus: {
    justifyContent: "flex-start",
    marginLeft: theme.spacing(42),
  },
  buttonBack: {
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: theme.spacing(37),
    marginBottom: theme.spacing(5),
  },
}));

const DetailPage = (props) => {
  const dispatch = useDispatch();
  const { orderId } = useParams();
  console.log("orderID", orderId);

  useEffect(() => {
    dispatch(
      getDetailOrders({
        _id: orderId,
      })
    );
  }, [orderId]);

  const order = useSelector((state) => state.orderAdmin.detailOrder);
  const checkStatusLabel = (param) => {
    switch (param) {
      case "success":
        return "SUCCESS";
      case "cancel":
        return "CANCEL";
      default:
        return "PENDING";
    }
  };

  const checkStatusColor = (param) => {
    switch (param) {
      case "success":
        return "primary";
      case "cancel":
        return "secondary";
      default:
        return "secondary";
    }
  };

  // const checkStatusIcon = (param) => {
  //   switch (param) {
  //     case "success":
  //       return <DoneIcon />;
  //     case "cancel":
  //       return <CancelIcon />;
  //     default:
  //       return <AccessTimeIcon />;
  //   }
  // };

  console.log("order", order);
  //   console.log("user", order.user.address);
  const classes = useStyles();
  return (
    <Layout>
      <div className="container">
        <div className={classes.root}>
          <CssBaseline />

          <AppBar position="fixed" className={classes.appBar}></AppBar>

          <ResponsiveDrawer />
        </div>
        {order ? (
          <div className={classes.input}>
            <div className={classes.buttonBack}>
              <Link to="/admin/orders">
                <Button>Back</Button>
              </Link>

              {/* <h1 className={classes.textTypo} style={{ fontWeight: 600 }}>
             ORDER DETAIL
              </h1> */}
            </div>

            <Typography variant="h4" noWrap className={classes.textTypo}>
              Order Detail
            </Typography>
            <label className={classes.labelFormat} style={{ fontWeight: 600 }}>
              Address :
            </label>
            <span className={classes.labelFormat}>{order.user.address}</span>
            <br></br>
            <label className={classes.labelFormat} style={{ fontWeight: 600 }}>
              Username :
            </label>
            <span className={classes.labelUsername}>{order.user.username}</span>
            <br></br>
            <label className={classes.labelFormat} style={{ fontWeight: 600 }}>
              Drinks :
            </label>
            <span className={classes.labelDrinks}>
              {order.drink.map((item, index) => (
                <React.Fragment>
                  <div
                    className={classes.labelDrinks}
                    style={{ fontWeight: 600 }}
                  >
                    {index + 1}. {item.name}
                  </div>

                  <div className={classes.labelDrinks}>
                    Price: {item.price.toLocaleString()}đ
                  </div>

                  <div className={classes.labelDrinks}>
                    Quantity: {item.quantity}
                  </div>
                </React.Fragment>
              ))}
            </span>
            <br></br>

            <label className={classes.labelFormat} style={{ fontWeight: 600 }}>
             UsePoint :
            </label>
            <span className={classes.labelUsePoint}>
              {"     "} 
              {order.is_point ? order.point:  0 }
            </span>

            <br></br>

            <label className={classes.labelFormat} style={{ fontWeight: 600 }}>
              Total Price :
            </label>
            <span className={classes.labelUsername}>
              {" "}
              {order.totalPrice.toLocaleString()}đ
            </span>

            <br></br>
            <label className={classes.labelFormat} style={{ fontWeight: 600 }}>
              Status :
            </label>
            <span className={classes.labelStatus}>
              <Chip
                size="small"
                label={checkStatusLabel(order.status)}
                color={checkStatusColor(order.status)}
              />
            </span>
            <br></br>
            <label className={classes.labelFormat} style={{ fontWeight: 600 }}>
              CreatedAt :
            </label>
            <span className={classes.labelUsername}>
              {" "}
              {DateUtils.format(
                order.createdAt,
                DateFormat.YYYY_MM_DD_hh_mm_ss
              )}
            </span>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </Layout>
  );
};
export default DetailPage;
