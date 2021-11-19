import React from 'react';
import { Link } from "react-router-dom";
import { Button, makeStyles, TextField, Typography } from '@material-ui/core';
import { useFormik } from 'formik';
import * as yup from 'yup';

const useStyles = makeStyles({
  input: {
    width: '100%',
    maxWidth: '60%',
    marginTop: 10,
    marginBottom: 10
  },
  wrappedInput: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    textTransform: "capitalize",
    marginLeft: 10,
    minWidth: 100
  },
  label: {
    width: 150,
  }
});

const validationSchema = yup.object({
  password: yup.string().required("This field is required"),
  newPassword: yup.string().required("This field is required"),
  newPasswordAgain: yup.string().oneOf([yup.ref("newPassword")], "Both password need to be the same").required("This field is required"),
});

export default function ChangePasswordForm(props) {
  const classes = useStyles();
  const { handleSubmitFormChangePasswordStaff, token } = props;

  const formik = useFormik({
    initialValues: {
      password: '',
      newPassword: '',
      newPasswordAgain: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      handleSubmitFormChangePasswordStaff({
        token,
        ...values
      })
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="p-20">
      <div className={classes.wrappedInput}>
        <label className={classes.label}>Old Password</label>
        <span>:</span>
          <TextField 
            variant="outlined" 
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            className={classes.input}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
      </div>
     
      <div className={classes.wrappedInput}>
        <label className={classes.label}>New password</label>
        <span>:</span>
          <TextField 
            variant="outlined" 
            type="password"
            name="newPassword"
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            className={classes.input}
            error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
            helperText={formik.touched.newPassword && formik.errors.newPassword}
          />
      </div>

      <div className={classes.wrappedInput}>
        <label className={classes.label}>Confirm password</label>
        <span>:</span>
          <TextField 
            variant="outlined" 
            type="password"
            name="newPasswordAgain"
            value={formik.values.newPasswordAgain}
            onChange={formik.handleChange}
            className={classes.input}
            error={formik.touched.newPasswordAgain && Boolean(formik.errors.newPasswordAgain)}
            helperText={formik.touched.newPasswordAgain && formik.errors.newPasswordAgain}
          />
      </div>
      <div className="flex-right mt-10">
        <Button className={classes.button} variant="contained" color="primary" type="submit">Submit</Button>
      </div>
    </form>
  );
}