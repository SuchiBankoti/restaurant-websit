import React, { useContext } from "react";
import Navbar from "./Components/Navbar";
import Mainpage from "./Components/Mainpage";
import "./App.css";
import { dataContext } from "./Context";

function App() {
  const { toggle } = useContext(dataContext);
  return (
    <div className="app">
      <Navbar />
      <Mainpage />
    </div>
  );
}

export default App;
