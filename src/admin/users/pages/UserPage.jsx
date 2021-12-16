import { Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ResponsiveDrawer from "../../components/ResponsiveDrawer";
import { getUsers } from "../actions";
import UserItem from "../components/UserItem";
import Pagination from "@material-ui/lab/Pagination";
import TableUser from "../components/UserItem";
import { getQuery } from "../../../helpers/search";
import { useLocation } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
    marginRight: theme.spacing(5),
    marginLeft:theme.spacing(20),
  },
  input: {
    display: "flex",
    justifyContent: "flex-end",
    marginLeft: theme.spacing(25),
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

const UserPage = () => {
  const dispatch = useDispatch();
  const { search } = useLocation();
  const [page, setPage] = React.useState(1);
  const history = useHistory();
  const [searchForm, setSearchForm] = useState("");
  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleChangeSearch = (e) => {
    setSearchForm(e.target.value);
  };
  const handleClickSearch = () => {
    history.push(`/admin/users?keyword=${searchForm}`);
  };

  useEffect(() => {
    const params = getQuery(search);
    dispatch(getUsers({
      ...params,
      limit :12,
      page,
    }));
  }, [search,page]);

  const users = useSelector((state) => state.userAdmin.users);
  
  const classes = useStyles();

  return (
    <div className="container">
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            User Managements
          </Typography>
        </Toolbar>
      </AppBar>

      <ResponsiveDrawer />

      {/* <main className={classes.content}>
        <Grid container spacing={3}>
         
        </Grid>
      </main> */}
      </div>
      <div className={classes.input}>
          <InputBase
            placeholder="Finding user..."
            value={searchForm}
            onChange={handleChangeSearch}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
            onClick={handleClickSearch}
          >
            <SearchIcon />
          </IconButton>
        </div>

      <div className={classes.table}>
      <TableUser users={users} />
      </div>
        


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
export default UserPage;
