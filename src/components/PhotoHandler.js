import React from "react";
import PhotoList from './PhotoList.js';
import EditPhotoDetails from './EditPhotoDetails.js';
import Favorites from './Favorites.js';
import PhotoMap from './PhotoMap.js';

class PhotoHandler extends React.Component {
    constructor(props) {
 super(props);
}
 updateCurrent = (id) =>{
      this.props.updateCurrent(id);
}
 handleEditClick= () =>{
     this.props.showImageDetails();
     
 }
  handleMapClick= () =>{
     this.props.showMap();
     
 }
 handleViewClick= () =>{
     this.props.showViewDetails();
     
 }
 render() {
	if(this.props.photoOption == 'editPhoto' || this.props.photoOption == ''){
		return this.renderEditPhoto();
	}else if(this.props.photoOption == 'map'){
		return this.renderMap();
	}else if(this.props.photoOption == 'view'){
		return this.renderView();
	}
 }
 renderView(){
      const imgURL =
 `https://storage.googleapis.com/funwebdev-3rd-travel/medium/`;
     let photo = this.props.photos.find( p => p.id === this.props.currentPhoto);
	 return (
     <article className="details">
          <div className="detailsPhotoBox">
         <img src={imgURL+photo.path} alt={photo.title} />
         <h2>{photo.title} </h2>
         <p>{photo.description}   </p>
     <h4>{photo.city + "," + photo.country} </h4>
         <button className="ourButton" onClick={ this.handleEditClick }>Edit</button> 
     <button className="ourButton" onClick={this.handleMapClick}>Map</button>
         </div>
      </article>
     );
 }
 renderMap(){
	 const id = this.props.currentPhoto;
	 const photo = this.props.photos.find( p => p.id === id);
	 console.log(photo);
	 return(
 <PhotoMap photos={this.props.photos} currentPhoto={this.props.currentPhoto}/>
	 );
 }
 renderEditPhoto(){
	 return (
     <div>
<EditPhotoDetails
         handleMapClick={this.handleMapClick}
          handleViewClick={this.handleViewClick}
          updateCurrent={this.updateCurrent}
 photos={this.props.photos}
 currentPhoto={this.props.currentPhoto}
 updatePhoto={this.props.updatePhoto} />
     </div>
 );
 }
}
export default PhotoHandler;