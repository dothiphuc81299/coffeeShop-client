import React from "react";
import { Button, makeStyles, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";



const useStyles = makeStyles({
  input: {
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    textTransform: "capitalize",
    marginLeft: 10,
    minWidth: 100,
  },
});

const validationSchema = yup.object({
  username: yup.string("Enter your username").required("Username is required"),
  phone: yup
    .string("Enter your phone number")
    .required("Phone number is required"),
  address: yup.string("Enter your address").required("Address is required"),
});

export default function UserDetail(props) {
  const classes = useStyles();
  const { infor, handleSubmitFormDetail, token } = props;
  const formik = useFormik({
    initialValues: {
      ...infor,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmitFormDetail({
        token,
        ...values,
      });
    },
  });

  console.log("formil",formik.values)


  const handleAddressChange = (value) => {
    const { address } = value;
    formik.setFieldValue("address", address);
    
  };

  return (
    <form onSubmit={formik.handleSubmit} className="p-20">
      <TextField
        label="Username"
        variant="outlined"
        name="username"
        disabled
        value={formik.values.username}
        onChange={formik.handleChange}
        className={classes.input}
      />
      <TextField
        label="Phone number"
        variant="outlined"
        name="phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
        className={classes.input}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
      />

      <TextField
        label="Address"
        variant="outlined"
        name="address"
        value={formik.values.address}
        onChange={formik.handleChange}
        className={classes.input}
        error={formik.touched.phone && Boolean(formik.errors.address)}
        helperText={formik.touched.phone && formik.errors.address}
      />

  <TextField
        label="CurrentPoint"
        variant="outlined"
        name="currentPoint"
        disabled
        value={formik.values.currentPoint}
        onChange={formik.handleChange}
        className={classes.input}
      />
      <div className="flex-right mt-10">
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
