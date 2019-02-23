import React from "react";
import PhotoList from './PhotoList.js';
import EditPhotoDetails from './EditPhotoDetails.js';
import Favorites from './Favorites.js';
import PhotoMap from './PhotoMap.js';

class PhotoHandler extends React.Component {
    constructor(props) {
 super(props);
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
	 return null;
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
 photos={this.props.photos}
 currentPhoto={this.props.currentPhoto}
 updatePhoto={this.props.updatePhoto} />
     </div>
 );
 }
}
export default PhotoHandler;