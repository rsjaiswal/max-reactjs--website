import React, { Component } from 'react';
import MyNavbar from './Navbar';
// import FirstScreen from './FirstScreen';
import HeadingBar from './HeadingBar';
import MyVideo from './MyVideo';
import SelectMaxconnect from './SelectMaxconnect';
// import FetchData from './FetchData';
import Mobile from './Mobile';
import Frontpage from './Frontpage';
import Leftimage from './Leftimage';
import Rightimage from './Rightimage';
import Galleryfront from './Galleryfront';
import Footer from './Footer';
import Belowfooter from './Belowfooter';
import Contactformpage from './Contactformpage';

class Home extends Component{
    render(){
          return(    
           <React.Fragment>
                  <MyNavbar />
                  <Frontpage/>
                  <HeadingBar />
                  <MyVideo />
                  <Leftimage/>
                  <Mobile/>
                  <Rightimage/>
                  <SelectMaxconnect /> 
                  <Galleryfront/> 
                   <Contactformpage/>
                  <Footer/>
                  <Belowfooter/>  
           </React.Fragment>
        );
    }
}

export default Home;