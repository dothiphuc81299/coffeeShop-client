import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ResponsiveDrawer from "../../components/ResponsiveDrawer";
import { getEvents, postEvent } from "../actions";
import EventCreate from "../components/EventCreate";
import EventItem from "../components/EventItem";
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
}));

const EventPage = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const token = useSelector((state) => state.authAdmin.token);

  const classes = useStyles();
  useEffect(() => {
    dispatch(getInforByToken(token));
  }, [token]);

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  const events = useSelector((state) => state.eventAdmin.events);

  const handleSubmit = (payload) => {
    dispatch(postEvent({
      token,
      name:payload.name,
      desc:payload.desc,
    }));
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
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed" className={classes.appBar}>
        {/* <Toolbar>
          <Typography variant="h6" noWrap>
            Event Managements
          </Typography>
        </Toolbar> */}
      </AppBar>

      <ResponsiveDrawer />

      <main className={classes.content}>
        <EventCreate
          onSubmit={handleSubmit}
          open={open}
          onOpen={handleOpen}
          onClose={handleClose}
        />

        {events.map((item) => (
          <EventItem key={item} event={item} />
        ))}
      </main>
    </div>
    </Layout>
  );
};
export default EventPage;
