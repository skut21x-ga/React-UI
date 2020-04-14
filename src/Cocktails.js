import React, { Component } from "react";
import "./Cocktails.css";

let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
// api docs @ https://www.thecocktaildb.com/api.php?ref=apilist.fun //
// letter = [#, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, r, s, t, u, v, q, w, x, y, z];
class Cocktails extends Component {
  constructor(props) {
    super(props);
    this.state = { drinks: [null] };
  }

  componentDidMount() {
    fetch(url, {})
      .then((res) => res.json())
      .then((res) => this.setState({ drinks: res.drinks }));
  }

  render() {
    console.log(this.state.drinks);
    let alldrinks = this.state.drinks.map((drinks) => {
      if (drinks != null) {
        return (
          <div className="DrinkBox" key={drinks.idDrink}>
            <a href={`drink/${drinks.idDrink}`}>
              <div className="NameBox">
                <h3 className="CocktailName">{drinks.strDrink}</h3>
              </div>
              <div className="ImageBox">
                <img className="CocktailImage" src={drinks.strDrinkThumb}></img>
              </div>
            </a>
          </div>
        );
      }
    });
    return <div className="allDrinks">{alldrinks}</div>;
  }
}

export default Cocktails;
