import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { Container, Row, Col } from 'reactstrap';
import comm from '../images/mcomm.png';
import './Style.css';

const prama = {
    "particles": {
        "number": {
            "value": 900,
            "density": {
                "enable": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "speed": 4,
                "size_min": 0.9
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "random": true,
            "speed": 1,
            "direction": "top",
            "out_mode": "out"
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            }
        },
        "modes": {
            "bubble": {
                "distance": 50,
                "duration": 2,
                "size": 0,
                "opacity": 0
            },
            "repulse": {
                "distance": 400,
                "duration": 2
            }
        }
    }
}

class Frontpage extends Component {
    render() {
        return (
            <div className="particleBody">
                <Particles params={prama} className="particless" />
                <Row className="parbodyrow">
                    <Col md="6" className="parbodycol1"><img src={comm} className="commName" /></Col>
                    <Col md="6" className="parbodycol2">
                        <div className="data">
                            <h3>A Child Complete Security &amp; School Management System </h3>
                            <ul>
                                <li>Live Attendance Update</li>
                                 <li>Homework Update</li>
                                 <li>Exam Result Update</li>
                                 <li>Live School Bus Tracking</li>
                                 <li>CCTV Surveilance in Bus</li>
                                <li>Notice Board</li>
                                <li>Communication</li>
                            </ul>
                        </div>
                    </Col>
                </Row>     
            </div>
        );
    }
}


export default Frontpage;