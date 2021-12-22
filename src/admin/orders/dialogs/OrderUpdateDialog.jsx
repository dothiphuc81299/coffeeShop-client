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

import { styled } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const OrderUpdateDialog = (props) => {
  const { open, order } = props;
  const { onSubmit, onClose } = props;

  const formik = useFormik({
    initialValues: {
        status: "cancel" || "success" || "",
    },
    onSubmit: (values) => {
      onSubmit({
        ...values,
        _id: order._id,
      });
    },
  });

  console.log("status",formik.values.status)
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
            <DialogTitle>{"Update Status Of Order"}</DialogTitle>

            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="status"
                name="status"
                value={formik.values.status}
                onChange={formik.handleChange}
              >
                <FormControlLabel
                  name="cancel"
                  value="cancel"
                  control={<Radio />}
                  label="Cancel"
                />
                <FormControlLabel
                  value="success"
                  control={<Radio />}
                  label="Success"
                />
              </RadioGroup>
            </FormControl>

            <DialogActions>
              {/* <Button onClick={onClose} color="primary">
                Disagree
              </Button> */}
              <Button type="submit" color="primary">
                Submit
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      )}
    </React.Fragment>
  );
};
export default OrderUpdateDialog;
