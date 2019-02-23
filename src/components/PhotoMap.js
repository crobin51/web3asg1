import React from "react";
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';

const mapStyles={
	map:{
	
	width: '100%',
	height: '200px'
	}
};
export class PhotoMap extends React.Component {
	userLat = null;
	userLong = null;
    constructor(props) {
 super(props);
 this.state =  {userLat: 0, userLong:0};
}
//https://scotch.io/tutorials/react-apps-with-the-google-maps-api-and-google-maps-react
 render() {
	 if(this.props.photos.length>0){
		 const id = this.props.currentPhoto;
		 const photo = this.props.photos.find( p => p.id === id);
		 if(photo!= null){
		 //https://alligator.io/js/geolocation-api/
	if(navigator.geolocation){
			 navigator.geolocation.getCurrentPosition(this.userLocation);
		 }
	return(
	<div id ="mapContianer">
	<div id="map">
	 <Map
		google = {this.props.google}
		zoom={14}
		style={mapStyles}
		initialCenter={{
			lat: photo.latitude, lng:photo.longitude}}
		center={{
			lat: photo.latitude, lng: photo.longitude
		}}
		>
			<Marker
			name= {photo.title}
			position = {{lat: photo.latitude, lng: photo.longitude}}
			title={photo.title}
			/>
		
		</Map>
		</div>
		
		<div>
		<h1>Distance to User Location</h1>
		<h2>{this.calculateDistance(this.userLat, this.userLong, photo.latitude, photo.longitude)}</h2>
		</div>
		</div>
	);
		 }else{
			 return null;
		 }
	 }else{
		 return null;
	}
 }
 userLocation = (position) =>{
	 this.userLat= position.coords.latitude;
	 this.userLong= position.coords.longitude;
	 console.log(this.userLat);
	 console.log(this.userLong);
 }
 calculateDistance = (userLat, userLong, photoLat, photoLong) =>{
	 //https://www.movable-type.co.uk/scripts/latlong.html
	 if(this.userLat != null && this.userLong != null){
	 let R = 6371e3; // metres
	 console.log(userLat);
	 console.log(userLong);
	 console.log(photoLat);
	 console.log(photoLong);

let uLatRadian = this.toRadians(userLat);
let pLatRadian = this.toRadians(photoLat);
let latDiff = this.toRadians((photoLat-userLat));
let longDiff = this.toRadians((photoLong-userLong));

let a = Math.sin(latDiff/2) * Math.sin(latDiff/2) +
        Math.cos(uLatRadian) * Math.cos(pLatRadian) *
        Math.sin(longDiff/2) * Math.sin(longDiff/2);
let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
console.log(R*c/1000);
return R * c /1000 +'KM';
	 }else{
		 return "Allow Location Services to use this feature";
	 }
 
 
 }
 toRadians(number){
	 return number*Math.PI / 180;
 }
 }
export default GoogleApiWrapper({
	apiKey: 'AIzaSyAIfowdcLxU-l5zeUMaF54i_w5Xy3R_qic'
})(PhotoMap);