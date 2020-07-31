import React from "react";
import "./css/reset.css";
import "./css/style.css";
import MenuCart from "./containers/MenuCart";

function App() {
  return (
    <div class="container">
      {/* ids aren't the best way to style in React but the focus of this tutorial isn't on CSS :) */}
      <div id="app-holder">
        <MenuCart />
      </div>
    </div>
  );
}

export default App;
