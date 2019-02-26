import React from "react";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

const mapStyles = {
  map: {
    width: "100%",
    height: "200px"
  }
};
export class PhotoMap extends React.Component {
  userLat = null;
  userLong = null;
   componentDidMount() { //ideally want to check for user location coordinates after the initial render, and component is mounted.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.userLocation); //update userLat and userLong with the coordinates from geolocation api
    }
  }
  //https://scotch.io/tutorials/react-apps-with-the-google-maps-api-and-google-maps-react
  render() {
    //https://alligator.io/js/geolocation-api/
    if (this.props.photos.length > 0) {
      const id = this.props.currentPhoto;
      const photo = this.props.photos.find(p => p.id === id); //find the photo that the user currently selected
      if (photo != null) { //check if photo is null just in case we somehow arrive here with no photo actually selected
        return (
          <div id="mapContianer">
            <div id="map" className="col-11">
              <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                  lat: photo.latitude,
                  lng: photo.longitude
                }}
                center={{
                  lat: photo.latitude,
                  lng: photo.longitude
                }}
              >
                <Marker
                  name={photo.title}
                  position={{ lat: photo.latitude, lng: photo.longitude }}
                  title={photo.title}
                />
              </Map>
			  {this.userMapRender() 
			  //return a map with user location on it
			  }
            </div>

            <div id="mapInfo">
              <h1>Distance to User Location</h1>
              <h2>
                {this.calculateDistance( //calculate the distance from the photo location to user location
                  this.userLat,
                  this.userLong,
                  photo.latitude,
                  photo.longitude
                )}
              </h2>
            </div>

            

            <div>
              <button
                className="ourButton"
                onClick={this.props.handleViewClick}
              >
                View
              </button>
              <button
                className="ourButton"
                onClick={this.props.handleEditClick}
              >
                Edit
              </button>
            </div>
          </div>
        );
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
  userMapRender = () =>{
	  if(this.userLat != null && this.userLong != null){ //only return map with user location if we have coordinates available
	  return(
	  <div id="userContainer">
            <h5> Your Location </h5>
             <div id="map2" >
              <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                  lat: this.userLat,
                  lng: this.userLong
                }}
                center={{
                  lat: this.userLat,
                  lng: this.userLong
                }}
              >
                <Marker
                  name="You Are Here"
                  position={{ lat: this.userLat, lng: this.userLong }}
                  title="You Are Here"
                />
              </Map>
            </div>
            </div>
			);
	  }else{
		  return null;
	  }
  }
  userLocation = position => { //callback function for geolocation api, update the user latitude and longitude values
    this.userLat = position.coords.latitude;
    this.userLong = position.coords.longitude;
    console.log(this.userLat);
    console.log(this.userLong);
    this.forceUpdate(); //force the component to re-render to show the distance between locations, and the user location map
  };
  calculateDistance = (userLat, userLong, photoLat, photoLong) => { //calculate the distance between user's location and photo location
    //https://www.movable-type.co.uk/scripts/latlong.html
    if (this.userLat != null && this.userLong != null) { //only perform the calculation if we have user coordinates
      let R = 6371e3; // metres
      console.log(userLat);
      console.log(userLong);
      console.log(photoLat);
      console.log(photoLong);

      let uLatRadian = this.toRadians(userLat);
      let pLatRadian = this.toRadians(photoLat);
      let latDiff = this.toRadians(photoLat - userLat);
      let longDiff = this.toRadians(photoLong - userLong);

      let a =
        Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
        Math.cos(uLatRadian) *
          Math.cos(pLatRadian) *
          Math.sin(longDiff / 2) *
          Math.sin(longDiff / 2);
      let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      console.log((R * c) / 1000);
      return ((R * c) / 1000).toFixed(2) + "KM"; //convert the distance to kilometers, and only return up to 2 decimal places.
    } else {
      return "Allow Location Services to use this feature";
    }
  };
  toRadians(number) { //helper function to convert degrees to radians.
    return (number * Math.PI) / 180;
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAIfowdcLxU-l5zeUMaF54i_w5Xy3R_qic"
})(PhotoMap);
