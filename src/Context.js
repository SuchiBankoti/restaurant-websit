// import React, { createContext, useState } from "react";

// const contextDataProvider = createContext();

// function MenuProvider(props) {
//   const [menu, setMenu] = useState([
//     {
//       id: 1,
//       name: "Sushi",
//       description: "Finest fish and veggies",
//       price: 22.99,
//       unit: 0,
//     },
//     {
//       id: 2,
//       name: "Pasta",
//       description: "Finest bread and veggies",
//       price: 5.99,
//       unit: 0,
//     },
//     {
//       id: 3,
//       name: "Chicken",
//       description: "Finest chicken and veggies",
//       price: 12.99,
//       unit: 0,
//     },
//     {
//       id: 4,
//       name: "Momo",
//       description: "Finest eggs and noodles",
//       price: 80.99,
//       unit: 0,
//     },
//     {
//       id: 5,
//       name: "Green Bowl",
//       description: "Finest fruits and veggies",
//       price: 25.99,
//       unit: 0,
//     },
//   ]);
//   const [searchInput, setSearchInput] = useState("");
//   function manageCart(newItem, units) {
//     setMenu((prev) =>
//       prev.map((obj) =>
//         obj.name === newItem.name ? { ...obj, unit: units } : obj
//       )
//     );
//   }

//   return (
//     <contextDataProvider.Provider
//       value={{
//         menu,
//         setMenu,
//         manageCart,
//         searchInput,
//         setSearchInput,
//       }}
//     >
//       {props.children}
//     </contextDataProvider.Provider>
//   );
// }
// export { contextDataProvider as dataContext, MenuProvider };
