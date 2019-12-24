import React, { Component } from 'react';
// import data from '../data/MaxconnectErp.json';
import maxconnect from '../data/MaxconnectErp.json'; 
// const myData = data.maxconnecterp;
import { Container, Row, Col } from 'reactstrap';
import MyNavbar from './Navbar';
import './Style.css';
import Sidelist from './Sidelist.js';
import Footer from './Footer.js';
import Belowfooter from './Belowfooter.js';
import mcomm from '../images/mcom.gif';

const maxerp = maxconnect.maxconnecterp;

class AppFeature extends Component{      
   constructor(props){
       super(props);
       this.state ={
           data:'',
       }
   }
    

 render(){
     const title = this.props.location.state.AppFeature;
     const newId = this.props.match.params.id;
        return(            
         <div>
         <Container fluid="true" style={{padding:0,}}> 
         
         <MyNavbar />        
            <div className="appheaderfeature">                
            <h1>App Features</h1>
            </div> 
            <Row className="approw">
          <Col md="8" sm="12">      
           <div className="featdata">  
         {
            maxerp.map((data)=>(
              title === `${data.name}` && newId === `${data.id}`?   
                    <div>
                        <h4>{data.name}</h4>
                        <img className="appbbor" src={mcomm} />
                        <h6>{data.text}</h6>
                        <p>{data.other.map((others)=>(
                            <li>{others}</li>
                        ))}</p>
                        </div> : null
            ))
         }
        </div>
         </Col>
        <Col md="4" sm="12">
        <div className="sideli"> 
          <Sidelist/>
        </div>
         </Col>
         </Row>        
         </Container>
         <Footer/>
         <Belowfooter/>
         </div>
        );
    }
}

export default AppFeature;

