import React from "react";
import Cocktails from "./Cocktails";
import SingleDrink from "./SingleDrink";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Cocktails className="Cocktail"></Cocktails>
      <div>
        <a>MODULAR COMPONENT :</a>
      </div>
      <SingleDrink className="SingleDrink"></SingleDrink>
    </div>
  );
}

export default App;
