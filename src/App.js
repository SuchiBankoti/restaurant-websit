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
    <BrowserRouter>
      <Routes>
        <Route path="/restaurant-websit" element={<Home />}></Route>
        <Route
          path="/restaurant-websit/Mainpage"
          element={<Mainpage />}
        ></Route>
        <Route
          path="/restaurant-websit/CartItems"
          element={<CartItems />}
        ></Route>
        <Route
          path="/restaurant-websit/SearchResults"
          element={<SearchResults />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
