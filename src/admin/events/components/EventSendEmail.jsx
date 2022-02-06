import { Dialog, makeStyles } from "@material-ui/core";
import React from "react";
import EventSendEmailDialog from "../dialogs/EventSendEmailDialog";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    backgroundColor: "#177245",
  },
  dialog: {
    minHeight: 300,
  },
}));

const EventSendEmail = (props) => {
  const { open, event } = props;
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
          <EventSendEmailDialog
            className={classes.dialog}
            onSubmit={onSubmit}
            event={event}
            onClose={onClose}
          />
        </Dialog>
      )}
    </React.Fragment>
  );
};
export default EventSendEmail;
