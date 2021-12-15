import {
    Button,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
  } from "@material-ui/core";
  import { useFormik } from "formik";
  import React from "react";
  import { Dialog, makeStyles } from "@material-ui/core";
  
  const CategoryDeleteDialog = (props) => {
    const { open,category } = props;
    const { onSubmit, onClose } = props;
  
    const formik = useFormik({
      initialValues: {},
      onSubmit: () => {
        onSubmit({
          _id: category._id,
        });
      },
    });
  
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
        <form onSubmit={formik.handleSubmit}>
          <DialogTitle>{"Delete Category Confirmation"}</DialogTitle>
  
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete category?
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
        </Dialog>
      )}
      </React.Fragment>
    );
  };
  export default CategoryDeleteDialog;
  