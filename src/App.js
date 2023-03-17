import React from "react";
import Mainpage from "./Components/Mainpage";
import CartItems from "./Components/CartItems";
import "./App.css";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchResults from "./Components/SearchResults";

function App() {
  // const { toggle } = useContext(dataContext);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Mainpage" element={<Mainpage />}></Route>
          <Route path="/CartItems" element={<CartItems />}></Route>
          <Route path="/SearchResults" element={<SearchResults />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
