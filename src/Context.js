import React, { createContext, useState } from "react";

const contextDataProvider = createContext();

function MenuProvider(props) {
  const [menu, setMenu] = useState([
    {
      id: 1,
      name: "Sushi",
      description: "Finest fish and veggies",
      price: "$22.99",
      unit: 0,
    },
    {
      id: 2,
      name: "Burger",
      description: "Finest bread and veggies",
      price: "$5.99",
      unit: 0,
    },
    {
      id: 3,
      name: "Chicken",
      description: "Finest chicken and veggies",
      price: "$12.99",
      unit: 0,
    },
    {
      id: 4,
      name: "Ramen",
      description: "Finest eggs and noodles",
      price: "$80.99",
      unit: 0,
    },
    {
      id: 5,
      name: "Green bowl",
      description: "Finest fruits and veggies",
      price: "$25.99",
      unit: 0,
    },
  ]);
  const [toggle, setToggle] = useState(false);
  // const [cartItems, setCartItems] = useState([]);
  function manageCart(newItem, units) {
    setMenu((prev) =>
      prev.map((obj) =>
        obj.name === newItem.name ? { ...obj, unit: units } : obj
      )
    );
    // console.log("quant---" + units);
    // setCartItems((prev) =>
    //   prev.find((obj) => obj.name === newItem.name)
    //     ? prev.map((obj) =>
    //         obj.name === newItem.name ? { ...obj, unit: units } : obj
    //       )
    //     : [...prev, { ...newItem, unit: units }]
    // );
  }

  return (
    <contextDataProvider.Provider
      value={{
        toggle,
        setToggle,
        menu,
        setMenu,
        // cartItems,
        // setCartItems,
        manageCart,
      }}
    >
      {props.children}
    </contextDataProvider.Provider>
  );
}
export { contextDataProvider as dataContext, MenuProvider };
