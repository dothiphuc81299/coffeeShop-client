import { Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ResponsiveDrawer from "../../components/ResponsiveDrawer";
import { getRoles } from "../../roles/actions";
import { getListStaff, postStaff } from "../actions";
import EmployeeCreate from "../components/EmployeeCreate";
import EmployeeItem from "../components/EmployeeItem";
import { getInforByToken } from "../../../redux/action/inforStaff";
import Layout from "../../../employee/PrivateLayout";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
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
    height: 800,
  },
}));

const EmployeePage = () => {
  const [open, setOpen] = useState(false);
const token =localStorage.getItem("tokenAdmin");
  const dispatch = useDispatch();
  console.log(token);
  useEffect(() => {
    dispatch(getListStaff(token));
  }, [token]);

  useEffect(() => {
    dispatch(getInforByToken(token));
  }, [token]);


  useEffect(() => {
    dispatch(getRoles(token));
  }, [token]);



  const handleSubmit = (payload) => {
    dispatch(
      postStaff({
        token,
        username: payload.username,
        password: payload.password,
        phone: payload.phone,
        address: payload.address,
        role: payload.role,
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

  const listStaff = useSelector((state) => state.staffAdmin.listStaff);

  const roles = useSelector((state) => state.roleAdmin.roles);

  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.root}>
        <CssBaseline />

        <AppBar position="fixed" className={classes.appBar}>
          {/* <Toolbar>
          <Typography variant="h6" noWrap>
            Employee Managements
          </Typography>
        </Toolbar> */}
        </AppBar>

        <ResponsiveDrawer />

        <main className={classes.content}>
          <EmployeeCreate
            onSubmit={handleSubmit}
            roles={roles}
            open={open}
            onOpen={handleOpen}
            onClose={handleClose}
          />
          {/* <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            This is an error alert — <strong>check it out!</strong>
          </Alert> */}
          <Grid container spacing={5}>
            {listStaff.map((staff) => (
              <Grid item>
                <EmployeeItem staff={staff} roles={roles} />
              </Grid>
            ))}
          </Grid>
        </main>
      </div>
    </Layout>
  );
};
export default EmployeePage;
