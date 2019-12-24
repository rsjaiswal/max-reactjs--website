import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import mcomm from '../images/mcom.gif';


 class Leftimage extends Component {
    render() {
        return (
            <div className="mainleft">
            <Container>
                <Row>
                 <Col sm="6" className="leftcolumm">
                     <div className="leftdata">
                      <h2>Salient Features</h2>   
                      <h3>A full fledged ERP for school management which helps schools to update and help for better school management.</h3>
                      <ul>
                          <li>An ERP which is very easy to learn and Use</li>
                          <li>Easiest and fastest Implementation ERP</li>
                          <li>Live Support</li>
                          <li>Secure Data</li>
                          <li>GPS</li>
                          <li>CCTV</li>
                      </ul>
                     </div>
                 </Col>
                <Col sm="6" className="leftcolumm1"><img src={mcomm} className="leftimagee" /></Col>
                </Row>
            </Container>               
            </div>
        )
    }
}

export default Leftimage;
