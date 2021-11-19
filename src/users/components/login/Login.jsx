import React from "react";
import { Link } from "react-router-dom";

import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';

import logo from "../../../assets/images/commons/logo.png";


// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const validationSchema = yup.object({
  username: yup
    .string('Enter your username')
    .required('Username is required'),
  password: yup
    .string('Enter your password')
    // .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
});

export default function Login(props) {
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
    <div className="auth">
      {/* <ToastContainer /> */}
      <div className="wrapped flex-column pt-30 pb-30">
        <div className="logo">
          <div className="image">
            <img className="logo" src={logo} alt="logo" />
          </div>
        </div>

        <div className="box">
          <div className="pt-10 pb-10">
            <h2 className="text-center">A cup of coffee</h2>
            <h2 className="text-center">A cup for new day</h2>
          </div>

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

          <div className="flex-center fs-14">
            <span className="flex-center flex-gap">
              Not a member?
              <Link to="/signup" className="text-bold text-blue ml-5">Signup now</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
