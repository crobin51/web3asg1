import React from "react";
import PhotoList from './PhotoList.js';
import EditPhotoDetails from './EditPhotoDetails.js';
import Favorites from './Favorites.js';
import Collapsible from 'react-collapsible';
import './PhotoBrowser.css';
import PhotoHandler from './PhotoHandler.js';

class PhotoBrowser extends React.Component {
    constructor(props) {
 super(props);

 this.state = { currentPhoto: 1, photoOption: "", filterName: "City"};
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
  changeFilterType = () =>{
      if(this.state.filterName ==="City"){
          this.setState({filterName: "Country"});
      }else{
       this.setState({filterName: "City"});   
      }
      
  }
  filter = (e) =>{
    
      this.props.filter(e.currentTarget.value, this.state.filterName);
      
  }
updateCurrent = (id) =>{
      this.setState({currentPhoto: id});
}
  handleMap = () =>{
	  this.setState({photoOption:"map"});
  }
  handleEdit=() =>{
	  this.setState({photoOption:"editPhoto"});
  }
  handleView=()=>{
	  this.setState({photoOption:"view"});

  }
 render() {
    
     
     
 return (
     <div className="photoBrowser">
     <Collapsible  trigger={<div className="favorites"> Favorites  <i className="fa fa-angle-double-down" aria-hidden="true"></i> </div>}>
	 <Favorites favs={this.props.favors} removeFavs={this.removeFavs} />
     </Collapsible>
    
 <section id="test" className="row">
     <div id="FilterBy" className="col-7">
     <p className="h2">Filter By: </p>
		<div className="input-group mb-3">
			<div className="input-group-prepend">
				<span className="input-group-text">{this.state.filterName}</span>
					<div className="input-group-text">
						<input type="checkbox" onChange={this.changeFilterType}  aria-label="Checkbox for following text input"/>
					</div>
			</div>
			<input type="text" className="form-control" onChange={this.filter} />
		</div>
		<div id="photoList" className="col-7"> 
 <PhotoList photos={this.props.photos} 
     showImageDetails={this.showImageDetails} addToFavs={this.addToFavs} handleMap={this.handleMap} handleEdit={this.handleEdit} handleView={this.handleView}/> 
		</div>     
	 </div>
	 <div className="col-5" >
 <PhotoHandler photos={this.props.photos} currentPhoto={this.state.currentPhoto} updatePhoto={this.props.updatePhoto} photoOption={this.state.photoOption}/>
     </div>
	 </section>
     </div>

 );
 }
}

export default PhotoBrowser;