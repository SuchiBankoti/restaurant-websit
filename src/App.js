import React, { useContext } from "react";
import Navbar from "./Components/Navbar";
import Mainpage from "./Components/Mainpage";
import CartItems from "./Components/CartItems";
import "./App.css";
import { dataContext } from "./Context";

function App() {
  const { toggle } = useContext(dataContext);
  return (
    <div>
      <div className="main">
        <div
          className="app"
          style={{ filter: toggle ? "blur(3px)" : "blur(0)" }}
        >
          <Navbar />
          <Mainpage />
        </div>
        <CartItems />
      </div>
    </div>
  );
}

export default App;
