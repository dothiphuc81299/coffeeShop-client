import { Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
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

const CategoryPage = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    dispatch(getList());
  }, []);

  const list = useSelector((state) => state.listAdmin.list);

  const handleSubmit = (payload) => {
    dispatch(postList(payload));
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Category Managements
          </Typography>
        </Toolbar>
      </AppBar>

      <ResponsiveDrawer />

      <main className={classes.content}>
        <CategoryCreate
          onSubmit={handleSubmit}
          open={open}
          onOpen={handleOpen}
          onClose={handleClose}
        />

        <Grid container justifyContent="center" spacing={3}>
          {list.map((item) => (
            <Grid item style={{ marginLeft: 8 }}>
              <Card category={item} />
            </Grid>
          ))}
        </Grid>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { list: state.list };
};

export default connect(mapStateToProps)(CategoryPage);
