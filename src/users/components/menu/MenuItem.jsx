import React, { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { changeQuantityItem } from '../../../redux/action/cart';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "calc(25% - 32px)",
    width: "100%",
    maxHeight: 500,
    marginTop: 20,
    marginLeft: 20,

    [theme.breakpoints.down('sm')]: {
      maxWidth: "calc(33% - 32px)",
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: "90%",
      marginRight: "auto",
      marginLeft: "auto",
    },
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  content: {
    flex: '1 0 auto',
    padding: 0
  },
  title: {
    fontSize: 20,
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 1,
    '-webkit-box-orient': 'vertical',
    overflow:'hidden',
  },
  cover: {
    width: "100%",
    height: 200,
    display: "grid",
    objectFit: "cover",
    [theme.breakpoints.down('sm')]: {
      height: 120,
    },
    [theme.breakpoints.down('xs')]: {
      height: 200,
    },

  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    alignSelf: 'flex-end'
  },
  btn: {
    backgroundColor: '#5fa3b7',
    color: "#fff",
    borderRadius: "4px",
    padding: theme.spacing(1),
    "&:hover": {
      backgroundColor: '#416c79'
    }
  }
}));

export default function MenuItem(props) {
  const classes = useStyles();
  const { _id, image, name, price } = props.item;
  const { handleClickAddToCart } = props;
  const listInCart = useSelector((state) => state.cart.listInCart);
  const imageNotFound = "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg";
  const [ isInCart, setIsInCart ] = useState(false);
  const [ quantity, setQuantity ] = useState(null);
  const quantityInput = useRef(null);
  const dispatch = useDispatch();

  const handleChangeQuantity = (payload) => {
    dispatch(changeQuantityItem(payload))
  }

  useEffect(() => {
    const item = listInCart.find((item) => item._id === _id);
    if (item) {
      setIsInCart(true);
      setQuantity(item.quantity)
    } else {
      setIsInCart(false);
    }
  }, [listInCart])

  return (
    <Card className={classes.root}>
      <img src={image || imageNotFound} alt="" className={classes.cover} />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6" className={classes.title}>
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {price.toLocaleString()}đ
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          { !isInCart 
            ? 
              <button className={classes.btn} onClick={() => handleClickAddToCart({ image, name, price, _id })}>Add to card</button>
            :
              <div className="cart-item__count">
                <button 
                  type="button"
                  onClick={() => {
                    quantityInput.current.value = quantity - 1;
                    handleChangeQuantity({
                      _id,
                      quantity: quantity - 1
                    })
                  }}
                >-</button>
                <input 
                  className="px-0"
                  defaultValue={quantity} 
                  onBlur={(e) => { 
                    const quantity = e.target.value;
                    handleChangeQuantity({
                      _id, quantity
                    }) 
                  }} 
                  ref={quantityInput}
                />
                <button 
                  className="increase" 
                  type="button" 
                  onClick={() => {
                    handleChangeQuantity({
                      _id,
                      quantity: quantity + 1
                    })
                    quantityInput.current.value = quantity + 1;
                  }}>+
                </button>
              </div>
          }
        </div>
      </div>
    </Card>
  );
}
