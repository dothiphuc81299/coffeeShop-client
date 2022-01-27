import { Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ResponsiveDrawer from "../../components/ResponsiveDrawer";
import { getPermissions, getRoles, postRole } from "../actions";
import RoleItem from "../components/RoleItem";
import RoleCreate from "../components/RoleCreate";
import { getInforByToken } from "../../../redux/action/inforStaff";
import Layout from "../../../employee/PrivateLayout";
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
    backgroundColor: "#177245",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: 750,
  },
}));

const RolePage = () => {
  const [open, setOpen] = useState(false);
  const token = useSelector((state) => state.authAdmin.token);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInforByToken(token));
  }, [token]);

  useEffect(() => {
    dispatch(getRoles());
  }, []);

  useEffect(() => {
    dispatch(getPermissions());
  }, []);

  const handleSubmit = (payload) => {
    dispatch(
      postRole({
        token,
        name: payload.name,
        permissions: payload.permissions,
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

  const roles = useSelector((state) => state.roleAdmin.roles);

  const permissions = useSelector((state) => state.roleAdmin.permissions);

  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.root}>
        <CssBaseline />

        <AppBar position="fixed" className={classes.appBar}>
          {/* <Toolbar>
            <Typography variant="h6" noWrap>
              Role Managements
            </Typography>
          </Toolbar> */}
        </AppBar>

        <ResponsiveDrawer />

        <main className={classes.content}>
          <RoleCreate
            onSubmit={handleSubmit}
            permissions={permissions}
            open={open}
            onOpen={handleOpen}
            onClose={handleClose}
          />
          <Grid container spacing={2}>
            {roles.map((role) => (
              <Grid>
                <RoleItem role={role} permissions={permissions} />
              </Grid>
            ))}
          </Grid>
        </main>
      </div>
    </Layout>
  );
};
export default RolePage;
