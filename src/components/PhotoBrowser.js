import React from "react";
import PhotoList from './PhotoList.js';
import EditPhotoDetails from './EditPhotoDetails.js';
import Favorites from './Favorites.js';
import Collapsible from 'react-collapsible';
import './PhotoBrowser.css';

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
  removeFavs = (id) => {
      this.props.removePhotoFromFavorites(id);
            
  }
 render() {
 return (
     <div className="photoBrowser">
     
     <Collapsible  trigger={<div className="favorites"> Favorites  <i className="fa fa-angle-double-down" aria-hidden="true"></i> </div>}>
     <Favorites favs={this.props.favors} removeFavs={this.removeFavs} />
     </Collapsible>
 <section id="test" className="row">
     <div id="photoList" className="col-7">
 <PhotoList photos={this.props.photos} 
     showImageDetails={this.showImageDetails} addToFavs={this.addToFavs}/> 
</div>     
<div className="col-5" >
<EditPhotoDetails
 photos={this.props.photos}
 currentPhoto={this.state.currentPhoto}
 updatePhoto={this.props.updatePhoto} />
 </div>
     </section>
     </div>
 );
 }
}
export default PhotoBrowser;