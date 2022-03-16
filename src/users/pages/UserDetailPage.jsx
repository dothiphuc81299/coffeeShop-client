import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getInforByToken, sendPostUpdateInfor } from '../../redux/action/auth';
import UserDetailForm from '../components/user/FormDetail';
import Loading from '../components/ui/Loading';
import { Card, makeStyles } from '@material-ui/core';
import SideBar from '../components/ui/UserSidebar';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    minWidth: '50vw',
    marginLeft: 20,
  },
  myContainer: {
    alignItems: 'stretch',
    display: 'flex',
    justifyContent: 'center'
  }
});

export default function UserDetailPage() {
  const classes = useStyles();
  let history = useHistory();
  // const token = useSelector((state) => state.auth.token);
  const token =localStorage.getItem("token");
  const infor = useSelector((state) => state.auth.infor);
  const dispatch = useDispatch();

  console.log("phuc",token)
  useEffect(() => {
    console.log("ttttttt")
    dispatch(getInforByToken(token))
    if (!token) {
     history.push("/")
    }
  }, []);

  const handleSubmitFormDetail = (payload) => {
    dispatch(sendPostUpdateInfor(payload))
  }

  return (
    <div className="user-detail">
      <div className={classes.myContainer + ' my-30 container'}>
        <SideBar />
        <Card className={classes.root}>
          <h1 className="text-center mt-20">User detail</h1>
          { infor ? <UserDetailForm infor={infor} handleSubmitFormDetail={handleSubmitFormDetail} token={token} /> : <Loading />}
        </Card>
      </div>
    </div>
  );
}