import { Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { useLocation } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import ResponsiveDrawer from "../../components/ResponsiveDrawer";
import { getList, postList } from "../actions";
import Card from "../components/Card";
import CategoryCreate from "../components/CategoryCreate";
import { getQuery } from "../../../helpers/search";
import IconButton from "@material-ui/core/IconButton";
import Pagination from "@material-ui/lab/Pagination";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { useHistory } from "react-router";
import { getInforByToken } from "../../../redux/action/inforStaff";
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
    backgroundColor: "#177245",
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: 750,
  },
  create: {
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: theme.spacing(25),
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
      backgroundColor: "#177245",
      color: "#fff",
    },
  },
}));

const CategoryPage = () => {
  const [open, setOpen] = useState(false);
  const { search } = useLocation();
  let { pathname } = useLocation();
  const [isActive, setIsActive] = useState(pathname);
  const dispatch = useDispatch();
  const history = useHistory();
  const [page, setPage] = React.useState(1);
  const token = useSelector((state) => state.authAdmin.token);
  const [searchForm, setSearchForm] = useState("");
  useEffect(() => {
    setIsActive(pathname);
    if (search) {
      const params = getQuery(search);
      setSearchForm(params.keyword);
    }
  }, [search, pathname]);

  const handleChange = (event, value) => {
    setPage(value);
  };
  const handleChangeSearch = (e) => {
    setSearchForm(e.target.value);
  };

  const handleClickSearch = () => {
    history.push(`/admin/categories?keyword=${searchForm}`);
  };

  useEffect(() => {
    dispatch(getInforByToken(token));
  }, [token]);

  useEffect(() => {
    const params = getQuery(search);
    dispatch(
      getList({
        ...params,
        limit: 12,
        page,
      })
    );
  }, [search, page]);

  const classes = useStyles();

  // useEffect(() => {
  //   dispatch(getList());
  // }, []);

  const list = useSelector((state) => state.listAdmin.list);

  const handleSubmit = (payload) => {
    dispatch(
      postList({
        token,
        name: payload.name,
      })
    );
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Layout>

   
    <div className="container">
      <div className={classes.root}>
        <CssBaseline />

        <AppBar position="fixed" className={classes.appBar}>
          {/* <Toolbar>
            <Typography variant="h6" noWrap>
              Category Managements
            </Typography>
          </Toolbar> */}
        </AppBar>

        <ResponsiveDrawer />
      </div>
      {/* <main className={classes.content}> */}
      <div className={classes.create}>
        <CategoryCreate
          onSubmit={handleSubmit}
          open={open}
          onOpen={handleOpen}
          onClose={handleClose}
        />
        <div className={classes.input}>
          <InputBase
            placeholder="Finding category..."
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
      </div>

      <div>
        {/* <main className={classes.content}> */}
        <Card list={list} />
        {/* </main> */}
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
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return { list: state.list };
};

export default connect(mapStateToProps)(CategoryPage);
