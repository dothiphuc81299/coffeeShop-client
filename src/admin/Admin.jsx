import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import Layout from "../employee/PrivateLayout";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
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
    backgroundImage:
      'url("https://images.unsplash.com/photo-1514845994104-1be22149278b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

const Admin = () => {
  const classes = useStyles();

  return (
    <Layout>
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed" className={classes.appBar}>
        {/* <Toolbar>
          <Typography variant="h6" noWrap>
            Coffee Managements
          </Typography>
        </Toolbar> */}
      </AppBar>

      <ResponsiveDrawer />

      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
    </Layout>
  );
};

export default Admin;
