//  context api

// import logo from "./logo.svg";
// import "./App.css";
// import Component3 from "./Component3";
// import React from "react";

// export const userContext = React.createContext();
// export const channelContext = React.createContext();

// function App() {
//   return (
//     <div className="App">
//       <h1>React Context</h1>
//       <userContext.Provider value={"Vishwas"}>
//         <channelContext.Provider value={"Codevolution"}>
//           <Component3 />
//         </channelContext.Provider>
//       </userContext.Provider>
//     </div>
//   );
// }

// export default App;

// use reducer with context api

import logo from "./logo.svg";
import "./App.css";
import React, { useReducer } from "react";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentD from "./components/ComponentD";

export const CountContext = React.createContext();
export const channelContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        <h1>Counter {count}</h1>
        <h1>React Context</h1>
        <ComponentA />
        <ComponentB />
        <ComponentD />
      </div>
    </CountContext.Provider>
  );
}

export default App;
