import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { useFormik } from "formik";
import React from "react";

const UserDeleteDialog = (props) => {
  const { user } = props;
  const { onSubmit, onClose } = props;

  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {
      onSubmit({
        _id: user._id,
      });
    },
  });

  return (
    <React.Fragment>
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle>{"Delete User Confirmation"}</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Are you sure you want to change status of this user?
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
export default UserDeleteDialog;
