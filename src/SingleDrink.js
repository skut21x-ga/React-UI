import React, { Component } from "react";
import "./SingleDrink.css";

let url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11003";
// change ID based on user link
class SingleDrink extends Component {
  constructor(props) {
    super(props);
    this.state = { singledrinks: [null] };
  }

  componentDidMount() {
    fetch(url, {})
      .then((res) => res.json())
      .then((res) => this.setState({ singledrinks: res.drinks }));
  }

  render() {
    console.log(this.state.singledrinks);
    let singleoverlay = this.state.singledrinks.map((drink) => {
      if (drink != null) {
        return (
          <div className="ModularComponent">
            <div className="SingleDrinkBox" key={drink.idDrink}>
              <div className="SingleImageBox">
                <img
                  className="SingleCocktailImage"
                  src={drink.strDrinkThumb}
                ></img>
              </div>
            </div>
            <div className="DrinkDetailsDIV">
              <div className="SingleDrinkInformation">
                <h3 className="SingleCocktailName">{drink.strDrink}</h3>
                <h3 className="SingleCocktailServedIn">
                  Served in a {drink.strGlass}
                </h3>{" "}
                <h3 className="SingleCocktailInstructions">
                  Special Instructions: {drink.strInstructions}
                </h3>
                <h3 className="SingleCocktailMeasurements">
                  Measurements:
                  <h4>
                    {drink.strMeasure1} {drink.strIngredient1}
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    {drink.strMeasure2} {drink.strIngredient2}
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    {drink.strMeasure3} {drink.strIngredient3} <br></br>
                    {drink.strMeasure4} {drink.strIngredient4}
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    {drink.strMeasure5} {drink.strIngredient5}
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    {drink.strMeasure6} {drink.strIngredient6}
                    <br></br>
                    {drink.strMeasure7} {drink.strIngredient7}
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    {drink.strMeasure8} {drink.strIngredient8}
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    {drink.strMeasure9} {drink.strIngredient9}
                    <br></br>
                    {drink.strMeasure10} {drink.strIngredient10}
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    {drink.strMeasure11} {drink.strIngredient11}
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    {drink.strMeasure12} {drink.strIngredient12}
                    <br></br>
                  </h4>
                </h3>
              </div>
            </div>
          </div>
        );
      }
    });
    return <div className="SingleAllDrinks">{singleoverlay}</div>;
  }
}

export default SingleDrink;
