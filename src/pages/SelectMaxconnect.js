import React, { Component } from 'react';
import MyCard from '../component/MyCard';
import { Row, Col } from 'reactstrap';
import maxconnect from '../data/MaxconnectErp.json'; 
import { Link } from 'react-router-dom';
import './Style.css';

const maxerp = maxconnect.maxconnecterp; 

class SelectMaxconnect extends Component{
  
    render(){
     return(
          <div className="cardbackground">
              <h1 style={{textAlign:'center',}}>Why Maxconnect Erp ?</h1> 
             <div className="paraaa">
                 <p>Our software from Max Connect is a comprehensive information system and leaves no thread open. We listen and respond to ever-growing customer needs with a smile – The Mantra to become most acceptable and comprehensive school management software solution provider.
 
</p></div>                    
                      <div className="cardMargin">
                          <Row>
                    { maxerp.map((maxerp) => (                                          
                        <Col md="4" className="maxerpp"> 
                            <MyCard image={maxerp.image} alts="image file not supported"  title={<Link to={{ pathname: `/AppFeature/${maxerp.id}`, state: { AppFeature: `${maxerp.name}` } }}>{maxerp.name}</Link>} />                            
                                </Col> ))}          
                          </Row>
                      </div>
         </div>

     );
 }
}

export default SelectMaxconnect;


