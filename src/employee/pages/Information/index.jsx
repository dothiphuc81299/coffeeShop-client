import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getInforByToken, sendPostUpdateInforStaff } from '../../../redux/action/inforStaff';
import InforForm from '../../containers/Information/InforForm';
import Loading from '../../containers/ui/Loading';
import Layout from '../../PrivateLayout';
import { Card, makeStyles, Typography } from '@material-ui/core';
import SideBar from '../../containers/Information/Sidebar';
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import ResponsiveDrawer from "../../../admin/components/ResponsiveDrawer";
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
    backgroundColor: "#177245",
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

export default function UserDetailPage() {
  const classes = useStyles();
  let history = useHistory();
  const token = useSelector((state) => state.authAdmin.token);
  const infor = useSelector((state) => state.inforStaff.infor);
  const [ isEdit, setIsEdit ] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      history.push("/")
    } else {
      dispatch(getInforByToken(token))
    }
  }, [token]);

  const handleSubmitFormDetail = (payload) => {
    setIsEdit(false);
    dispatch(sendPostUpdateInforStaff(payload))
  }

  return (
    <Layout>
      <div className={classes.root}>
        <CssBaseline />

        <AppBar position="fixed" className={classes.appBar}>
        </AppBar>
        <ResponsiveDrawer />
        <main className={classes.content}>
          <div className="user-detail">
            <div className="mt-30 container">
              <Card className={classes.card}>
                <Typography variant="h4" component="h2" className="text-center mt-20">User detail</Typography>
                { infor ? 
                  <InforForm 
                    infor={infor} 
                    handleSubmitFormDetail={handleSubmitFormDetail} 
                    token={token} 
                    isEdit={isEdit}
                    setIsEdit={setIsEdit}
                  /> : <Loading />}
              </Card>
            </div>
          </div>
        </main>
      </div>
    </Layout>

  );
}