import React from "react";
import FavoriteItem from "./FavoriteItem.js";
import * as JSZip from "jszip";
import { saveAs } from "file-saver";
import * as JSZipUtils from "jszip-utils";
class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addClass: false };
  }

  render() {
    let favClass = ["favInfo"];
      let def = `Press ❤ to Save Your Favourite Photos!`;
    if (this.props.favs.length > 0) { //if the favourites array is populated
      def = "My Favorites";
      favClass.push("visible");
    }
    return (
      <article className="favorites">
        <p className="" id={favClass.join(" ")}>
          {def}{" "}
        </p>
        <div id="pList">
          {this.props.favs.map(p => (
            <FavoriteItem
              photo={p}
              key={this.props.id}
              removeFavs={this.props.removeFavs}
            />
          ))}
        </div>
		{this.downloadButtonRender()}
      </article>
    );
  }
  
  downloadButtonRender = () => { //return a download button if favourites array is populated
	  if(!this.props.favs.length <= 0){
		  return(
		  <button className='ourButton' onClick={this.download}><i className="fas fa-download"></i> Download</button>
		  );
	  }else{
		  return null;
	  }
  }

  download = () => {
    //https://stackoverflow.com/questions/27746982/adding-images-from-url-to-a-zip-file-using-jszip
    //https://stuk.github.io/jszip/
    //https://stackoverflow.com/questions/29670703/how-to-use-cors-anywhere-to-reverse-proxy-and-add-cors-headers
    //https://stuk.github.io/jszip/documentation/examples/downloader.html
    console.log("download function");
    if (!this.props.favs.length <= 0) {
      let zip = new JSZip();
      this.getImageUrls(zip); 
    }
  };

  getImageBytes(url) {
    return new Promise(function(resolve, reject) {
      JSZipUtils.getBinaryContent(url, (err, data) => { //get the binary data of the image from the url provided.
        if (err) {
          reject(err);
        } else {
          console.log("img bytes success");
          console.log(data);
          resolve(data); //successfully return the binary data
        }
      });
    });
  }

  getImageUrls(zip) {
    this.props.favs.forEach(p => {
      console.log(p.path);
	  //https://cors-anywhere.herokuapp.com is a proxy that lets us bypass CORS restrictions.
	  //this is not the best practice, but for the purpose of this assignment and resources available, we feel this is the best work-around.
      let imgUrl = `https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/funwebdev-3rd-travel/large/${
        p.path
      }`;
	  let imgData = this.getImageBytes(imgUrl);
	  imgData.catch(function(error){ //if the promise is rejected.
		  alert(`Your download has failed for ${p.title}, sorry!`);
		  
	  });
	  console.log(imgData);
      zip.file(p.title + ".jpg", imgData, { binary: true }); //get the binary data of each image, and add it to the zip file
    });
    zip.generateAsync({ type: "blob" }).then(function(content) { //when the zip file is finished constructing, it will automatically download.
      console.log("download here");
      saveAs(content, "favouriteImages.zip"); //this is the function that actually starts the download.
    });
  }
}
export default Favorites;
