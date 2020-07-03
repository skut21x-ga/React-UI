import React, { Component } from "react";
import "./SingleDrink.css";

// let testurl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11003";

class SingleDrink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singledrinks: [null],
      selectedDrinkID: null,
    };
  }

  componentDidMount() {
    let activeDrinkUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.drinkID}`;

    fetch(activeDrinkUrl, {})
      .then((res) => res.json())
      .then((res) => this.setState({ singledrinks: res.drinks }))
      .catch((err) => console.log(err));
  }

  render() {
    let singleoverlay = this.state.singledrinks.map((drink) => {
      if (drink != null) {
        return (
          <div className="modularComponentBackground">
            <div className="modularComponent">
              <div className="singleDrinkBox" key={drink.idDrink}>
                {
                  <div
                    className="closeButton"
                    onClick={() => {
                      this.props.clearDrinkID(null);
                    }}
                  >
                    <h3
                      className="closeButtonText"
                      onClick={() => {
                        this.props.clearDrinkID(null);
                      }}
                    >
                      X
                    </h3>
                  </div>
                }
                <div className="singleImageBox">
                  <img
                    className="singleCocktailImage"
                    src={drink.strDrinkThumb}
                  ></img>
                </div>
              </div>
              <div className="drinkDetails">
                <div className="singleDrinkInformation">
                  <h3 className="singleCocktailName">{drink.strDrink}</h3>
                  <h3 className="singleCocktailServedIn">
                    Served in a {drink.strGlass}
                  </h3>{" "}
                  <h3 className="singleCocktailInstructions">
                    Special Instructions: {drink.strInstructions}
                  </h3>
                  <h3 className="singleCocktailMeasurements">
                    Measurements:
                    <div className="measurements">
                      {" "}
                      {drink.strMeasure1} {drink.strIngredient1}{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      {drink.strMeasure2} {drink.strIngredient2} <p></p>
                      {drink.strMeasure3} {drink.strIngredient3}
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      {drink.strMeasure4} {drink.strIngredient4}
                      <p></p> {drink.strMeasure5} {drink.strIngredient5}
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      {drink.strMeasure6} {drink.strIngredient6}
                      <p></p> {drink.strMeasure7} {drink.strIngredient7}
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      {drink.strMeasure8} {drink.strIngredient8}
                      <p></p> {drink.strMeasure9} {drink.strIngredient9}
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      {drink.strMeasure10} {drink.strIngredient10}
                      <p></p> {drink.strMeasure11} {drink.strIngredient11}
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      {drink.strMeasure12} {drink.strIngredient12}
                      <p></p>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        );
      }
    });
    return <div className="singleAllDrinks">{singleoverlay}</div>;
  }
}

export default SingleDrink;
