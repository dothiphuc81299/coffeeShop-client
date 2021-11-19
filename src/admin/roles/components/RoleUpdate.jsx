import {
  AppBar,
  Dialog,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import RoleUpdateDialog from "../dialogs/RoleUpdateDialog";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    backgroundColor: "#5FA3B7",
  },
}));

const RoleUpdate = (props) => {
  const { open, role, permissions } = props;
  const { onSubmit, onClose } = props;

  const classes = useStyles();

  return (
    <React.Fragment>
      {open && (
        <Dialog open={open} fullScreen>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={onClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6">Update Role</Typography>
            </Toolbar>
          </AppBar>

          <RoleUpdateDialog
            onSubmit={onSubmit}
            role={role}
            permissions={permissions}
          />
        </Dialog>
      )}
    </React.Fragment>
  );
};
export default RoleUpdate;
