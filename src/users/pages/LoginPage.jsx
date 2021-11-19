import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { sendPostLogin } from '../../redux/action/auth';
import Login from '../components/login/Login.jsx'


export default function LoginPage() {
  let history = useHistory();
  const token = useSelector((state) => state.auth.token);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      history.push("/")
    }
  }, [token]);

  const handleSubmitForm = (payload) => {
    dispatch(sendPostLogin(payload))
  }

  return (
    <Login handleSubmitForm={handleSubmitForm}/>
  );
}