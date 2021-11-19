import {
  AppBar,
  Button,
  Dialog,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import EmployeeCreateDialog from "../dialogs/EmployeeCreateDialog";

const useStyles = makeStyles(() => ({
  appBar: {
    position: "relative",
    backgroundColor: "#5FA3B7",
  },
}));

const EmployeeCreate = (props) => {
  const { open, roles } = props;
  const { onSubmit, onOpen, onClose } = props;

  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container>
        <Button
          variant="contained"
          onClick={onOpen}
          style={{
            width: 400,
            marginBottom: 16,
            backgroundColor: "#5FA3B7",
            color: "white",
          }}
          open={open}
        >
          Add Staff
        </Button>
      </Grid>

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
              <Typography variant="h6">Create Staff</Typography>
            </Toolbar>
          </AppBar>

          <EmployeeCreateDialog onSubmit={onSubmit} roles={roles} />
        </Dialog>
      )}
    </React.Fragment>
  );
};
export default EmployeeCreate;
