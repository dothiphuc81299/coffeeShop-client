import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Card, makeStyles, Typography, TextField } from "@material-ui/core";
import { getInforByToken } from "../../redux/action/auth";
import { addToCart, postNewOrder } from "../../redux/action/cart";
import OrderItem from "../components/order/OrderItem";
import Loading from "../components/ui/Loading";
import Map from "../components/ui/Map";
import Checkbox from "@mui/material/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    margin: "auto",
    padding: 20,
  },
  row: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  cols: {
    width: "50%",
    margin: "0px 10px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },

  checkbox :{
    display: "flex",
    marginleft:"100px"
  },
  list: {
    maxHeight: 250,
    overflowY: "auto",
  },
  footerItem: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    "&:not(:last-child)": {
      marginBottom: 10,
    },
  },
  footerContent: {
    lineHeight: "1.25rem",
  },
}));
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ConfirmOrderPage = () => {
  // const key = 'AIzaSyDGZOhb6qWmy1PLYJrLmtBho18Vasw0C_U';
  const classes = useStyles();
  const [total, setTotal] = useState(0);
  // const shippingFee = 15000;
  //const token = useSelector((state) => state.auth.token);
  const token =localStorage.getItem("token");
  const infor = useSelector((state) => state.auth.infor);
  const listInCart = useSelector((state) => state.cart.listInCart);
  // const [is_point, setPoint] =  React.useState(false);
  // const [point, setPoint] = useState("");
  // const handleChange = (e) => {
  //   setPoint(e.target.value);
  // };

  const [checked, setChecked] = React.useState(false);

  const handleCheckChange = () => {
    setChecked(!checked);
  };

  const [point, setPoint] = React.useState(0);
  const handlePointChange = (e) => {
    setPoint(e.target.value);
  };


  // const [lat, setLat] = useState(0);
  // const [lng, setLng] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();
  // const handleIsPoint = (payload) => {
  //   dispatch(addToCart(payload))
  // }

  useEffect(() => {
    dispatch(getInforByToken(token));
  }, [token]);

  // useEffect(() => {
  //   if (infor?.position) {
  //     setLat(infor.position.lat);
  //     setLng(infor.position.lng);
  //   }
  // }, [infor]);

 

  useEffect(() => {
    if (listInCart.length === 0) {
      history.push("/");
    } else {
      const totalInCart = listInCart.reduce((sum, item) => {
        return sum + item.quantity * item.price;
      }, 0);
      setTotal(totalInCart);
    }
  }, [listInCart]);

  const handleSubmitOrder = (payload) => {
    const dataFormat = listInCart.map((item) => {
      return {
        name: item._id,
        quantity: item.quantity,
      };
    });

    dispatch(
      postNewOrder({
        token,
        drink: dataFormat,
        is_point: checked,
        point:  parseInt(point, 10) ,
      })
    );
  };

 

  return (
    <div className="">
      <div className="my-30 container">
        <Card className={classes.root}>
          <Typography variant="h4" className="text-bold text-center mb-20">
            Order confirm
          </Typography>
          {infor ? (
            <div>
              <div className={classes.row}>
                <div className={classes.cols}>
                  <Typography variant="h6" className="text-bold mb-10">
                    Th??ng tin nh???n h??ng
                  </Typography>
                  {/* <Map
                      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDGZOhb6qWmy1PLYJrLmtBho18Vasw0C_U&v=3.exp&libraries=,drawing"
                      loadingElement={<div style={{ height: `100%` }} />}
                      containerElement={<div style={{ height: `200px`, margin: `auto`, border: '2px solid black' }} />}
                      mapElement={<div style={{ height: `100%` }} />}
                      lat={lat}
                      lng={lng}
                    /> */}
                  <div>
                    <Typography variant="body1">S??T: {infor.phone}</Typography>
                    <Typography variant="body1">
                      ?????a ch???: {infor.address}
                    </Typography>
                  </div>
                  {infor.currentPoint > 0 ? (
                      
                      <div>
                          <Typography variant="body1">Note : S??? d???ng ??i???m t??ch l??y nh?? l?? m???t m?? gi???m : 1 ??i???m = 3000 VND </Typography>
                    <div className={classes.checkbox}>
                     
  
                     
                      <label className="group-checkbox flex-center mb-20">
                    
                        <span className={classes.checkbox}>Su dung diem </span>
                        <input
                          type="checkbox"
                          name="isPoint"
                          onChange={handleCheckChange}
                          checked={checked}
                          value={checked}
                        />
                        <span className="checkmark"></span>
                      </label>

                      {checked ? (
                        <div className="flex-center mb-12">
                          <input
                            type="text"
                            className="name"
                            name="name"
                            value={point}
                            placeholder={infor.currentPoint}
                            onChange={handlePointChange}
                          />
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div> </div>
                  ) : (
                    <div></div>
                  )}
                </div>

                

                <div className={classes.cols}>
                  <Typography variant="h6" className="text-bold">
                    Chi ti???t ????n h??ng
                  </Typography>
                  <div className={classes.list}>
                    {listInCart.map((item, index) => (
                      <OrderItem item={item} key={index} />
                    ))}
                  </div>
                  <div className={classes.footer}>
                    <div className={classes.footerItem}>
                      <Typography variant="body1">Th??nh ti???n</Typography>
                      <Typography
                        variant="h6"
                        className={classes.footerContent}
                      >
                        {total.toLocaleString()}??
                      </Typography>
                    </div>
                    <div className={classes.footerItem}>
                        <Typography variant="body1">Ti???n gi???m</Typography>
                        <Typography variant="h6" className={classes.footerContent}>
                          {(point*3000).toLocaleString()}??
                        </Typography>
                      </div>
                    <div className={classes.footerItem}>
                      <Typography variant="body1">T???ng ti???n</Typography>
                      <Typography
                        variant="h6"
                        className={classes.footerContent}
                      >
                        {(total-point*3000).toLocaleString()}??
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-20 flex-right">
                <button
                  onClick={handleSubmitOrder}
                  className="btn-radius p-10 bg-blue-btn text-white text-uppercase text-bold"
                >
                  <Typography variant="body2" className="text-bold">
                    X??c nh???n mua h??ng
                  </Typography>
                </button>
              </div>
            </div>
          ) : (
            <Loading />
          )}
        </Card>
      </div>
    </div>
  );
};

export default ConfirmOrderPage;
