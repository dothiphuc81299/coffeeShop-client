import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/ui/Loading';
import { Card, makeStyles } from '@material-ui/core';
import SideBar from '../components/ui/UserSidebar';
import { getListOrder } from '../../redux/action/order';
import ListOrder from '../components/user/ListOrder';

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

export default function HistoryOrder() {
  const classes = useStyles();
  let history = useHistory();
  const token = useSelector((state) => state.auth.token);
  const listOrder = useSelector((state) => state.order.listOrder);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      history.push("/")
    } else {
      dispatch(getListOrder(token))
    }
  }, [token]);

  return (
    <div className="user-detail">
      <div className={classes.myContainer + ' my-30 container'}>
        <SideBar />
        <Card className={classes.root}>
          <h1 className="text-center mt-20">History Order</h1>
          { listOrder.length > 0 ? <ListOrder data={listOrder} /> : <Loading />}
        </Card>
      </div>
    </div>
  );
}