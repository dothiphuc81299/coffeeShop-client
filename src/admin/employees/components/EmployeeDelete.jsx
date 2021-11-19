import { Dialog, makeStyles } from "@material-ui/core";
import React from "react";
import EmployeeDeleteDialog from "../dialogs/EmployeeDeleteDialog";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    backgroundColor: "#5FA3B7",
  },
  dialog: {
    minHeight: 300,
  },
}));

const EmployeeDelete = (props) => {
  const { open, staff } = props;
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
          <EmployeeDeleteDialog
            className={classes.dialog}
            onSubmit={onSubmit}
            staff={staff}
            onClose={onClose}
          />
        </Dialog>
      )}
    </React.Fragment>
  );
};
export default EmployeeDelete;
