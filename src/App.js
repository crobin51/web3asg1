import React, { Component } from 'react';
import HeaderApp from './components/HeaderApp.js';
import PhotoThumb from './components/PhotoThumb.js';
import PhotoBrowser from './components/PhotoBrowser.js';
import Home from './components/Home.js';
import About from './components/About.js';

import * as cloneDeep from 'lodash/cloneDeep';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';


class App extends Component {
    constructor(props) {
 super(props);
 this.state = { photos: [],
                favs: []
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
 }
 catch (error) {
 console.error(error);
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
 photos={this.state.photos}
favors={this.state.favs}
 updatePhoto={this.updatePhoto}
 addPhotoToFavorites={this.addPhotoToFavorites} /> }
 />
     <Route path='/about' exact component={About} />
 </div>
    );
  }
}

export default App;
