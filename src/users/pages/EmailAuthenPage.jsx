import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendEmailAuthen } from "../../redux/action/auth.js";
import VerifyEmail from "../components/signup/VerifyEmail.jsx";
import { useHistory } from "react-router-dom";

export default function EmailAuthenPage() {
  const dispatch = useDispatch();
  let history = useHistory();
  const status = useSelector((state) => state.auth.status );
  const handleSubmitForm = (payload) => {
    dispatch(sendEmailAuthen(payload))
  }

  return <VerifyEmail handleSubmitForm={handleSubmitForm}  status ={status} />;
}
