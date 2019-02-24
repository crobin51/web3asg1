import React from "react";
import EditPhotoDetails from "./EditPhotoDetails.js";
import PhotoMap from "./PhotoMap.js";

class PhotoHandler extends React.Component {
   updateCurrent = id => {
    this.props.updateCurrent(id);
  };
  handleEditClick = () => {
    this.props.showImageDetails();
  };
  handleMapClick = () => {
    this.props.showMap();
  };
  handleViewClick = () => {
    this.props.showViewDetails();
  };
  render() {
    if (this.props.photoOption === "editPhoto") {
      return this.renderEditPhoto();
    } else if (this.props.photoOption === "map") {
      return this.renderMap();
    } else if (
      this.props.photoOption === "view" ||
      this.props.photoOption === ""
    ) {
      return this.renderView();
    }
  }
  renderView() {
    const imgURL = `https://storage.googleapis.com/funwebdev-3rd-travel/medium/`;
    let photo = this.props.photos.find(p => p.id === this.props.currentPhoto);
    if (photo != null) {
      return (
        <article className="details ">
          <div className="detailsPhotoBox col-11">
          <figure id="viewImage"> 
            <img src={imgURL + photo.path} alt={photo.title} />
          </figure>
            <h2>{photo.title} </h2>
            <p>{photo.description} </p>
            <h4>{photo.city + "," + photo.country} </h4>
            <button className="ourButton" onClick={this.handleEditClick}>
              Edit
            </button>
            <button className="ourButton" onClick={this.handleMapClick}>
              Map
            </button>
          </div>
        </article>
      );
    } else {
      return null;
    }
  }
  renderMap() {
    const id = this.props.currentPhoto;
    const photo = this.props.photos.find(p => p.id === id);
    console.log(photo);
    return (
      <PhotoMap
        photos={this.props.photos}
        currentPhoto={this.props.currentPhoto}
        handleViewClick={this.handleViewClick}
        handleEditClick={this.handleEditClick}
      />
    );
  }
  renderEditPhoto() {
    return (
      <div>
        <EditPhotoDetails
          handleMapClick={this.handleMapClick}
          handleViewClick={this.handleViewClick}
          updateCurrent={this.updateCurrent}
          photos={this.props.photos}
          currentPhoto={this.props.currentPhoto}
          updatePhoto={this.props.updatePhoto}
        />
      </div>
    );
  }
}
export default PhotoHandler;
