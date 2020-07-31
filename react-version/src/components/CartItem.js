import React from "react";

function CartItem({}) {
  // you can use this if you decide to :)
  return (
    <div class="cart-item">
      <span class="item-text">Keyboard x 2</span>
      <span class="item-total">₹1398</span>
      <button class="remove-button">-</button>
    </div>
  );
}

export default CartItem;
