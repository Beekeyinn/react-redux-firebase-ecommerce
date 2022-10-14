import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import CartItem from "./CartItem";
const CartItems = () => {
  const itemLists = useSelector((state) => state.cart.itemList);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {itemLists.map((item) => {
          return (
            <li key={item.id}>
              <CartItem
                id={item.id}
                quantity={item.quantity}
                price={item.price}
                total={item.totalPrice}
                name={item.name}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CartItems;
