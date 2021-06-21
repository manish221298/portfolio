import React from 'react';
import Navitem from "./Navitem"

function Project(props) {
    return (
        <div>
            <div className="left">
                <Navitem />
            </div>
            <div className="right">
                <h1>project</h1>
            </div>
        </div>
    );
}

export default Project;