import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ path: path, component: Component, ...rest }) => {
  const token = localStorage.getItem("token") || null;

  return (
    <Route
      {...rest}
      render={props => {
        return token ? 
          <Component {...props} /> : 
          <Redirect to={{ pathname: (path.indexOf("/admin") !== -1) || (path.indexOf("/employee") !== -1) ? "/admin/login" : "/login" }} />;
      }}
    />
  );
};