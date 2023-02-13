import React, { createContext, useState } from "react";

const contextDataProvider = createContext();

function MenuProvider(props) {
  const [menu, setMenu] = useState([
    {
      id: 1,
      name: "Sushi",
      description: "Finest fish and veggies",
      price: "$22.99",
      isAdded: 0,
    },
    {
      id: 2,
      name: "Burger",
      description: "Finest bread and veggies",
      price: "$5.99",
      isAdded: 0,
    },
    {
      id: 3,
      name: "Chicken",
      description: "Finest chicken and veggies",
      price: "$12.99",
      isAdded: 0,
    },
    {
      id: 4,
      name: "Ramen",
      description: "Finest eggs and noodles",
      price: "$80.99",
      isAdded: 0,
    },
    {
      id: 5,
      name: "Green bowl",
      description: "Finest fruits and veggies",
      price: "$25.99",
      isAdded: 0,
    },
  ]);
  const [toggle, setToggle] = useState(false);
  const [cartItems, setCartItems] = useState(menu);

  return (
    <contextDataProvider.Provider
      value={{
        toggle,
        setToggle,
        menu,
        setMenu,
        cartItems,
        setCartItems,
      }}
    >
      {props.children}
    </contextDataProvider.Provider>
  );
}
export { contextDataProvider as dataContext, MenuProvider };
