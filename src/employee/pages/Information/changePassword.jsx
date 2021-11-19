import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { sendPostUpdatePasswordStaff } from '../../../redux/action/inforStaff';
import ChangePasswordForm from '../../containers/Information/ChangePasswordForm';
import Layout from '../../PrivateLayout';
import { Card, makeStyles, Typography } from '@material-ui/core';
import SideBar from '../../containers/Information/Sidebar';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: "#5FA3B7",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: '#f0f2f5',
    height: 'calc(100vh - 64px)',
  },
  card: {
    maxWidth: 700,
    margin: 'auto',
    marginBottom: 20
  }
}));

export default function ChangePasswordStaffPage() {
  const classes = useStyles();
  let history = useHistory();
  const token = useSelector((state) => state.authAdmin.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      history.push("/")
    }
  }, [token]);

  const handleSubmitFormChangePasswordStaff = (payload) => {
    dispatch(sendPostUpdatePasswordStaff(payload))
  }

  return (
    <Layout>
      <div className="d-flex">
        <SideBar></SideBar>
        <main className={classes.content}>
          <div className="user-detail">
            <div className="mt-30 container">
              <Card className={classes.card}>
                <Typography variant="h4" component="h2" className="text-center mt-20">Change Password</Typography>
                  <ChangePasswordForm 
                    handleSubmitFormChangePasswordStaff={handleSubmitFormChangePasswordStaff} 
                    token={token} 
                  />
              </Card>
            </div>
          </div>
        </main>
      </div>
    </Layout>

  );
}