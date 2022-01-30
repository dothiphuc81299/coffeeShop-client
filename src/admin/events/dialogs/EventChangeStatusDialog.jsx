import {
    Button,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
  } from "@material-ui/core";
  import { useFormik } from "formik";
  import React from "react";
  
  const EventChangeStatusDialog = (props) => {
    const { event } = props;
    const { onSubmit, onClose } = props;
  
    const formik = useFormik({
      initialValues: {},
      onSubmit: () => {
        onSubmit({
          _id: event._id,
        });
      },
    });
  
    return (
      <React.Fragment>
        <form onSubmit={formik.handleSubmit}>
          <DialogTitle>{"Change Status Event Confirmation"}</DialogTitle>
  
          <DialogContent>
            <DialogContentText>
              Are you sure you want to change status of this event into active and then we will send email for user?
            </DialogContentText>
          </DialogContent>
  
          <DialogActions>
            <Button onClick={onClose} color="primary">
              Disagree
            </Button>
            <Button type="submit" color="primary">
              Agree
            </Button>
          </DialogActions>
        </form>
      </React.Fragment>
    );
  };
  export default EventChangeStatusDialog;
  