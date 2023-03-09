import React, { useContext } from "react";
import Navbar from "./Components/Navbar";
import Mainpage from "./Components/Mainpage";
import CartItems from "./Components/CartItems";
import "./App.css";
import { dataContext } from "./Context";

function App() {
  const { toggle } = useContext(dataContext);
  return (
    <div className="main">
      <div className="app" style={{ opacity: toggle ? 0.5 : 1 }}>
        <Navbar />
        <Mainpage />
      </div>
      <CartItems />
    </div>
  );
}

export default App;
