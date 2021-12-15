import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ResponsiveDrawer from "../../components/ResponsiveDrawer";
import { getDrink, postDrink } from "../actions";
import MenuItems from "../components/MenuItems";
import MenuCreate from "../components/MenuCreate";
import MenuUpdate from "../components/MenuUpdate";
import { getList } from "../../categories/actions";
import { getQuery } from "../../../helpers/search";
import IconButton from "@material-ui/core/IconButton";
import Pagination from "@material-ui/lab/Pagination";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
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
    backgroundColor: "#5FA3B7",
  },
  content: {
    flexGrow: 1,

    // justifyContent: "flex-start",
    padding: theme.spacing(10),
    marginLeft: theme.spacing(25),
    // height: 750,
  },
  create: {
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: theme.spacing(25),
  },
  input: {
    display: "flex",
    justifyContent: "flex-end",
    marginLeft: theme.spacing(10),
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

const MenuPage = () => {
  const [openCreate, setOpenCreate] = useState(false);
  let { pathname } = useLocation();
  const [isActive, setIsActive] = useState(pathname);
  const dispatch = useDispatch();
  const { search } = useLocation();
  const history = useHistory();
  const [page, setPage] = React.useState(1);
  const token = useSelector((state) => state.authAdmin.token);
  const classes = useStyles();
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
    history.push(`/admin/menu?keyword=${searchForm}`);
  };


  useEffect(() => {
    dispatch(getInforByToken(token));
  }, []);

  useEffect(() => {
    const params = getQuery(search);
    dispatch(
      getDrink({
        ...params,
        limit: 12,
        page,
      })
    );
  }, [page, search]);

  useEffect(() => {
    dispatch(
      getList({
        page,
      })
    );
  }, []);
  const drinks = useSelector((state) => state.drinkAdmin.drinks);

  const list = useSelector((state) => state.listAdmin.list);

  const handleSubmitCreate = (payload) => {
    dispatch(
      postDrink({
        token,
        name: payload.name,
        price: payload.price,
        image: payload.image,
        category: payload.category,
      })
    );
    setOpenCreate(false);
  };

  const handleOpenCreate = () => {
    setOpenCreate(!openCreate);
  };

  const handleCloseCreate = () => {
    setOpenCreate(false);
  };

  return (
    <div className="container">
      <div className={classes.root}>
        <CssBaseline />

        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Menu Managements
            </Typography>
          </Toolbar>
        </AppBar>

        <ResponsiveDrawer />
      </div>
      {/* 
      <main className={classes.content}> */}
      <div className={classes.create}>
        <MenuCreate
          onSubmit={handleSubmitCreate}
          list={list}
          open={openCreate}
          onOpen={handleOpenCreate}
          onClose={handleCloseCreate}
        />

        <div className={classes.input}>
          <InputBase
            placeholder="Finding drink..."
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
      <div className={classes.content}>
        {drinks.map((drink, index) => (
          <MenuItems key={index} drink={drink} />
        ))}
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
export default MenuPage;
