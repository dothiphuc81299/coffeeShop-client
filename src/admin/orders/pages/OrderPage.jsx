import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ResponsiveDrawer from "../../components/ResponsiveDrawer";
import { getOrders } from "../actions";
import Table from "../components/Table";
import IconButton from "@material-ui/core/IconButton";
import Pagination from "@material-ui/lab/Pagination";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { useHistory } from "react-router-dom";
import { getInforByToken } from "../../../redux/action/inforStaff";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { getQuery } from "../../../helpers/search";
import Layout from '../../../employee/PrivateLayout';

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
  input: {
    display: "flex",
    justifyContent: "flex-end",
    marginLeft: theme.spacing(20),
  },
  pagination: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(10),
    "& .MuiPaginationItem-page.Mui-selected": {
      backgroundColor: "#5fa3b7",
      color: "#fff",
    },
  },
  textTypo:{
    display: "flex",
    justifyContent: "flex-start",
    marginRight: theme.spacing(10),
    color: "#5fa3b7",
  },
}));

const OrderPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(1);
  let history = useHistory();

  const token = useSelector((state) => state.orderAdmin.authAdmin);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const [status, setStatus] = useState("");
  const handleChangeSearch = (event) => {
    setStatus(event.target.value);
  };

  const handleClickSearch = () => {
    history.push(`/admin/orders?status=${status}`);
  };


  useEffect(() => {
    const params = getQuery(status);

    dispatch(
      getOrders({
        status,
        limit: 12,
        page,
      })
    );
  }, [page, status]);

  const orders = useSelector((state) => state.orderAdmin.orders);

  const classes = useStyles();

  return (
    <Layout>
    <div className="container">
      <div className={classes.root}>
        <CssBaseline />

        <AppBar position="fixed" className={classes.appBar}>
          {/* <Toolbar>
            <Typography variant="h6" noWrap>
              Order Managements
            </Typography>
          </Toolbar> */}
        </AppBar>

        <ResponsiveDrawer />
      </div>
      <div className={classes.input}>
      <Typography variant="h4" noWrap className={classes.textTypo}>Order Management</Typography>
        <FormControl sx={{ m: 1, minWidth: 180,color : "black" }}>
        
          <InputLabel id="demo-simple-select-autowidth-label">
            Status
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={status}
            onChange={handleChangeSearch}
            autoWidth
            label="Status"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem onChange={handleChangeSearch} value={"pending"}>
              Pending
            </MenuItem>
            <MenuItem onChange={handleChangeSearch} value={"cancel"}>
              Cancel
            </MenuItem>
            <MenuItem onChange={handleChangeSearch} value={"success"}>
              Success
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      {/* <main className={classes.content}> */}
      <div className={classes.table}>
        <Table orders={orders} page={page}/>
      </div>

      {/* </main> */}

      <div className={classes.pagination}>
        <Pagination
          size="large"
          count={6}
          page={page}
          onChange={handleChange}
        />
      </div>
    </div>
    </Layout>
  );
};
export default OrderPage;
