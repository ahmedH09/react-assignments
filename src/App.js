import React from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import ProductsCard from "./Components/ProductsCard";

function App() {
  return (
    <div className="container">
      <div>
        <ul className="nav nav-pills justify-content-center">
          <li className="nav-item">
            <NavLink className="nav-link mx-5 my-3 bg-info text-light shadow" to="products">Products</NavLink>  
          </li>
          <li className="nav-item">
           <NavLink className="nav-link mx-5 my-3 bg-info text-light shadow" to="cart">Cart</NavLink> 
          </li>
        </ul>
        <hr></hr>
      </div>
      {/* routes */}
      <Routes>
        <Route path="products" element={<ProductsCard />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="" element={<Navigate replace to="products" />} />
      </Routes>
    </div>
  );
}

export default App;
