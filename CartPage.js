// CartPage.js
import React from 'react';
import { useCart } from './CartContext';
import React, { useEffect } from 'react';
const CartPage = () => {
  const { cart, dispatch } = useCart();

  // Add logic to render cart items, quantity, price, and buttons to update quantity
  useEffect(() => {
    // Fetch your JSON data and update the cart state
    fetch('https://drive.google.com/file/d/1fOadeM1liwbUK38z92F0XYugk2jwqK2r/view?usp=share_link')
      .then((response) => response.json())
      .then((data) => {
        // Update the cart state with the fetched data
        dispatch({ type: 'ADD_TO_CART', data });
      })
      .catch((error) => console.error(error));
  }, [dispatch]);
  
  return (
    <div>
      {/* Display cart items and quantity */}
      {cart.map((item) => (
        <div key={item.id}>
          <div>{item.name}</div>
          <div>Price: ${item.price}</div>
          <div>Quantity: {item.quantity}</div>
          <button onClick={() => dispatch({ type: 'UPDATE_QUANTITY', id: item.id, quantity: item.quantity + 1 })}>
            Increase Quantity
          </button>
          <button onClick={() => dispatch({ type: 'UPDATE_QUANTITY', id: item.id, quantity: item.quantity - 1 })}>
            Decrease Quantity
          </button>
        </div>
      ))}
      {/* Display total quantity and total amount */}
      <div>Total Quantity: {/* Add logic to calculate total quantity */}</div>
      <div>Total Amount: $ {/* Add logic to calculate total amount */}</div>
    </div>
  );
};

export default CartPage;
