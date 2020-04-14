import React, { Component } from "react";
import "./SingleDrink.css";

let url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007";
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
          <div className="SingleDrinkBox" key={drink.idDrink}>
            <div className="SingleNameBox">
              <h3 className="SingleCocktailName">{drink.strDrink}</h3>
            </div>
            <div className="SingleImageBox">
              <img
                className="SingleCocktailImage"
                src={drink.strDrinkThumb}
              ></img>
            </div>
            {/* </a> */}
          </div>
        );
      }
    });
    return <div className="SingleallDrinks">{singleoverlay}</div>;
  }
}

export default SingleDrink;
