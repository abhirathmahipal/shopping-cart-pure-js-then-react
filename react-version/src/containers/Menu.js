import React from "react";
import MenuItem from "../components/MenuItem";

function Menu({ menu, addToCart }) {
  return (
    <div id="menu">
      <h2>Menu</h2>
      <div id="menu-area">
        {/* menu items */}
        {Object.keys(menu).map((k, index) => (
          <MenuItem
            productName={menu[k].productName}
            price={menu[k].price}
            addToCart={addToCart}
            sku={k}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
