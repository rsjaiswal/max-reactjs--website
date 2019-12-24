import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import mcomm from '../images/notification.png';


class Rightimage extends Component {
    render() {
        return (
             <div className="mainleft">
            <Container>
                <Row>
                 <Col sm="6" className="leftcolumm">
                     <div className="leftdata">
                      <h2>School Services</h2>   
                      <h3>School can send Live attendance, any Notice, Due Payments Notification to the parents directly at anytime.</h3>
                      <ul>
                          <li>Notification</li>
                          <li>Homework Update</li>
                          <li>Exam Result Update</li>
                          <li>Live School Bus Tracking</li>
                          <li>Notice Board</li>
                          <li>Other Communication</li>
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

export default Rightimage;