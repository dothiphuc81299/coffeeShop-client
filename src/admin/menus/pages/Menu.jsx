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
}));

const MenuPage = () => {
  const [openCreate, setOpenCreate] = useState(false);

  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    dispatch(getDrink());
  }, []);

  useEffect(() => {
    dispatch(getList());
  }, []);

  const drinks = useSelector((state) => state.drinkAdmin.drinks);

  const list = useSelector((state) => state.listAdmin.list);

  const handleSubmitCreate = (payload) => {
    dispatch(postDrink(payload));
    setOpenCreate(false);
  };

  const handleOpenCreate = () => {
    setOpenCreate(!openCreate);
  };

  const handleCloseCreate = () => {
    setOpenCreate(false);
  };

  return (
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

      <main className={classes.content}>
        <MenuCreate
          onSubmit={handleSubmitCreate}
          list={list}
          open={openCreate}
          onOpen={handleOpenCreate}
          onClose={handleCloseCreate}
        />

        {drinks.map((drink, index) => (
          <MenuItems key={index} drink={drink} />
        ))}
      </main>
    </div>
  );
};
export default MenuPage;
