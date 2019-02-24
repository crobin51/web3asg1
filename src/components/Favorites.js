import React from "react";
import FavoriteItem from './FavoriteItem.js';
import * as JSZip from 'jszip';
import {saveAs} from 'file-saver';
import * as JSZipUtils from 'jszip-utils';
class Favorites extends React.Component {
    constructor(props){
        super(props);
        this.state = {addClass: false};
        
    }
    
 render() {
     let favClass = ["favInfo"];
     let download = "";
     let iconClass = ["fa fa-download"];
     let def = `Press ❤ to Save Your Favourite Photos!`;
    if(this.props.favs.length>0){
     def = "My Favorites";
      favClass.push('visible');  
        download = ` Download `;
    }
 return (
    
<article className="favorites">
     
 <p className="" id={favClass.join(' ')}>{def} </p>
<div id="pList">
 { this.props.favs.map( (p) =>
 <FavoriteItem  photo={p} key={this.props.id} removeFavs={this.props.removeFavs} /> )} 
</div>
<p  id="download" dangerouslySetInnerHTML={{__html: download}}onClick={this.download}></p>
 </article>
 );
 }

download = () => {
	//https://stackoverflow.com/questions/27746982/adding-images-from-url-to-a-zip-file-using-jszip
	//https://stuk.github.io/jszip/
	//https://stackoverflow.com/questions/29670703/how-to-use-cors-anywhere-to-reverse-proxy-and-add-cors-headers
	//https://stuk.github.io/jszip/documentation/examples/downloader.html
	console.log('download function');
	if(!this.props.favs.length <= 0){
		let zip = new JSZip();
		this.getImageUrls(zip);
		}
	}
	
getImageBytes(url){
	return new Promise(function(resolve, reject){
						JSZipUtils.getBinaryContent(url, (err, data) => {
			if(err){
				reject(err)
				}else{
					console.log("img bytes success");
					console.log(data);
					resolve(data);
				}
			});
});
}
 
 getImageUrls(zip){
	this.props.favs.forEach( (p) => {
			console.log(p.path);
			let imgUrl = `https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/funwebdev-3rd-travel/large/${p.path}`;
			zip.file(p.title+".jpg", this.getImageBytes(imgUrl), {binary:true});
			});
	zip.generateAsync({type:"blob"}).then(function(content){
		console.log("download here");
		saveAs(content, "favouriteImages.zip");
			
		});
}
} 
export default Favorites