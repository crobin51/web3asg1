import React from 'react';
import { Link } from 'react-router-dom';
const HeaderMenu = function (props) {
 return (
 <nav>
 <Link to='/home'>
 <button className="ourButton"><i className="fas fa-home"></i> Home</button>
 </Link>
 <Link to='/browse'>
 <button className="ourButton"><i className="fas fa-search"></i>Browse</button>
 </Link>
 <Link to='/about'>
 <button className="ourButton"><i className="fas fa-question-circle"></i>About</button>
 </Link>
 </nav>
 );
}
export default HeaderMenu;