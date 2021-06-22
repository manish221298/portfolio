import React from 'react';
import Navitem from "./Navitem"
import SocialMedia from "./SocialMedia"


function Contact(props) {
    return (
        <div>
            <div className="left">
                <Navitem />
            </div>
            <div className="right">
                <div style={{paddingTop: "5rem"}}  className="education_right">
                <h1 className="contact_h1">Connect With Me :-</h1>
                <b className="contact_b">Email : iammnsh01@gmail.com</b><br /><br />
                <b className="contact_b">Mobile : 9128400410</b>

                <div className="socialmedia">
                    <SocialMedia />
                    
                </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;