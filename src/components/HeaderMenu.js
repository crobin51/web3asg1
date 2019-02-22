import React from 'react';
import { Link } from 'react-router-dom';
const HeaderMenu = function (props) {
 return (
 <nav>
 <Link to='/home'>
 <button className="ourButton">Home</button>
 </Link>
 <Link to='/browse'>
 <button className="ourButton">Browse</button>
 </Link>
 <Link to='/about'>
 <button className="ourButton">About</button>
 </Link>
 </nav>
 );
}
export default HeaderMenu;