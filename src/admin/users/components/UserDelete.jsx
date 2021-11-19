import { Dialog, makeStyles } from "@material-ui/core";
import React from "react";
import UserDeleteDialog from "../dialogs/UserDeleteDialog";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    backgroundColor: "#5FA3B7",
  },
  dialog: {
    minHeight: 300,
  },
}));

const UserDelete = (props) => {
  const { open, user } = props;
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
          <UserDeleteDialog
            className={classes.dialog}
            onSubmit={onSubmit}
            user={user}
            onClose={onClose}
          />
        </Dialog>
      )}
    </React.Fragment>
  );
};
export default UserDelete;
