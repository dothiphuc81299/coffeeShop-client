import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { Typography } from "@material-ui/core";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantityItem,postNewOrder } from "../../../redux/action/cart";
import Checkbox from '@mui/material/Checkbox';
const useStyles = makeStyles({
  list: {
    width: 300,
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    margin: 10,
    overflow: "hidden"
  },
  header: {
    marginBottom: 10,
  },
  main: {
    flexGrow: 1,
    overflowY: 'auto',
    maxHeight: "calc(100vh - 140px)",
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    marginTop: 20
  },
  total: {
    flexGrow: 1,
  },
  button: {
    border: 'none',
    padding: '15px 30px',
    fontSize: '18px',
    marginTop: 15
  }
});
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Cart = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isCartOpened, toggleDrawer } = props;
  const listInCart = useSelector((state) => state.cart.listInCart);
  
  const [total, setTotal] = useState(0);

  useEffect(() => {
     sessionStorage.setItem("cart", JSON.stringify(listInCart));
    const totalInCart = listInCart.reduce((sum, item) => { 
      return sum + item.quantity*item.price
    }, 0);
    setTotal(totalInCart)
  }, [listInCart])

  const handleChangeQuantity = (payload) => {
    dispatch(changeQuantityItem(payload))
  }


  const list = () => (
    <div
      className={classes.list}
      role="presentation"
    >
      <div className={classes.header}>
        <Typography variant="h4" component="h4" className="text-center">
          Giỏ hàng
        </Typography>
      </div>
      <div className={classes.main}>
        <List>
          {listInCart.map((item, index) => (
            <CartItem item={item} key={index} handleChangeQuantity={handleChangeQuantity}/>
          ))}
        </List>
      </div>
      <div>
   
      </div>
      <div className={classes.footer}>
        <div className={classes.total}>
          <p className={classes.totalTitle}>Thành tiền</p>
          <Typography variant="h6" component="h6">
            {total.toLocaleString()}đ
          </Typography>
        </div>
        <Link to="/order">
          <button onClick={toggleDrawer(false)} className="btn-radius py-10 px-25 bg-blue-btn text-white text-uppercase text-bold">Mua hàng</button>
        </Link>
      </div>
    </div>
  );

  return (
    <div>
      <React.Fragment key="right">
        <Drawer anchor="right" open={isCartOpened} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

Cart.propTypes = {
  isCartOpened: PropTypes.bool,
  toggleDrawer: PropTypes.func
};

Cart.defaultProps = {
  toggleDrawer: null
};

export default Cart;