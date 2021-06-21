import React from 'react';
import Navitem from "./Navitem"


function Skills(props) {

        const skill = ["JavaScript", "ReactJS", "NodeJS", "ExpressJS", "MongoDB", "HTML", "CSS", "Bootstrap"]

    return (
        <div>
            <div className="left">
                <Navitem />
            </div>
            <div className="right">
            <div style={{paddingTop: "5rem"}}  className="skills_right">
                <h1>My Tech Stack :-</h1>
                        {
                            skill.map(ele => {
                                return (
                                    <p className="skills_p">{ele}</p>
                                )
                            })
                        }
            </div>
            </div>
        </div>
    );
}

export default Skills;