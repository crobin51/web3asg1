import React from "react";
import './Home.css';
import { Link } from 'react-router-dom';

class About extends React.Component {
    render(){
        return (
 <div className="banner">
 <div >
 <h1>About Us</h1>
 <h3>COMP 4513 Assignment 1</h3>
 <h3> By Cryston Robin & Sam Osman</h3>

<div>
<table className = "table table-bordered table-dark" style={{marginTop : '5%'}}>
<thead>
<tr>
<th scope="col">Source Name</th>
<th scope="col">Link</th>
</tr>

</thead>
<tbody>
<tr><td>Bootstrap</td> <td>https://getbootstrap.com/docs/4.0/getting-started/download/</td> </tr>
<tr><td>Unsplash</td> <td>https://source.unsplash.com</td> </tr>
<tr><td>Font Awesome</td> <td>https://fontawesome.com/start</td> </tr>
</tbody>            
 </table>
</div> </div>
 </div>
 );
        
    }
}
export default About;