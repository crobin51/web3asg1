import React from "react";
import logo from '../logo.png';
const HeaderBar = function(props) {
  return (
  <div>
  <img id="headerLogo" src={logo} alt=""></img>
    <div className="header-titles">
      <h1>Spectacular Photo Gallery</h1>
      <p>with React</p>
    </div>
	</div>
  );
};
export default HeaderBar;
