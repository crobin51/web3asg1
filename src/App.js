import React, { Component } from 'react';
import HeaderApp from './components/HeaderApp.js';
import PhotoThumb from './components/PhotoThumb.js';
import PhotoBrowser from './components/PhotoBrowser.js';
import Home from './components/Home.js';
import About from './components/About.js';
import 'bootstrap/dist/css/bootstrap.css';
import * as cloneDeep from 'lodash/cloneDeep';
import logo from './logo.svg';
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
               ogPhotos:[],
               flag: false
              };			  
}
filterBy=(filterName, type)=>{
    let tempPhotos = cloneDeep(this.state.ogPhotos);
     let newPhotos = [];
    const regex = "^" + filterName.toUpperCase()
    
    if(type ==="City"){
    newPhotos = tempPhotos.filter(t=>t.city.toUpperCase().match(regex));    
    }else{
        newPhotos = tempPhotos.filter(t=>t.country.toUpperCase().match(regex));    
    }
   
    if(newPhotos.length >0){
        this.setState({photos: newPhotos});
    }
   
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
    var location = temp.indexOf(id);
    temp.splice(location, 1);
    this.setState({favs:temp});
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
filter={this.filterBy}
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
