import React from "react";

const Context = React.createContext({
  users: [],
  cart: [],
  addUser: () => {},
  addCart: () => {},
  //   getAllTreatments: () => {},
});

export default Context;
