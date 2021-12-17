import {
    Button,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Dialog,
  } from "@material-ui/core";
  import { useFormik } from "formik";
  import React from "react";
  
  const RoleDeleteDialog = (props) => {
    const { role } = props;
  
    const { onSubmit,onClose } = props;
  
    const formik = useFormik({
      initialValues: { },
      onSubmit: () => {
        onSubmit({
          _id: role._id,       
        });
      },
    });
  
    return (
      <React.Fragment>
        <form onSubmit={formik.handleSubmit}>
        <DialogTitle>{"Delete Role Confirmation"}</DialogTitle>

            <DialogContent>
              <DialogContentText>
                Are you sure you want to delete role ?
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
  export default RoleDeleteDialog;
  