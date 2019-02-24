import React from "react";
import { Link } from "react-router-dom";
const HeaderMenu = function(props) {
  return (
    <nav>
      <Link to="/home">
        <button className="ourButton">
          <i className="fas fa-home" /> Home
        </button>
      </Link>
      <Link to="/browse">
        <button className="ourButton">
          <i className="fas fa-search" />Browse
        </button>
      </Link>
      <Link to="/about">
        <button className="ourButton">
          <i className="fas fa-question-circle" />About
        </button>
      </Link>
    </nav>
  );
};
export default HeaderMenu;
