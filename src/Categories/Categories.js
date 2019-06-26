import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

export default class Categories extends React.Component {
  render() {
    let categories = ["All", "Adidas", "Jordan", "Nike", "Vans", "Yeezy"];

    return (
      <section className="categories">
        <h3 className="categories-header">Categories</h3>
          
        {categories.map((category, index) => (
          
              <li>{category}</li>
            
        ))}
      </section>
    );
  }
}