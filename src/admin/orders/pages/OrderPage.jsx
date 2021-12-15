import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, { useEffect } from "react";
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
    backgroundColor: "#5FA3B7"
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
}));

const OrderPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(1);
  let history = useHistory();
  // const token = useSelector((state) => state.auth.token);
  const token = useSelector((state) => state.orderAdmin.authAdmin);
  const handleChange = (event, value) => {
    setPage(value);
  };

  console.log(token)
  
  useEffect(() => {
    dispatch(getOrders({
       limit:12,
       page,
    }));
  }, [page]);

  const orders = useSelector((state) => state.orderAdmin.orders);
 

  const classes = useStyles();

  return (
    <div className="container">
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Order Managements
          </Typography>
        </Toolbar>
      </AppBar>

      <ResponsiveDrawer />
      </div>
      <div className={classes.input}>
          <InputBase
            placeholder="..."
            // value={searchForm}
            // onChange={handleChangeSearch}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
            // onClick={handleClickSearch}
          >
            <SearchIcon />
          </IconButton>
        </div>
      {/* <main className={classes.content}> */}
      <div className={classes.table}>
      <Table orders={orders} />
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
  );
};
export default OrderPage;
