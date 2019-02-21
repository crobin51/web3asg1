import React from "react";
import PhotoList from './PhotoList.js';
import EditPhotoDetails from './EditPhotoDetails.js';
import Favorites from './Favorites.js';

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
     <div>
     <Favorites favs={this.props.favors} />
 <section className="container">
     
 <PhotoList photos={this.props.photos} 
     showImageDetails={this.showImageDetails} addToFavs={this.addToFavs}/> 
<EditPhotoDetails
 photos={this.props.photos}
 currentPhoto={this.state.currentPhoto}
 updatePhoto={this.props.updatePhoto} />
 </section>
     </div>
 );
 }
}
export default PhotoBrowser;