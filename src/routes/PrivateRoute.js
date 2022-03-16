import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

export const UserPrivateRoute = ({ path: path, component: Component, ...rest }) => {
  const token = localStorage.getItem("token") || null;

  return (
    <Route
      {...rest}
      render={props => {
        return token ? 
          <Component {...props} /> : 
          <Redirect to={{ pathname: "/login" }} />;
      }}
    />
  );
};

export const PrivateRoute = ({ path: path, component: Component, ...rest }) => {
  const token = localStorage.getItem("tokenAdmin") || null;
  
  return (
    <Route
      {...rest}
      render={props => {
        return token ? 
          <Component {...props} /> : 
          <Redirect to={{ pathname:"/admin/login" }} />;
      }}
    />
  );
};