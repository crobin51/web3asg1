import React from "react";

class FavoriteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addClass: false };
  }

  removeFavsClick = () => {
    this.setState({ addClass: !this.state.addClass });
    setTimeout(() => {
      this.props.removeFavs(this.props.photo.id);
      this.setState({ addClass: false });
    }, 1200);
  };

  render() {
    let favClass = ["favPic pListPhotos"];
    if (this.state.addClass) {
      favClass.push("hidden");
    }
    const imgURL = `https://storage.googleapis.com/funwebdev-3rd-travel/square-medium/${
      this.props.photo.path
    }`;
    return (
      <figure className={favClass.join(" ")}>
        <img
          src={imgURL}
          className="photoThumb"
          title={this.props.photo.title}
          alt={this.props.photo.title}
        />
        <p onClick={this.removeFavsClick.bind(this)}>
          {this.state.addClass} <i className="fas fa-window-close delete" />{" "}
        </p>
      </figure>
    );
  }
}
export default FavoriteItem;
