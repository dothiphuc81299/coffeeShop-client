import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";
import * as yup from "yup";

import logo from "../../../assets/images/commons/logo.png";

const validationSchema = yup.object().shape({
  code: yup.string("Enter your code").required("Code is required"),
});

export default function VerifyEmail(props) {
  const { handleSubmitForm,status } = props;
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
        history.push('/login')
        localStorage.removeItem("email");
      }
    }
  }, [status])

  const email =localStorage.getItem("email") ;

  const formik = useFormik({
    initialValues: {
      code: '',
      email:email,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      handleSubmitForm(values);
    },
  });

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
            <h2 className="text-center">Verify your Email</h2>
            <h4 className="text-center">We have just sent a verification code to  {email} . </h4>
           <h4 className="text-center"> To 
            verify that is your email address, enter it below. 
             </h4>
          </div>
        
          <form onSubmit={formik.handleSubmit}>
          

            <div className="flex-center mb-12">
            <TextField 
                fullWidth 
            
                variant="outlined"
                label="your code" 
                type="text" 
                name="code" 
                value={formik.values.code}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.code)}
                helperText={formik.touched.password && formik.errors.code}
              />
            </div>

            <button
              type="submit"
              className="c-btn bg-blue-btn fs-14 text-white text-bold mb-15"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
