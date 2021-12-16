import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../src/assets/images/commons/logo.png";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();

  const handleTo = (text) => {
    if (text === "Categories") {
      return "/admin/categories";
    }
    if (text === "Bevarages") {
      return "/admin/menu";
    }
    if (text === "Employees") {
      return "/admin/employees";
    }
    if (text === "Users") {
      return "/admin/users";
    }
    if (text === "Events") {
      return "/admin/events";
    }
    if (text === "Orders") {
      return "/admin/orders";
    }
    if (text === "Roles") {
      return "/admin/roles";
    }
    return "/admin/summary";
  };

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <img
          className="logo"
          src={logo}
          alt="logo"
          style={{ marginLeft: "5%", width: 200, height: 200 }}
        />
      </div>

      <Divider />

      <List>
        {[
          "Categories",
          "Bevarages",
          "Orders",
          "Events",
          "Users",
          "Employees",
          "My account",
          "Statistic",
          "Roles"
        ].map((text) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <Link
              to={handleTo(text)}
              className="text-bold text-black ml-5"
              style={{ textDecoration: "none" }}
            >
              {text}
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>

      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
