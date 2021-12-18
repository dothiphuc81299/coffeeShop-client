import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ResponsiveDrawer from "../../components/ResponsiveDrawer";
import { getInforByToken, sendPostUpdateInforStaff } from "../../../redux/action/inforStaff";
import { TextField, Button } from "@material-ui/core";
import { useFormik } from "formik";
import Toolbar from "@material-ui/core/Toolbar";
import { useHistory } from "react-router-dom";
import AccountUpdate from "../components/AccountUpdate";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  input: {
    width: "100%",
    maxWidth: "60%",
    marginTop: 10,
    marginBottom: 10,
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

  formInfo: {
    justifyContent: "center",
    marginLeft: theme.spacing(45),
    marginTop: theme.spacing(5),
  },
  headerIn: {
    justifyContent: "center",
    marginLeft: theme.spacing(53),
    marginTop: theme.spacing(15),
  },
  label: {
    width: 150,
  },
  updateButton: {
    marginLeft: theme.spacing(52),
  },
  button: {
    textTransform: "capitalize",
    marginLeft: 10,
    minWidth: 120,
  },
  wrappedInput: {
    marginLeft: theme.spacing(45),
  },
}));

const StaffDetailPage = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const token = useSelector((state) => state.authAdmin.token);

 
  const infor = useSelector((state) => state.inforStaff.infor);

 
  const [openUpdate, setOpenUpdate] = useState(false);
  const handleSubmitUpdate = (payload) => {
    dispatch(sendPostUpdateInforStaff({
      token,
      username:payload.username,
      address: payload.address,
      phone: payload.phone,
    }));
    setOpenUpdate(false);
  };

  const handleOpenUpdate = () => {
    setOpenUpdate(!openUpdate);
  };

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };
  useEffect(() => {
    if (!token) {
      history.push("/");
    } else {
      dispatch(getInforByToken(token));
    }
  }, [token]);

  const classes = useStyles();

  console.log("info", infor);
  console.log("token", token);
  return (
    <div className="container">
      <div className={classes.root}>
        <CssBaseline />

        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap></Typography>
          </Toolbar>
        </AppBar>

        <ResponsiveDrawer />
      </div>
      <div>
        <Typography variant="h4" component="h2" className={classes.headerIn}>
          Account Detail
        </Typography>
        {/* <form className={classes.formInfo}> */}
        <div className={classes.wrappedInput}>
          <TextField
            variant="outlined"
            id="outlined-multiline-flexible"
            label="Username"
            multiline
            disabled
            value={infor.username}
            className={classes.input}
          />
        </div>

        <div className={classes.wrappedInput}>
          <TextField
            variant="outlined"
            id="outlined-multiline-flexible"
            label="Phone"
            multiline
            disabled
            value={infor.phone}
            className={classes.input}
          />
        </div>

        <div className={classes.wrappedInput}>
          <TextField
            id="outlined-multiline-flexible"
            label="Address"
            multiline
            variant="outlined"
            name="Address"
            disabled
            value={infor.address}
            className={classes.input}
          />
        </div>

        <div className={classes.updateButton}>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            type="button"
            onClick={handleOpenUpdate}
          >
            update
          </Button>

          <AccountUpdate
            onSubmit={handleSubmitUpdate}
            infor={infor}
            open={openUpdate}
            onOpen={handleOpenUpdate}
            onClose={handleCloseUpdate}
          />

          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="button"
          >
            password
          </Button>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
};
export default StaffDetailPage;
