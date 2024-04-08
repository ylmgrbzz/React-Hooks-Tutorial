import logo from "./logo.svg";
import "./App.css";
import Component3 from "./Component3";
import React from "react";

export const userContext = React.createContext();

function App() {
  return (
    <div className="App">
      <h1>React Context</h1>
      <userContext.Provider value={"Vishwas"}>
        <Component3 />
      </userContext.Provider>
    </div>
  );
}

export default App;
