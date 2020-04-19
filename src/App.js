import React from "react";
import Cocktails from "./Cocktails";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="title">Alcoholic Beverage Database</h1>
      <Cocktails className="Cocktail"></Cocktails>
    </div>
  );
}

export default App;
