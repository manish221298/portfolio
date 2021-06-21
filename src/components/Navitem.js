import React from 'react';
import { Link } from "react-router-dom";


function Navitem(props) {

    return (
        <div>
            <div>
                {
                    <ul>
                        <li style={{paddingTop: "5rem"}} className="navbar_li">
                        <Link className="navbar_link" to="/">Home</Link>
                        </li>
                        <li className="navbar_li">
                        <Link className="navbar_link"  to="/aboutus">Aboutus</Link>
                        </li>
                        <li className="navbar_li">
                        <Link className="navbar_link"  to="/education">Education</Link>
                        </li>
                        <li className="navbar_li">
                        <Link className="navbar_link"  to="/skills">Skills</Link>
                        </li>
                        <li className="navbar_li">
                        <Link className="navbar_link"  to="/experience">Experience</Link>
                        </li>
                        <li className="navbar_li">
                        <Link className="navbar_link"  to="/project">Project</Link>
                        </li>
                        <li className="navbar_li">
                        <Link className="navbar_link"  to="/contact">Contact</Link>
                        </li>
                    </ul>
                }
            </div>

        </div>
    );
}

export default Navitem;