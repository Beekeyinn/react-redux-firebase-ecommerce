import React from "react";
import { useDispatch } from "react-redux";
import { cartActions, uiActions } from "../store/slice";
import "./Cart.css";
const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(cartActions.removeFromCart(id));
    dispatch(
      uiActions.cartChanged({ change: true, message: "successfully removed." })
    );
  };
  const addHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
      })
    );
    dispatch(
      uiActions.cartChanged({ change: true, message: "successfully added." })
    );
  };
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={removeHandler}>
        -
      </button>
      <button className="cart-actions" onClick={addHandler}>
        +
      </button>
    </div>
  );
};

export default CartItem;
