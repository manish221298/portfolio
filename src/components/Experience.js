import React from 'react';
import Navitem from "./Navitem"

function Experience(props) {
    return (
        <div>
            <div className="left">
                <Navitem />
            </div>
            <div className="right">
                <div style={{paddingTop: "5rem"}}  className="education_right">
                <h1>Experience :-</h1>
                <div className="graduation_div">
                    <b>Junior Software Engineer</b><br />
                    <b>Kochar Tech (Delhi)</b><br />
                    <b>Jun 2021 - Present</b><br />
                </div>

                <div className="graduation_div">
                    <b>Web Developer Trainee</b><br />
                    <b>Unilog Content Solution Pvt. Ltd.</b><br />
                    <b>April 2021 - jun 2021</b><br />
                </div>

                <div className="graduation_div">
                    <b>Full stack Developer Intern/ Trainee</b><br />
                    <b>DCT Academy, Bangalore</b><br />
                    <b>Feb 2020 - Aug 2020</b><br />
                </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;