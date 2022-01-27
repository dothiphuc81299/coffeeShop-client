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
import EmployeeUpdateDialog from "../dialogs/EmployeeUpdateDialog";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    backgroundColor: "#177245",
  },
}));

const EmployeeUpdate = (props) => {
  const { open, staff, roles } = props;
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
              <Typography variant="h6">Update Employee</Typography>
            </Toolbar>
          </AppBar>

          <EmployeeUpdateDialog
            onSubmit={onSubmit}
            staff={staff}
            roles={roles}
          />
        </Dialog>
      )}
    </React.Fragment>
  );
};
export default EmployeeUpdate;
