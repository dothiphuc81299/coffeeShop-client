import React, { useEffect, useState } from "react";
import ResponsiveDrawer from "../../components/ResponsiveDrawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "../../../employee/PrivateLayout";
import { makeStyles } from "@material-ui/core/styles";
import { getStatistic } from "../action";
import { useSelector } from "react-redux";
import { PieChart, Pie } from "recharts";
import { Chart } from "react-google-charts";
import {
    DatePicker,
 
    Form,
    
  } from 'antd';

import { useDispatch } from "react-redux";
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
   // display: "flex",
    // marginLeft: theme.spacing(15),
  },
  dateFrom:{
   display: "flex",
   marginLeft:theme.spacing(15),
     justifyContent:"flex-start",
    marginBottom :theme.spacing(1),
    marginTop:theme.spacing(5), 
  }
}));
const StatisticPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authAdmin.token);

  useEffect(() => {
    dispatch(
      getStatistic({
        token,
        startAt: "2021-11-14T03:19:26.977Z",
        endAt: "2021-12-18T03:19:26.977Z",
      })
    );
  }, []);

  const result = useSelector((state) => state.statistic.result);
  console.log("result", result);
  const data = [
    { name: "Geeksforgeeks", students: 400 },
    { name: "Technical scripter", students: 700 },
    { name: "Geek-i-knack", students: 200 },
    { name: "Geek-o-mania", students: 1000 },
  ];
  return (
    <Layout>
      <div className={classes.root}>
        <CssBaseline />

        <AppBar position="fixed" className={classes.appBar}></AppBar>

        <ResponsiveDrawer />
        <div>
          <div className={classes.dateFrom}>
            <Form.Item
              label="Start At"
              name="date"
              rules={[{ required: true, message: "Please choose a startAt!" }]}
            >
              <DatePicker
              label ="startAt"
                placeholder="Select date"
                
              />
            </Form.Item>
            <Form.Item
              label="End At"
              name="date"
              rules={[{ required: true, message: "Please choose a endAt!" }]}
            >
              <DatePicker
              label ="startAt"
            placeholder="Select date"
              />
            </Form.Item>
          </div>
          <div className={classes.content}>
          <Chart
            width={"800px"}
            height={"500px"}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["Task", "Hours per Day"],
              ["Work", 11],
              ["Eat", 2],
              ["Commute", 2],
              ["Watch TV", 2],
              ["Sleep", 7],
            ]}
            options={{
              title: "Best Sale Product",
            }}
            rootProps={{ "data-testid": "1" }}
          />
        </div>
        </div>
      </div>
    </Layout>
  );
};
export default StatisticPage;
