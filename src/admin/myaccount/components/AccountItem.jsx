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
  },
  updateIcon: {
    display: 'flex',
   
    justifyContent: 'flex-end',
  },
  chanegPasswordIcon:{
      display:'flex',
      justifyContent: 'flex-end',
  }
});

const validationSchema = yup.object({
  username: yup
    .string('Enter your username')
    .required('Username is required'),
  phone: yup
    .string('Enter your phone number')
    .required('Phone number is required'),
  address: yup
    .string('Enter your address')
    .required('Address is required'),
});

export default function InforForm(props) {
  const classes = useStyles();
  const { infor, handleSubmitFormDetail, token, isEdit, setIsEdit } = props;

  const formik = useFormik({
    initialValues: {
      ...infor,
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      handleSubmitFormDetail({
        token,
        ...values
      })
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="p-20">
      <div className={classes.wrappedInput}>
        <label className={classes.label}>Username</label>
        <span>:</span>
        {
          !isEdit ? 
          <Typography variant="h6" component="h2" className={classes.input}>{formik.values.username}</Typography> :
          <TextField 
            // label="Username" 
            variant="outlined" 
            name="username"
            disabled
            value={formik.values.username}
            onChange={formik.handleChange}
            className={classes.input}
          />
        }
      </div>
     
      <div className={classes.wrappedInput}>
        <label className={classes.label}>Phone number</label>
        <span>:</span>
        {
          !isEdit ? 
          <Typography variant="h6" component="h2" className={classes.input}>{formik.values.phone}</Typography> :
          <TextField 
            // label="Phone number" 
            variant="outlined" 
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            className={classes.input}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
        }
      </div>

      <div className={classes.wrappedInput}>
        <label className={classes.label}>Address</label>
        <span>:</span>
        {
          !isEdit ? 
          <Typography variant="h6" component="h2" className={classes.input}>{formik.values.address}</Typography> :
          <TextField 
            // label="Address" 
            variant="outlined" 
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            className={classes.input}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
          />
        }
      </div>
      <div>
      {/* <div className={classes.updateIcon} > */}
        {
          !isEdit 
            ? 
          <Button onClick={ () => setIsEdit(true) } className={classes.button} variant="contained" color="secondary" type="button">Update</Button>
            : (
          <div>
            <Button onClick={ () => setIsEdit(false) } className={classes.button} variant="contained" type="button">Cancel</Button>
            <Button className={classes.button} variant="contained" color="primary" type="submit">Submit</Button>
          </div>
          )
        }
         
        
      {/* </div> */}
      <Button  className={classes.button} variant="contained" color="primary" type="button">Change Password</Button>
      </div>
    </form>
  );
}