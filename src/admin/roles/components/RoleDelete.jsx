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
import RoleDeleteDialog from "../dialogs/RoleDeleteDialog";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    backgroundColor: "#177245",
  },
}));

const RoleDelete = (props) => {
  const { open, role } = props;
  const { onSubmit, onClose } = props;

  const classes = useStyles();

  return (
    <React.Fragment>
      {open && (
        <Dialog
          open={open}
          keepMounted
          onClose={onClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <RoleDeleteDialog onSubmit={onSubmit} role={role} />
        </Dialog>
      )}
    </React.Fragment>
  );
};
export default RoleDelete;
