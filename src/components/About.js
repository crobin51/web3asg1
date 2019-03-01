//This componenet contains the information about the application. All of our sources are stored here. 

import React from "react";
import "./Home.css";

class About extends React.Component {
  render() {
    return (
      <div className="banner">
        <div>
          <h1>About Us</h1>
          <h3>COMP 4513 Assignment 1</h3>
          <h3> By Cryston Robin & Sam Osman</h3>

			<p>A photo gallery application built using React.js</p>
          <table
            className="table table-bordered table-dark"
            style={{ marginTop: "5%" }}          >
            <div className="aboutUs">

        
              <thead>
                <tr>
                  <th>Source Name</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bootstrap</td>{" "}
                  <td>
                    https://getbootstrap.com/docs/4.0/getting-started/download/
                  </td>{" "}
                </tr>
                <tr>
                  <td>Unsplash</td> <td>https://source.unsplash.com</td>{" "}
                </tr>
                <tr>
                  <td>Font Awesome</td> <td>https://fontawesome.com/start</td>{" "}
                </tr>
                <tr>
                  <td>React Collapsible(Favourite Bar)</td>{" "}
                  <td>https://www.npmjs.com/package/react-collapsible</td>{" "}
                </tr>
                <tr>
                  <td>Adding and Removing Classes</td>{" "}
                  <td>https://codepen.io/JorgeGWD/pen/jYMVXY</td>{" "}
                </tr>
                <tr>
                  <td>JSZip Library Example</td>
                  <td>
                    https://stuk.github.io/jszip/documentation/examples/downloader.html
                  </td>
                </tr>
                <tr>
                  <td>CORS Example</td>
                  <td>
                    https://stackoverflow.com/questions/29670703/how-to-use-cors-anywhere-to-reverse-proxy-and-add-cors-headers
                  </td>
                </tr>
                <tr>
                  <td>Images with JSZip Example</td>
                  <td>
                    https://stackoverflow.com/questions/27746982/adding-images-from-url-to-a-zip-file-using-jszip
                  </td>
                </tr>
                <tr>
                  <td>LocalStorage Example</td>
                  <td>https://www.robinwieruch.de/local-storage-react/</td>
                </tr>
                <tr>
                  <td>React GoogleMaps Example</td>
                  <td>
                    https://scotch.io/tutorials/react-apps-with-the-google-maps-api-and-google-maps-react
                  </td>
                </tr>
                <tr>
                  <td>GeoLocation API Example</td>
                  <td>https://alligator.io/js/geolocation-api/</td>
                </tr>
                <tr>
                  <td>Lat/Long Distance Formula</td>
                  <td>https://www.movable-type.co.uk/scripts/latlong.html</td>
                </tr>
				<tr>
				<td>Monkey Logo</td>
				<td>https://i.pinimg.com/originals/32/f8/b7/32f8b76bccfb76f944e37ee6d007c40a.png</td>
				</tr>
				<tr>
				<td>Lodash library</td>
				<td>https://www.npmjs.com/package/lodash</td>
				</tr>
				<tr>
				<td>JSZip library</td>
				<td>https://www.npmjs.com/package/jszip</td>
				</tr>
				<tr>
				<td>JSZip-utils library</td>
				<td>https://www.npmjs.com/package/jszip-utils</td>
				</tr>
				<tr>
				<td>Google-Maps-React library</td>
				<td>https://www.npmjs.com/package/google-maps-react</td>
				</tr>
				<tr>
				<td>File-Saver library</td>
				<td>https://www.npmjs.com/package/file-saver</td>
				</tr>
				<tr>
				<td>React-Router library</td>
				<td>https://www.npmjs.com/package/react-router</td>
				</tr>
              </tbody>
            </div>
          </table>
        </div>{" "}
      </div>
    );
  }
}
export default About;
