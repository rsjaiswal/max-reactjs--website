import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import Feedback from './Feedback';
import './Style.css';

export default class Contactformpage extends Component {
    render() {
        return (
            <div>
              <Container fluid="true">   
                                     
                  <Row>           
                      <Col md="6" className="contactpaa"><Feedback/></Col>          
                        <Col md="6"><iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d5892.730482223092!2d77.30795159533234!3d28.57461170275233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d28.575826799999998!2d77.3209443!4m5!1s0x390cfb359be6e34b%3A0x1331603578dd1371!2smax%20connect%20world!3m2!1d28.5742494!2d77.3099797!5e0!3m2!1sen!2sin!4v1575023932314!5m2!1sen!2sin" style={{ width:'100%', height:'500px', border:'0'}} frameborder="0" allowfullscreen=""></iframe></Col>
                  </Row>
              </Container>
                
            </div>
        )
    }
}
