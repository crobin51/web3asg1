import React from "react";
import FavoriteItem from './FavoriteItem.js';
class Favorites extends React.Component {
 render() {
    
 return (
<article className="favorites">
     <div>❤ <p>Favorites</p></div>
 { this.props.favs.map( (p) =>
 <FavoriteItem photo={p} key={this.props.id} /> )} 

 </article>
 );
 } 
}
export default Favorites