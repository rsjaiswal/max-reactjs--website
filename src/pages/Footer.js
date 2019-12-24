import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from '../images/logo.png';
import './Style.css';

export default class Footer extends Component {
    render() {
        return (
            <div className="footerwidth">
               <Container>
                   <Row>
                   <Col md="3">
                       <h4>About Us</h4>
                       <img src={logo}/>
                            <p>Max Connect connects schools, parents, students and teachers and makes sure for easy communication, GPS tracking and safety of students. With the Max Connect mobile app, parents can updated with the school activities, attendance, notice, messages, assignments, syllabus, projects, school events and many – many more things with just only a touch on their smart phone. Yes it is … Isn’t it Interesting.</p>
                   </Col>
                        <Col md="3">
                            <h4>WORKING HOURS</h4>
                            <p>Monday 10AM - 6:30PM</p>

                            <p>Tuesday 10AM - 6:30PM</p>

                            <p>Wednesday 10AM - 6:30PM</p>

                            <p>Thursday 10AM - 6:30PM</p>

                            <p>Friday 10AM - 6:30PM</p>

                            <p>Saturday 10AM - 6:30PM (NEPAL CLOSE)</p>

                            <p>Sunday 10AM - 6:30PM (INDIA CLOSE)</p>

                        </Col>
                 
                   <Col md="3">
                       <h4>Contact Us</h4>
                            <p>Corporate Office - 4th Floor, Pioneer House, A Block, Sector 16, Noida, Uttar Pradesh - 201301, India</p>
                            <p>Regd. Office - 52 A, 303, Third Floor, Krishna Complex, IP Extension, Delhi, India</p>
                            <p>Cell Number: +91-90 1555 1666,</p>
                            <p>Cell Number: +91 98 91 32 7272</p>
     
                            <p>Nepal: 10 Jwagal, kupondol, Lalitpur, Kathmandu,</p>
                            <p>Cell Number: +977-985 111 2 885</p>
     <p>Cell Number: +977-9851 24 26 27</p>
     
     <p>USA: Bay Area Houston Texas,77058</p>
     <p>Cell Number: +1-832 775 2284</p>
     
     <p>Email:info@maxconnectworld.com</p>
                   </Col>
                 
                        <Col md="3">
                            <h4>Quick Links</h4>
                            <ul>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Features</li>
                                <li>Benefits</li>
                                <li>Contact Us</li>
                            </ul>
                        </Col>
                   </Row>
               </Container>
            </div>
        )
    }
}
