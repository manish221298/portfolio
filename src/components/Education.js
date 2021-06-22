import React from 'react';
import Navitem from "./Navitem"

function Education() {
    return (
        <div>
            <div className="left">
                <Navitem />
            </div>
            <div className="right">
                <div style={{paddingTop: "5rem"}}  className="education_right">
                    <h1>Education :-</h1>
                    <div className="graduation_div">
                        <b>B-Tech (Computer Science Engineering)</b><br />
                        <b>Amritsar College Of Engineering And Technology</b><br />
                        <b>July 2016 - july 2020</b><br />
                        <b>6.3 CGPA</b>
                    </div>

                    <div className="graduation_div">
                        <b>12th (Mathematics)</b><br />
                        <b>B.S College (Samastipur)</b><br />
                        <b>April 2014 - April 2016</b><br />
                        <b>67%</b>
                    </div>

                    <div className="graduation_div">
                        <b>10th </b><br />
                        <b>Madhuban Public School (Muzaffarpur)</b><br />
                        <b>March 2013 - April 2014</b><br />
                        <b>10 CGPA</b>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;