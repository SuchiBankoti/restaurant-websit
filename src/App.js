import React, { useContext } from "react";
// import Navbar from "./Components/Navbar";
import Mainpage from "./Components/Mainpage";
import CartItems from "./Components/CartItems";
import Search from "./Components/Search";
import Cart from "./Components/Cart";
import "./Components/Navbar.css";
import "./App.css";
// import { dataContext } from "./Context";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  // const { toggle } = useContext(dataContext);

  return (
    <div>
      <BrowserRouter>
        <div className="main">
          <div className="navbar">
            <Link to={"/"}>Home</Link>
            <Search />
            <Link to={"/Components/Mainpage"}>main</Link>
            <div className="cart-logo">
              <Link to={"/Components/CartItems"}>
                <Cart />
              </Link>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/Components/Mainpage" element={<Mainpage />}></Route>
          <Route path="/Components/CartItems" element={<CartItems />}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<div>Welcome</div>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
