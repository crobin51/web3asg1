import React from "react";
import PhotoList from './PhotoList.js';
import EditPhotoDetails from './EditPhotoDetails.js';
class PhotoBrowser extends React.Component {
    constructor(props) {
 super(props);
 this.state = { currentPhoto: 1 };
}
    showImageDetails = (id) => {
 this.setState({ currentPhoto: id });
}
  addToFavs = (id) => {
      this.props.addPhotoToFavorites(id);
}
    
 render() {
 return (
 <section className="container">
 <PhotoList photos={this.props.photos} 
     showImageDetails={this.showImageDetails} addToFavs={this.addToFavs}/> 
<EditPhotoDetails
 photos={this.props.photos}
 currentPhoto={this.state.currentPhoto}
 updatePhoto={this.props.updatePhoto} />
 </section>
 );
 }
}
export default PhotoBrowser;