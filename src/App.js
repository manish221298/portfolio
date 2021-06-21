import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home"
import Aboutus from "./components/Aboutus"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Project from "./components/Project"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          {
            
          }
        </div>

        <Route path="/" component={Home} exact={true} />
        <Route path="/aboutus" component={Aboutus} exact={true} />
        <Route path="/education" component={Education} exact={true} />
        <Route path="/skills" component={Skills} exact={true} />
        <Route path="/experience" component={Experience} exact={true} />
        <Route path="/project" component={Project} exact={true} />
        <Route path="/contact" component={Contact} exact={true} />
      </BrowserRouter>
    </div>
  );
}

export default App;
