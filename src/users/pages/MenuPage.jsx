import React from 'react';
import { useHistory } from 'react-router';
import Menu from '../components/menu/Index';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/action/cart';

export default function MenuPage() {
  const dispatch = useDispatch();
  const listDrink = useSelector((state) => state.drink.listDrink);
  const totalDrink = useSelector((state) => state.drink.totalDrink);
  const token = useSelector((state) => state.auth.token);
  const history = useHistory();

  const handleClickAddToCart = (payload) => {
    if (token) {
      dispatch(addToCart(payload))
    } else {
      history.push("/login")
    }
  }

  return (
    <Menu
      data={listDrink}
      total={totalDrink}
      handleClickAddToCart={handleClickAddToCart}
    />
  );
}