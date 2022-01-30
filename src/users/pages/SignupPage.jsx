import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendPostSignup } from "../../redux/action/auth.js";
import Signup from "../components/signup/Signup.jsx";

export default function SignupPage() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.auth.status );

  const handleSubmitForm = (payload) => {
    dispatch(sendPostSignup(payload))
    localStorage.setItem("email",payload.email)
  }

  return <Signup handleSubmitForm={handleSubmitForm} status={status}/>;
}
