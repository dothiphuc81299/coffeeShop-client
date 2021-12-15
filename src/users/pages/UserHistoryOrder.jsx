import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/ui/Loading";
import { Card, makeStyles, Typography } from "@material-ui/core";
import SideBar from "../components/ui/UserSidebar";
import { getListOrder } from "../../redux/action/order";
import ListOrder from "../components/user/ListOrder";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    minWidth: "50vw",
    marginLeft: 20,
  },
  myContainer: {
    alignItems: "stretch",
    display: "flex",
    justifyContent: "center",
  },

  status: {
    marginLeft :600,
    display: "flex",
  }
});

export default function HistoryOrder() {
  const classes = useStyles();
  let history = useHistory();
  const token = useSelector((state) => state.auth.token);
  const listOrder = useSelector((state) => state.order.listOrder);
  const dispatch = useDispatch();


  useEffect(() => {
    if (!token) {
      history.push("/");
    } else {
      
      dispatch(getListOrder(token));
    }
  }, [token]);

  return (
    <div className="user-detail">
      <div className={classes.myContainer + " my-30 container"}>
        <SideBar />
        <Card className={classes.root}>
          <div>
              {/* <Toolbar> */}
          <h1 className="text-center mt-30">History Order</h1>
          <select
            className ={classes.status}
            aria-label=".form-select-sm example"
          >
            <option selected>Status</option>
            <option value="success">Success</option>
            <option value="2">Pending</option>
            <option value="3">Cancel</option>
          </select>
          {/* </Toolbar> */}
          </div>
          {listOrder.length > 0 ? <ListOrder data={listOrder} /> : <Loading />}
        </Card>
      </div>
    </div>
  );
}
