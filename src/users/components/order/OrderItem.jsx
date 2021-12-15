import React from 'react';

const OrderItem = (props) => {
  const { image, name, price, quantity } = props.item;

  return (
    <div className="cart-item">
      <div className="cart-item__image mr-7">
        <img src={image} alt="" />
      </div>
      <div className="cart-item__infor">
        <p className="cart-item__infor--bold">{name}</p>
        {/* <p>{price.toLocaleString()}đ</p> */}
        {<p>{price.toLocaleString()}đ </p>}
      </div>
      <div className="cart-item__count">
        <p className="mx-20">x</p>
        <p>{quantity}</p>
      </div>
    </div>
  )
}

export default OrderItem;