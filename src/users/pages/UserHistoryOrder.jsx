import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/ui/Loading";
import { Card, makeStyles, Typography } from "@material-ui/core";
import SideBar from "../components/ui/UserSidebar";
import { getListOrder } from "../../redux/action/order";
import ListOrder from "../components/user/ListOrder";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
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
    marginLeft: 600,
    display: "flex",
  },
  statusPut: {
    display: "flex",
    justifyContent: "flex-end",
  },
 
}));

export default function HistoryOrder() {
  const classes = useStyles();
  let history = useHistory();
 // const token = useSelector((state) => state.auth.token);
 const token =localStorage.getItem("token");
  const listOrder = useSelector((state) => state.order.listOrder);
  const dispatch = useDispatch();

  const [status, setStatus] = useState("");
  const handleSetStatus = (e) => {
    setStatus(e.target.value);
  };
  
  useEffect(() => {
    if (!token) {
      history.push("/");
    } else {
      dispatch(getListOrder(token, status));
    }
  }, [token,status]);

  return (
    <div className="user-detail">
      <div className={classes.myContainer + " my-30 container"}>
        <SideBar />
        <Card className={classes.root}>
          <div>
            {/* <Toolbar> */}
            <h1 className="text-center mt-30">History Order</h1>
            <div className={classes.statusPut}>
              <FormControl sx={{ m: 1, minWidth: 180, color: "black" }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={status}
                  onChange={handleSetStatus}
                  autoWidth
                  label="Status"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem onChange={handleSetStatus} value={"pending"}>
                    Pending
                  </MenuItem>
                  <MenuItem onChange={handleSetStatus} value={"cancel"}>
                    Cancel
                  </MenuItem>
                  <MenuItem onChange={handleSetStatus} value={"success"}>
                    Success
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
            {/* </Toolbar> */}
          </div>
          {listOrder.length > 0 ? <ListOrder data={listOrder} /> : <Loading />}
        </Card>
      </div>
    </div>
  );
}
