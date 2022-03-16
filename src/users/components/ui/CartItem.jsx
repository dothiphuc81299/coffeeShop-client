import React, { useEffect, useRef, useState } from 'react';

const CartItem = (props) => {
  const { image, name, price, quantity } = props.item || {};
  const { handleChangeQuantity } = props;
  const quantityInput = useRef(null);

  return (
    <div className="cart-item">
      <div className="cart-item__image mr-7">
        <img src={image} alt="" />
      </div>
      <div className="cart-item__infor">
        <p className="cart-item__infor--bold">{name}</p>
        <p>{price}đ</p>
      </div>
      <div className="cart-item__count">
        <button 
          type="button"
          onClick={() => {
            quantityInput.current.value = quantity - 1;
            handleChangeQuantity({
              ...props.item,
              quantity: quantity - 1
            })
          }}
        >-</button>
        <input 
          className="px-0"
          value={quantity} 
          onBlur={(e) => { 
            const quantity = e.target.value;
            handleChangeQuantity({
              ...props.item, quantity
            }) 
          }} 
          ref={quantityInput}
        />
        <button 
          className="increase" 
          type="button" 
          onClick={() => {
            handleChangeQuantity({
              ...props.item,
              quantity: quantity + 1
            })
            quantityInput.current.value = quantity + 1;
          }}>+</button>
      </div>

     
    </div>
  )
}

export default CartItem;