import React from "react";
class PhotoThumb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addClass: false,
        addButton: false,
      view: false
    };
  }
  handleViewClick = () => {
    console.log("handle view click");
    this.setState({ view: true });
    this.props.showImageDetails(this.props.photo.id);
  };
  addToFavoriteClick = () => {
    this.props.addToFavs(this.props.photo.id);
  };

  removePhoto = () => {
    this.setState({ addClass: !this.state.addClass });
    setTimeout(() => {
      this.props.removePhoto(this.props.photo.id);
    this.setState({ addClass: false });
    }, 1200);
  };
  handleViewButtonClick = () => {
    this.props.viewDetails();
  };
  handleMapClick = () => {
    console.log("handle map click");
    this.props.handleMap();
  };
  handleEditClick = () => {
    this.props.handleEdit();
  };
toggleDelete = () =>{
    if(this.state.addButton){
        this.setState({addButton: false});
    }else{
        this.setState({addButton: true});
    }
    
}
  render() {
    let photoClass = ["photoBox", "rounded"];
      let deleteButton=  ["deletePhoto"];
    if (this.state.view) {
      if (photoClass.indexOf("photoSelected") === -1) {
        photoClass.push("photoSelected");
      }
    }

    if (this.state.addClass) {
      photoClass.push("hidden");
    }
      
      if(this.state.addButton){
           deleteButton.splice(0,1);
          deleteButton.push("showPhoto");
         
      }else{
             deleteButton.splice(0,1);
          deleteButton.push("deletePhoto");
         
      }
    if (
      this.props.currentPhoto !== this.props.photo.id &&
      photoClass.length > 1
    ) {
      photoClass.splice(2, 1);
    } else if (this.props.currentPhoto === this.props.photo.id) {
      if (photoClass.indexOf("photoSelected") === -1) {
        photoClass.push("photoSelected");
      }
    }

    const imgURL = `https://storage.googleapis.com/funwebdev-3rd-travel/square-medium/${
      this.props.photo.path
    }`;
    return (
      <div onMouseEnter={this.toggleDelete} onMouseLeave={this.toggleDelete} className={photoClass.join(" ")} onClick={this.handleViewClick}>
        <figure>
          <img
            src={imgURL}
            className="photoThumb"
            title={this.props.photo.title}
            alt={this.props.photo.title}
          />
          <p className={deleteButton.join(" ")} onClick={this.removePhoto.bind(this)}>
            {this.state.addClass}{" "}
            <i className="fas fa-window-close" />{" "}
          </p>
        </figure>
        <div>
          <h3>{this.props.photo.title}</h3>
          <p>
            {this.props.photo.city},{this.props.photo.country}
          </p>
     
          <button className="ourButton" onClick={this.handleViewButtonClick}>
            View
          </button>

          <button className="ourButton" onClick={this.handleMapClick}>
              Map
          </button>
          <div id="quickEdit">
            <button className="ourButton" onClick={this.handleEditClick}>
              Edit
            </button>
            <button className="ourButton" onClick={this.addToFavoriteClick}>
              ❤
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default PhotoThumb;
