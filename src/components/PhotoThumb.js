import React from "react";
class PhotoThumb extends React.Component {
     constructor(props){
        super(props);
        this.state = {addClass: false,
                      addEffect: false,
                    view: false};
        
    }
    handleViewClick = () => {
        this.setState({view:true});
 this.props.showImageDetails(this.props.photo.id);
}
     addToFavoriteClick = () => {
 this.props.addToFavs(this.props.photo.id);
}
     
removePhoto = () =>{
    this.setState({addClass: !this.state.addClass});
       setTimeout(()=>{
           this.props.removePhoto(this.props.photo.id);
           this.setState({addEffect: false});
       },1200);
    
    }
handleMapClick = () =>{
	this.props.handleMap();
}
handleEditClick = () =>{
	this.props.handleEdit();
}
 render() {
     let photoClass = ["photoBox"];
     
     if(this.state.view){
         photoClass.push('elementToFadeInAndOut');  
     }
     
     if(this.state.addEffect){
          photoClass.push('hidden');
     }
     
     if(this.props.currentPhoto != this.props.photo.id && photoClass.length > 1){
           photoClass.splice(1,1); 
       }else if(this.props.currentPhoto === this.props.photo.id){
          photoClass.push('elementToFadeInAndOut');   
       }
     
  
 const imgURL = `https://storage.googleapis.com/funwebdev-3rd-travel/square-medium/${this.props.photo.path}`;
 return (
 <div className={photoClass.join(' ')} onClick={ this.handleViewClick } >
 <figure>
 <img src={imgURL} className="photoThumb"
 title={this.props.photo.title}
 alt={this.props.photo.title} />
 <p onClick={this.removePhoto.bind(this)}>{this.state.addClass} <i className="fas fa-window-close deletePhoto" ></i> </p>
 </figure>
 <div>
 <h3>{this.props.photo.title}</h3>
 <p>{this.props.photo.city},
 {this.props.photo.country}</p>

 <button className="ourButton" onClick={ this.handleViewClick }>View</button> 
    <button className="ourButton" onClick={ this.addToFavoriteClick }>❤</button>
	<button className="ourButton" onClick={this.handleMapClick}>Map</button>
	<button className="ourButton" onClick={this.handleEditClick}>Edit</button>
 </div>
 </div>
 );
}
}
export default PhotoThumb;