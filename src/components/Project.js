import React from 'react';
import Navitem from "./Navitem"

function Project(props) {
    return (
        <div>
            <div className="left">
                <Navitem />
            </div>
            <div className="right">
                <div style={{paddingTop: "5rem"}}  className="education_right">
                <h1>Live Project :-</h1>
                <div className="scroll">
                    <div className="graduation_div">
                        <b>Career Finder (Clone Of Internshala, Using MERN-STACK)</b><br />
                        <b>Role Based Authentication (e.g- for user and admin seperate)</b> <br />

                        <b>Live Link: </b>
                        <a href="https://manishcareer-finder.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <button>
                        <strong>CAREER FINDER APP</strong>
                        </button>
                        </a><br />

                        <b>Github Link: </b>
                        <a href="https://github.com/manish221298/Career-Finder" target="_blank" rel="noopener noreferrer">
                        <button>
                        <strong>CAREER FINDER APP</strong>
                        </button>
                        </a><br />

                        <b>02 Sep 2020 - 24 Sep 2020 (Major Project)</b><br />
                        
                    </div>

                    <div className="graduation_div">
                        <b>Ticket Master (Using ReactJS-Redux and Rest-API)</b><br />
                        <b>Simple Authentication </b> <br />

                        <b>Github Link: </b>
                        <a href="https://github.com/manish221298/ticket-master" target="_blank" rel="noopener noreferrer">
                        <button>
                        <strong>TICKET MASTER</strong>
                        </button>
                        </a><br />

                        <b>May 2020 - May 2020 (Major Project)</b><br />
                    </div>

                    <div className="graduation_div">
                        <b>Time Velocity Calculator (Using ReactJS-Redux)</b><br />

                        <b>Live Link: </b>
                        <a href="https://manish-time-velocity-calculator.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <button>
                        <strong>TIME VELOCITY CALCULATOR</strong>
                        </button>
                        </a><br />

                        <b>Github Link: </b>
                        <a href="https://github.com/manish221298/time_velocity_calculator" target="_blank" rel="noopener noreferrer">
                        <button>
                        <strong>TIME VELOCITY CALCULATOR</strong>
                        </button>
                        </a><br />

                        <b>03 Jan 2021 - 03 Jan 2020 (Minor Project)</b><br />
                    </div>

                    <div className="graduation_div">
                        <b>PRODUCT FILTER APP (Using ReactJS-Redux)</b><br />

                        <b>Live Link: </b>
                        <a href="https://manish-productlistfilter-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <button>
                        <strong>PRODUCT FILTER APP</strong>
                        </button>
                        </a><br />

                        <b>Github Link: </b>
                        <a href="https://github.com/manish221298/productlist_filter" target="_blank" rel="noopener noreferrer">
                        <button>
                        <strong>PRODUCT FILTER APP</strong>
                        </button>
                        </a><br />

                        <b>05 Mar 2021 - 06 Mar 2020 (Minor Project)</b><br />
                    </div>

                    <div className="graduation_div">
                        <b>DYNAMIC FORM (Using ReactJS)</b><br />

                        <b>Live Link: </b>
                        <a href="https://manish-staticform.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <button>
                        <strong>DYNAMIC FORM</strong>
                        </button>
                        </a><br />

                        <b>Github Link: </b>
                        <a href="https://github.com/manish221298/digiapt_assignment" target="_blank" rel="noopener noreferrer">
                        <button>
                        <strong>DYNAMIC FORM</strong>
                        </button>
                        </a><br />

                        <b>17 Oct 2020 - 17 Oct 2020</b><br />
                    </div>

                    <div className="graduation_div">
                        <b>PORTFOLIO PROJECT (Using ReactJS)</b><br />

                        <b>Live Link: </b>
                        <a href="https://manish-portfolio-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <button>
                        <strong>PORTFOLIO PROJECT</strong>
                        </button>
                        </a><br />

                        <b>Github Link: </b>
                        <a href="https://github.com/manish221298/portfolio" target="_blank" rel="noopener noreferrer">
                        <button>
                        <strong>PORTFOLIO PROJECT</strong>
                        </button>
                        </a><br />

                        <b>21 Jun 2021 - 22 Jun 2021</b><br />
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Project;