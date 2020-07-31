import React, { useState, useEffect } from "react";
import Cart from "./Cart";
import Menu from "./Menu";

function MenuCart() {
  const [menuData, setMenuData] = useState({
    "2342153": {
      productName: "Mouse",
      price: 199
    },

    "12364324": {
      productName: "Keyboard",
      price: 699
    },

    "7893424": {
      productName: "AMD CPU",
      price: 6999
    }
  });

  const [cartData, setCartData] = useState({});
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    Object.keys(cartData).map((sku, _) => {
      let qty = cartData[sku];
      let price = menuData[sku].price;
      total += qty * price;
    });

    setCartTotal(total);
  }, [cartData]);

  const addToCart = sku => {
    // creating a new copy
    // we shouldn't change state directly
    let newCart = { ...cartData };

    if (sku in cartData) {
      newCart[sku] += 1;
    } else {
      newCart[sku] = 1;
    }

    // setting cart data
    setCartData(newCart);
  };

  const reduceFromCart = sku => {
    // creating a new copy
    // we shouldn't change state directly
    let newCart = { ...cartData };

    if (sku in cartData) {
      newCart[sku] -= 1;
      if (newCart[sku] < 1) delete newCart[sku];
    }

    setCartData(newCart);
  };

  return (
    <div id="menu-cart">
      {/* ids aren't the best way to style in React but the focus of this tutorial isn't on CSS :) */}
      <Menu menu={menuData} addToCart={addToCart} />
      <Cart
        cart={cartData}
        total={cartTotal}
        reduceCart={reduceFromCart}
        menu={menuData}
      />
    </div>
  );
}

export default MenuCart;
