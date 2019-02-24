import React from "react";
class FavoriteItem extends React.Component {
    
 render() {
 const imgURL = `https://storage.googleapis.com/funwebdev-3rd-travel/square-medium/${this.props.photo.path}`;
 return (
  <figure>
 <img src={imgURL} className="photoThumb"
 title={this.props.photo.title}
 alt={this.props.photo.title} />
 </figure>
 

 );
}
}
export default FavoriteItemimport React from "react";
class FavoriteItem extends React.Component {
    
 render() {
 const imgURL = `https://storage.googleapis.com/funwebdev-3rd-travel/square-medium/${this.props.photo.path}`;
 return (
  <figure>
 <img src={imgURL} className="photoThumb"
 title={this.props.photo.title}
 alt={this.props.photo.title} />
 </figure>
 

 );
}
}
export default FavoriteItem