import React, { Component } from "react";
import "./Cocktails.css";
import SingleDrink from "./SingleDrink";

let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
// api docs @ https://www.thecocktaildb.com/api.php?ref=apilist.fun //
// letter = [#, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, r, s, t, u, v, q, w, x, y, z];
class Cocktails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [null],
      selectedDrinkID: null,
    };
    this.clearDrinkID = this.clearDrinkID.bind(this);
  }

  componentDidMount() {
    fetch(url, {})
      .then((res) => res.json())
      .then(
        (res) => this.setState({ drinks: res.drinks })
        // console.log(this.state.drinks)
      );
  }

  clearDrinkID() {
    this.setState({
      selectedDrinkID: null,
    });
  }

  updateDrinkID(uniqueID) {
    // console.log(uniqueID);
    this.setState({
      selectedDrinkID: uniqueID,
    });
  }

  render() {
    const { selectedDrinkID } = this.state;
    let alldrinks = this.state.drinks.map((drinks) => {
      if (drinks != null) {
        return (
          <div className="drinkBox" key={drinks.idDrink}>
            <div className="nameBox">
              <h3 className="cocktailName">
                <a className="drinkText">{drinks.strDrink}</a>
              </h3>
            </div>
            <div className="imageBox">
              <img
                className="cocktailImage"
                src={drinks.strDrinkThumb}
                onClick={() => this.updateDrinkID(drinks.idDrink)}
              ></img>
            </div>
          </div>
        );
      }
    });
    return (
      <div className="containerOfDrinks">
        <div className="moduleFloater"> </div>

        <div className="allDrinks">{alldrinks}</div>
      </div>
    );
  }
}

export default Cocktails;
