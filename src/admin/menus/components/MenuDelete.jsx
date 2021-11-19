import { Dialog, makeStyles } from "@material-ui/core";
import React from "react";
import MenuDeleteDialog from "../dialogs/MenuDeleteDialog";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    backgroundColor: "#5FA3B7",
  },
  dialog: {
    minHeight: 300,
  },
}));

const MenuDelete = (props) => {
  const { open, drink } = props;
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
          <MenuDeleteDialog
            className={classes.dialog}
            onSubmit={onSubmit}
            drink={drink}
            onClose={onClose}
          />
        </Dialog>
      )}
    </React.Fragment>
  );
};
export default MenuDelete;
