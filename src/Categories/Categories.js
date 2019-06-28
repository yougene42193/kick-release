import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

export default class Categories extends React.Component {

  render() {

    let brands = ["All", "Adidas", "Jordan", "Nike", "Yeezy"]

    return (
      <section className="categories">
        <h3 className="categories-header">Brands</h3>
        {brands.map((brand, index) => (
          <Link key={index} to={brand === "All" ? "/list" : `/${brand}`}>
            <div
              className={
                brand === this.props.match.params.brand ||
                (brand === "All" && window.location.pathname === "/list")
                  ? "selected"
                  : "unselected"
              }
            >
              <li>{brand}</li>
            </div>
          </Link>
        ))}
      </section>
    );
  }
}