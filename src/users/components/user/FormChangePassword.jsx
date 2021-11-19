import React from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import { toast } from "react-toastify";
import * as yup from 'yup';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    margin: 'auto',
    marginBottom: 20
  },
  input: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10
  },
  button: {
    textTransform: "capitalize",
    marginLeft: 10,
    minWidth: 100
  }
});

export default function UserDetail(props) {
  const classes = useStyles();
  const { infor, handleSubmitFormChangePassword, token } = props;

  const validationSchema = yup.object({
    oldPassword: yup.string().required("This field is required"),
    newPassword: yup.string().required("This field is required"),
    confirmPassword: yup.string().oneOf([yup.ref("newPassword")], "Both password need to be the same").required("This field is required"),
  });

  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      if (values.oldPassword === infor.password) {
        handleSubmitFormChangePassword({
          token,
          password: values.oldPassword,
          newPassword: values.newPassword,
          newPasswordAgain: values.confirmPassword
        })
      } else {
        toast.error("Old password is wrong! Please check again.")
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="p-20">
      <TextField 
        label="Old password" 
        name="oldPassword"
        type="password"
        variant="outlined" 
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={classes.input}
        error={formik.touched.oldPassword && Boolean(formik.errors.oldPassword)}
        helperText={formik.touched.oldPassword && formik.errors.oldPassword}
      />
      <TextField 
        label="New password" 
        name="newPassword"
        type="password"
        variant="outlined" 
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={classes.input}
        error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
        helperText={formik.touched.newPassword && formik.errors.newPassword}
      />
      <TextField 
        label="Confirm new password" 
        name="confirmPassword"
        type="password"
        variant="outlined" 
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={classes.input}
        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
      />
      <div className="flex-right mt-10">
        <Button className={classes.button} variant="contained" color="primary" type="submit">Submit</Button>
      </div>
    </form>
  );
}