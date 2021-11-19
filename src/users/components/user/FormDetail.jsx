import React from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import * as yup from 'yup';
import MapAuthComplete from '../ui/MapAuthComplete';
import { withScriptjs } from 'react-google-maps';

const useStyles = makeStyles({
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

export default function UserDetail(props) {
  const MapLoader = withScriptjs(MapAuthComplete);
  const classes = useStyles();
  const { infor, handleSubmitFormDetail, token } = props;
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

  const handleAddressChange = (value) => {
    const { position, address } = value;
    formik.setFieldValue('address', address);
    formik.setFieldValue('position', position);
  }

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
      <MapLoader
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDGZOhb6qWmy1PLYJrLmtBho18Vasw0C_U&libraries=places"
        loadingElement={<div style={{ height: `100%` }}/>}
        addressProp={formik.values.address}
        positionProp={formik.values.position}
        setInfoUser={(value) => handleAddressChange(value)}
      />
      <div className="flex-right mt-10">
        <Button className={classes.button} variant="contained" color="primary" type="submit">Submit</Button>
      </div>
    </form>
  );
}