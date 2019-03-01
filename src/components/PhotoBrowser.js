//This componenet handles the Browse View of the application. 

import React from "react";
import PhotoList from "./PhotoList.js";
import Favorites from "./Favorites.js";
import Collapsible from "react-collapsible";
import PhotoHandler from "./PhotoHandler.js";
import * as cloneDeep from "lodash/cloneDeep";

class PhotoBrowser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPhoto: 1,
      photoOption: "",
      filterName: "City",
      newPhotos: cloneDeep(this.props.photos)
    };
  }
  showImageDetails = id => {
    this.setState({ currentPhoto: id });
  };
  addToFavs = id => {
    this.props.addPhotoToFavorites(id);
  };
  removeFavs = id => {
    this.props.removePhotoFromFavorites(id);
  };
  changeFilterType = () => {
    if (this.state.filterName === "City") {
      this.setState({ filterName: "Country" });
    } else {
      this.setState({ filterName: "City" });
    }
  };
  filter = e => {
    let tempPhotos = cloneDeep(this.props.photos);

    let nPhotos = [];
    const regex = "^" + e.currentTarget.value.toUpperCase();

    if (this.state.filterName === "City") {
      nPhotos = tempPhotos.filter(t => t.city.toUpperCase().match(regex));
    } else {
      nPhotos = tempPhotos.filter(t => t.country.toUpperCase().match(regex));
    }

    if (nPhotos.length > 0) {
      console.log(nPhotos);
      this.setState({ newPhotos: nPhotos });
    }
  };

  removePhoto = id => {
    this.props.deletePhoto(id);
  };
  updateCurrent = id => {
    this.setState({ currentPhoto: id });
  };
  handleMap = () => {
    this.setState({ photoOption: "map" });
  };
  handleEdit = () => {
    this.setState({ photoOption: "editPhoto" });
  };
  handleView = () => {
    this.setState({ photoOption: "view" });
  };

  render() {
    let photos = [];
    if (this.state.newPhotos.length > 0) {
      photos = this.state.newPhotos;
    } else {
      photos = this.props.photos;
    }

    return (
      <div className="photoBrowser">
        <Collapsible
          trigger={
            <div className="favorites">
              {" "}
              Favorites{" "}
              <i className="fa fa-angle-double-down" aria-hidden="true" />{" "}
            </div>
          }
        >
          <Favorites favs={this.props.favors} removeFavs={this.removeFavs} />
        </Collapsible>

        <section id="mainSection" className="row">
          <div id="FilterBy" className="col-7">
            <p className="h2">Filter By: </p>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {this.state.filterName}
                </span>
                <div className="input-group-text">
                  <input
                    type="checkbox"
                    onChange={this.changeFilterType}
                    aria-label="Checkbox for following text input"
                  />
                </div>
              </div>
              <input
                type="text"
                className="form-control"
                onChange={this.filter}
              />
            </div>
            <div id="photoList" className="col-12 ">
              <PhotoList
                photos={photos}
                showImageDetails={this.showImageDetails}
                showViewDetails={this.handleView}
                removePhoto={this.removePhoto}
                addToFavs={this.addToFavs}
                handleMap={this.handleMap}
                currentPhoto={this.state.currentPhoto}
                handleEdit={this.handleEdit}
                handleView={this.handleView}
              />
            </div>
          </div>
          <div className="col-5">
            <PhotoHandler
              photos={this.props.photos}
              showMap={this.handleMap}
              showViewDetails={this.handleView}
              showImageDetails={this.handleEdit}
              updateCurrent={this.updateCurrent}
              currentPhoto={this.state.currentPhoto}
              updatePhoto={this.props.updatePhoto}
              photoOption={this.state.photoOption}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default PhotoBrowser;
