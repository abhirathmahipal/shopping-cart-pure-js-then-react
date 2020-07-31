import React from "react";

function MenuItem({ productName, price, addToCart, sku }) {
  return (
    <div class="menu-item">
      <span class="menu-text">{`${productName} - ₹${price}`}</span>
      <span class="menu-action">
        <button onClick={() => addToCart(sku)}>+</button>
      </span>
    </div>
  );
}

export default MenuItem;
