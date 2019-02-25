import React from "react";

class FavoriteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addClass: false, addDelete: false };
  }

  removeFavsClick = () => {
    this.setState({ addClass: !this.state.addClass });
    setTimeout(() => {
      this.props.removeFavs(this.props.photo.id);
      this.setState({ addClass: false });
    }, 1200);
  };
toggleDelete = () =>{
    if(this.state.addDelete){
        this.setState({addDelete: false});
    }else{
        this.setState({addDelete: true});
    }
    
}
  render() {
      let deleteFavorite = ["deleteFav"]
    let favClass = ["favPic", "pListPhotos"];
    if (this.state.addClass) {
      favClass.push("hidden");
    }
       if(this.state.addDelete){
           deleteFavorite.splice(0,1);
          deleteFavorite.push("showFavDelete");
         
      }else{
             deleteFavorite.splice(0,1);
          deleteFavorite.push("deleteFav");
         
      }
    const imgURL = `https://storage.googleapis.com/funwebdev-3rd-travel/square-medium/${
      this.props.photo.path
    }`;
    return (
      <figure onMouseEnter={this.toggleDelete} onMouseLeave={this.toggleDelete} className={favClass.join(" ")}>
        <img
          src={imgURL}
          className="photoThumb"
          title={this.props.photo.title}
          alt={this.props.photo.title}
        />
        <p className={deleteFavorite.join(" ")} onClick={this.removeFavsClick.bind(this)}>
          {this.state.addClass} <i className="fas fa-window-close delete" />{" "}
        </p>
      </figure>
    );
  }
}
export default FavoriteItem;
