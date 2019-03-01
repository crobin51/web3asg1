//Home Page of our Assignment. 
import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import logo from "../logo.png";
class Home extends React.Component {
  render() {
    return (
      <div className="banner">
        <div>
		<img id="homeLogo" src={logo} alt =""/>
          <h1>Travel Photos</h1>
          <h3>Upload and Share</h3>
          <p>
            <Link to="/browse">
              <button className="ourButton">Browse</button>
            </Link>
            <Link to="/about">
              <button className="ourButton">About</button>
            </Link>
          </p>
        </div>
      </div>
    );
  }
}
export default Home;
