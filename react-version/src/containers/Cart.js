import React from "react";

function Cart({ total, cart, menu, reduceCart }) {
  return (
    <div id="cart">
      <h2 className="text-center">Cart</h2>
      <div id="cart-area">
        {/* like explained in the video you can separate out cart item into a different component as well */}
        {Object.keys(cart).map((sku, index) => (
          <div className="cart-item" key={index}>
            <span className="item-text">
              {menu[sku].productName} x {cart[sku]}
            </span>
            <span className="item-total">₹{menu[sku].price}</span>
            <button className="remove-button" onClick={() => reduceCart(sku)}>
              -
            </button>
          </div>
        ))}
        <div id="cart-total">
          <div className="cart-item">
            <span className="item-text">total</span>
            <p className="item-total">
              ₹<span id="total-amount">{total}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
