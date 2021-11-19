import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';

const validationSchema = yup.object({
  username: yup
    .string('Enter your username')
    .required('Username is required'),
  password: yup
    .string('Enter your password')
    .required('Password is required'),
});

export default function LoginFrom(props) {
  const { handleSubmitForm } = props;

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      isRemember: false,
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      handleSubmitForm(values)
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-12">
        <TextField 
          fullWidth 
          variant="outlined" 
          label="Username"
          name="username"
          type="text"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />
      </div>
      <div className="mb-12">
        <TextField 
          fullWidth 
          variant="outlined"
          label="Password" 
          type="password" 
          name="password" 
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
      </div>
      <div className="mb-12">
      <label className="group-checkbox flex-center mb-20">
        <input 
          type="checkbox" 
          name="isRemember"
          onChange={formik.handleChange} 
          checked={formik.values.isRemember} 
        />
        <span className="checkmark"></span>
        <span className="fs-12 pl-4">Remember me?</span>
      </label>
      </div>
      <button type="submit" className="c-btn bg-blue-btn fs-14 text-white text-bold mb-15">Login</button>
    </form>
  );
}
