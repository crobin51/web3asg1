import React, { Component } from 'react';
import HeaderApp from './components/HeaderApp.js';
import PhotoBrowser from './components/PhotoBrowser.js';
import Home from './components/Home.js';
import About from './components/About.js';
import 'bootstrap/dist/css/bootstrap.css';
import * as cloneDeep from 'lodash/cloneDeep';
import './App.css';
import { Route } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome'
import faFreeSolid from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(faFreeSolid)


class App extends Component {
    constructor(props) {
 super(props);
 this.state = { photos: [],
                favs: [],
               flag: false
              };			  
}

addPhotoToFavorites=(id) =>{
    
    let temp = this.state.favs;
    let check = true;
    temp.forEach((b) => {
        if(b.id === id){
            check = false;
        } 
    });
    if (check){
         temp.push(this.state.photos.find( p => p.id === id));
    }

    this.setState({favs: temp});
	localStorage.setItem('favourites', JSON.stringify(this.state.favs));
    console.log("added to local storage");
	console.log(localStorage.getItem('favourites'));
}
removePhotoFromFavorites = (id) =>{
     let temp = this.state.favs;
        var location = temp.findIndex(t=>t.id ===id);
    temp.splice(location, 1);
    this.setState({favs:temp});
    localStorage.setItem('favourites', JSON.stringify(this.state.favs));
    console.log("removed from local storage");
	console.log(localStorage.getItem('favourites'));
    
    
}
deletePhoto = (id) =>{
    let temp = this.state.photos;
    var location = temp.findIndex(t=>t.id ===id);
    
    temp.splice(location, 1);
       this.setState({photos:temp});
    
    let favsTemp = this.state.favs;
    let favlocal = favsTemp.findIndex(t=>t.id ===id);
    favsTemp.splice(favlocal, 1);
    this.setState({favs:favsTemp});
    localStorage.setItem('favourites', JSON.stringify(this.state.favs));
    console.log("removed from local storage");
	console.log(localStorage.getItem('favourites'));
    
}
updatePhoto = (id, photo) => {
 // Create deep clone of photo array from state.
 // We will use a lodash function for that task.
 const copyPhotos = cloneDeep(this.state.photos);
 // find photo to update in cloned array
 const photoToReplace = copyPhotos.find( p => p.id === id);
 // replace photo fields with edited values
 photoToReplace.title = photo.title;
 photoToReplace.city = photo.city;
 photoToReplace.country = photo.country;
 photoToReplace.description = photo.description;
 photoToReplace.latitude = photo.latitude;
 photoToReplace.longitude = photo.longitude;
 // update state
this.setState( {photos: copyPhotos } );
}
    
    async componentDidMount() {
		
 try {
 const url =
"http://randyconnolly.com/funwebdev/services/travel/images.php";
 const response = await fetch(url);
 const jsonData = await response.json();
 this.setState( {photos: jsonData } );
this.setState({ogPhotos: jsonData});
 }
 catch (error) {
 console.error(error);
 }
 
 //https://www.robinwieruch.de/local-storage-react/
 let localFavourites = localStorage.getItem('favourites');
if (localFavourites != null){
	this.setState({favs: JSON.parse(localFavourites)});
	console.log(JSON.parse(localFavourites));
}
}


  render() {
   
    return (
      <div>
       <HeaderApp />
        
 <Route path='/' exact component={Home} />
 <Route path='/home' exact component={Home} />
 <Route path='/browse' exact
 render={ (props) =>
 <PhotoBrowser 
deletePhoto={this.deletePhoto}
 photos={this.state.photos}
favors={this.state.favs}
 updatePhoto={this.updatePhoto}
 addPhotoToFavorites={this.addPhotoToFavorites}
      removePhotoFromFavorites={this.removePhotoFromFavorites}/> }
 />
     <Route path='/about' exact component={About} />
 </div>
    );
  }
}

export default App;
