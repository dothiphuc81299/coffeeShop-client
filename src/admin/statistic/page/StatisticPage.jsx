import React, { useEffect, useState } from "react";
import ResponsiveDrawer from "../../components/ResponsiveDrawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "../../../employee/PrivateLayout";
import { makeStyles } from "@material-ui/core/styles";
import { getStatistic } from "../action";
import { useSelector } from "react-redux";
import { Chart } from "react-google-charts";
import moment from "moment";
import { DatePicker, Form } from "antd";
import Loading from "../../../users/components/ui/Loading";

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
    display: "flex",
    // marginLeft: theme.spacing(15),
  },
  dateFrom: {
    display: "flex",
    marginLeft: theme.spacing(15),
    justifyContent: "flex-start",
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(5),
  },
}));
const StatisticPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authAdmin.token);
  const [startDate, setStartDate] = useState(moment());
  const [endDate, setEndDate] = useState(moment());
  useEffect(() => {
    dispatch(
      getStatistic({
        token,
        startAt: startDate.format(),
        endAt: endDate.format(),
      })
    );
  }, [startDate, endDate]);

  const result = useSelector((state) => state.statistic.result);
  let temp = [];
  let tempSale =[];
  if (!result) {
    <Loading />;
  } else {
    temp.push(["Product", "Total Quantity"]);
    tempSale.push(["Product","Total totalSale"]);
    let statistic = result.statistic;
    statistic.forEach((item) => temp.push([item.name, item.totalQuantity]));
    statistic.forEach((item) => tempSale.push([item.name, item.totalSale]));
    
    const otherQuantity = result.statistic.reduce((sum, item) => {
      return sum + item.totalQuantity;
    }, 0);

    const otherSale = result.statistic.reduce((sum, item) => {
      return sum + item.totalSale;
    }, 0);

    const otherTotalQuantity = result.totalQuanity - otherQuantity;
    const otherTotalSale =result.totalSale -otherSale;
    temp.push(["other", otherTotalQuantity]);
    tempSale.push(["other", otherTotalSale]);
  }

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
                label="startAt"
                placeholder="Select date"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </Form.Item>
            <Form.Item
              label="End At"
              name="date"
              rules={[{ required: true, message: "Please choose a endAt!" }]}
            >
              <DatePicker
                label="endAt"
                placeholder="Select date"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
              />
            </Form.Item>
          </div>
          <div className={classes.content}>
            <Chart
              width={"500px"}
              height={"400px"}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              // data={[
              //   ["Task", "Hours per Day"],
              //   ["Work", 11],
              //   ["Eat", 2],
              //   ["Commute", 2],
              //   ["Watch TV", 2],
              //   ["Sleep", 7],
              // ]}
              data={temp}
              options={{
                title: "Sản phẩm bán được số lượng nhiều nhất",
              }}
              rootProps={{ "data-testid": "1" }}
            />

            <Chart
              width={"500px"}
              height={"400px"}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
               data={tempSale}
              options={{
                title: "Sản phẩm có doanh số cao nhất",
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
