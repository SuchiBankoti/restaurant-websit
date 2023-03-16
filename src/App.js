import React from "react";
// import Navbar from "./Components/Navbar";
import Mainpage from "./Components/Mainpage";
import CartItems from "./Components/CartItems";
import Search from "./Components/Search";
import Cart from "./Components/Cart";
import "./Components/Navbar.css";
import "./App.css";
import Home from "./Home";
// import { dataContext } from "./Context";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  // const { toggle } = useContext(dataContext);

  return (
    <div className="main">
      <BrowserRouter>
        <div>
          <div className="navbar">
            <div className="nav-left">
              <Link to={"/"} className="link">
                <div className="home-heading">Home</div>
              </Link>
              <Search />
            </div>
            <div className="nav-right">
              <Link to={"/Components/Mainpage"} className="link">
                <div className="menu-heading">Menu</div>
              </Link>
              <div className="cart-logo">
                <Link to={"/Components/CartItems"} className="link">
                  <Cart />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/Components/Mainpage" element={<Mainpage />}></Route>
          <Route path="/Components/CartItems" element={<CartItems />}></Route>
        </Routes>
        <Routes path="/" element={<Home />}></Routes>
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
