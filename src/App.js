import logo from "./logo.svg";
import "./App.css";
import Component3 from "./Component3";
import React from "react";

export const userContext = React.createContext();
export const channelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <h1>React Context</h1>
      <userContext.Provider value={"Vishwas"}>
        <channelContext.Provider value={"Codevolution"}>
          <Component3 />
        </channelContext.Provider>
      </userContext.Provider>
    </div>
  );
}

export default App;
