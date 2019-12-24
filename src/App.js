import React from "react";
import { 
  Switch,
  Route,  
} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Error from './pages/Error';
import AppFeature from './pages/AppFeature';
// import Frontpage from './pages/Frontpage';


function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />  
        <Route exact path="/about" component={AboutUs} />  
        <Route exact path="/contact" component={ContactUs} />  
        <Route exact path="/AppFeature/:id" component={AppFeature} />  
        <Route component={Error}/>
      </Switch>      
    </React.Fragment>
    );
}

export default App;
