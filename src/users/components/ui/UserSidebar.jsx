import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import HistoryIcon from '@material-ui/icons/History';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    backgroundColor: '#ffffff',
    boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);',
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  icon: {
    minWidth: 30
  },
  actived: {
    background: "#5fa3b7",
    '&:hover': {
      background: "#5fa3b7",
    }
  }
}));

function SideBar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  let { pathname } = useLocation();
  const [isActive, setIsActive] = useState('');

  useEffect(() => {
    if (pathname === '/user/detail') {
      setIsActive("Information");
    }
    if (pathname === '/user/change-password') {
      setIsActive("Change password");
    }
    if (pathname === "/user/history-order") {
      setIsActive("History order");
    }
  }, [pathname]);

  const handleTo = (text) => {
    if (text === "Information") {
      return "/user/detail";
    }
    if (text === "Change password") {
      return "/user/change-password";
    }
    if (text === "History order") {
      return "/user/history-order";
    }
    return "/user/detail";
  };

  const drawer = (
    <div>
      <List>
        {[
          "Information",
          "Change password",
          "History order",
        ].map((text, index) => (
          <ListItem button key={text} className={text.indexOf(isActive) !== -1 && classes.actived}>
            <ListItemIcon className={classes.icon}>
              { index === 0 && <PersonIcon /> }
              { index === 1 && <LockIcon /> }
              { index === 2 && <HistoryIcon /> }
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

SideBar.propTypes = {
  window: PropTypes.func,
};

export default SideBar;
