import React, { createContext, useState } from "react";

const contextDataProvider = createContext();
localStorage.setItem(
  "menu",
  JSON.stringify([
    {
      name: "Sushi",
      description: "Finest fish and veggies",
      price: "$22.99",
    },
    {
      name: "Sushi",
      description: "Finest fish and veggies",
      price: "$22.99",
    },
    {
      name: "Sushi",
      description: "Finest fish and veggies",
      price: "$22.99",
    },
    {
      name: "Sushi",
      description: "Finest fish and veggies",
      price: "$22.99",
    },
    {
      name: "Sushi",
      description: "Finest fish and veggies",
      price: "$22.99",
    },
  ])
);
function MenuProvider(props) {
  const [menu, setMenu] = useState([]);
  const [toggle, setToggle] = useState(true);
  return (
    <contextDataProvider.Provider
      value={{
        toggle,
        setToggle,
        menu,
        setMenu,
      }}
    >
      {props.children}
    </contextDataProvider.Provider>
  );
}
export { contextDataProvider as dataContext, MenuProvider };
