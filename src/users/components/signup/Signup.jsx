import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import TextField from '@material-ui/core/TextField';
import { useFormik } from "formik";
import * as yup from 'yup';

import logo from "../../../assets/images/commons/logo.png";


const validationSchema = yup.object().shape({
  username: yup
    .string('Enter your username')
    .required('Username is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
  phone: yup
    .string('Enter your phone number')
    .required('Phone number is required'),
  email: yup
    .string('Enter your email ')
    .required('Email is required'),
  address: yup
    .string('Enter your address')
    .required('Address is required'),
  isAccept: yup
    .bool()
    .oneOf([true], 'The terms and conditions must be accepted.')
});

export default function Signup(props) 
{
  const {   handleSubmitForm, status } = props;
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    if (status) {
      if (status.number !== 200) {
        toast.error(status.message);
      } else {
        toast.success(status.message)
        dispatch({
          type: "RESET_STATUS"
        })
        history.push('/authen')
      }
    }
  }, [status])
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      phone: '',
      email:'',
      address: '',
      isAccept: false,
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      // console.log(values)
      handleSubmitForm(values);
    },
  });

  const handleAddressChange = (value) => {
    const {  address } = value;
    formik.setFieldValue('address', address);
    // formik.setFieldValue('position', position);
  }

  return (
    <div className="auth">
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
            <div className="flex-center mb-12">
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
            <div className="flex-center mb-12">
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
            <div className="flex-center mb-12">
              <TextField 
                fullWidth 
                variant="outlined" 
                label="Phone number"
                name="phone"
                type="text"
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </div>

            <div className="flex-center mb-12">
              <TextField 
                fullWidth 
                variant="outlined" 
                label="Email"
                name="email"
                type="text"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </div>

            <div className="flex-center mb-12">
              <TextField 
                fullWidth 
                variant="outlined" 
                label="Address"
                name="address"
                type="text"
                value={formik.values.address}
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
              />
            </div>
        
            <label className="group-checkbox flex-center mb-32">
              <input 
                type="checkbox" 
                name="isAccept"
                onChange={formik.handleChange} 
                checked={formik.values.isAccept}  
                error={formik.touched.isAccept && Boolean(formik.errors.isAccept)}
                helperText={formik.touched.isAccept && formik.errors.isAccept}
              />
              <span className="checkmark"></span>
              <span className="fs-12 pl-4">I accept the Terms of Use & Privacy Policy.</span>
            </label>
            <button type="submit" className="c-btn bg-blue-btn fs-14 text-white text-bold mb-15">Signup</button>
          </form>
          <div className="flex-center fs-14">
            <span className="flex-center flex-gap">
              Already have an account?
              <Link to="/login" className="text-bold text-blue ml-5">Login here</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
