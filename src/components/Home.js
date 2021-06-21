import React from 'react';
import {Link} from "react-router-dom"
import background from "../picture/background_image.jpg"

function Home(props) {
    return (
        <div>
            <div className="backgroundImage" style={{backgroundImage: `url(${background})`}}>
                <h1 className="home_heading">Hii Folks !!!</h1>
                <h3 className="home_heading3"> Welcome To My Portfolio</h3>
                <h2 className="home_heading2">Manish Kumar</h2>
                <h4 className="home_heading4">FULL-STACK DEVELOPER</h4>
                <p style={{textAlign: "center", paddingTop: "15rem"}}><Link className="aboutus" to="/aboutus">Aboutus</Link></p>
            </div>
        </div>
    );
}

export default Home;