//The PhotoList Componenet contains a list of PhotoThumbs
import React from "react";
import PhotoThumb from "./PhotoThumb.js";
class PhotoList extends React.Component {
  render() {
    if (this.props.photos.length > 1) {
      return (
        <article className="photos">
          {this.props.photos.map(p => (
            <PhotoThumb
              photo={p}
              key={p.id}
              showImageDetails={this.props.showImageDetails}
              viewDetails={this.props.showViewDetails}
              currentPhoto={this.props.currentPhoto}
              addToFavs={this.props.addToFavs}
              handleMap={this.props.handleMap}
              handleEdit={this.props.handleEdit}
              removePhoto={this.props.removePhoto}
            />
          ))}
        </article>
      );
    } else return null;
  }
}
export default PhotoList;
