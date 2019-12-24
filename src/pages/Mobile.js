import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Mmobile from '../images/mobile.gif';
import Result from '../images/icons/result.png';
import Homework from '../images/icons/homework.png';
import School from '../images/icons/school.png';
import Myprofile from '../images/icons/myprofile.png';
import Calendar from '../images/icons/calendar.png';
import Syllabus from '../images/icons/syllabus.png';
import Timetable from '../images/icons/timetable.png';
import Attendance from '../images/icons/attendance.png';
import Fees from '../images/icons/fees.png';
import Message from '../images/icons/message.png';
import Classteacher from '../images/icons/classteacher.png';
import Notifications from '../images/icons/notification.png';
import Busroute from '../images/icons/busroute.png';
import Noticeboard from '../images/icons/noticeboard.png';
import Addchild from '../images/icons/addchild.jpg';
import Livetracking from '../images/icons/gps.png';
import './Style.css';


class Mobile extends Component{

  render(){  
      return(
        <div className="mobilebannerpat">
          <Container>
            <div className="erpschool">
              <div className="borderbt">
                <h2>OUR APP FEATURES</h2>
              </div>
              <div className="paraa">
                <p>We believe that the school management, teachers, students and parents should get relevant and important information on a single screen.  Every module in our school management software has user-friendly Dashboard with Graphical Representations, afterall “Brevity is the Soul of Wit”

</p>  
              </div>
            </div>
            <Row>
            <Col sm="4">
              <div className="mobilelistname">
                <div className="mobilecontent">
                  <span className="mobilenumber"><img src={School} className="micons" alt="school" /></span>
                  <span className="mobiledata"> School</span>
                </div>
                  <div className="mobilecontent">
                    <span className="mobilenumber"><img src={Myprofile} className="micons" alt="myprofile" /></span>
                    <span className="mobiledata"> My Profile</span>
                  </div>
                  <div className="mobilecontent">
                    <span className="mobilenumber"><img src={Homework} className="micons" alt="homework"/></span>
                    <span className="mobiledata"> Homework</span>
                  </div>
                  <div className="mobilecontent">
                    <span className="mobilenumber"><img src={Calendar} className="micons" alt="calendar"/></span>
                    <span className="mobiledata"> My Calendar</span>
                  </div>
                  <div className="mobilecontent">
                    <span className="mobilenumber"><img src={Syllabus} className="micons" alt="syllabus"/></span>
                    <span className="mobiledata"> Syllabus</span>
                  </div>
                  <div className="mobilecontent">
                    <span className="mobilenumber"><img src={Timetable} className="micons" alt="timetable"/></span>
                    <span className="mobiledata"> Time Table</span>
                  </div>
                  <div className="mobilecontent">
                    <span className="mobilenumber"><img src={Attendance} className="micons" alt="attendance" /></span>
                    <span className="mobiledata"> Attendance</span>
                  </div>
                  <div className="mobilecontent">
                    <span className="mobilenumber"><img src={Result} className="micons" alt="result"/></span>
                    <span className="mobiledata"> Result</span>
                  </div>
              </div>
            </Col>
            <Col sm="4">
              <div><img src={Mmobile} alt="mobile animation" className="mobileName"/></div>
              </Col>
              <Col sm="4"><div className="mobilelistname">
                <div className="mobilecontent">
                  <span className="mobilenumber"><img src={Fees} className="micons" alt="fees"/></span>
                  <span className="mobiledata"> Fees</span>
                </div>
                <div className="mobilecontent">
                  <span className="mobilenumber"><img src={Message} className="micons" alt="message"/></span>
                  <span className="mobiledata"> Message</span>
                </div>
                <div className="mobilecontent">
                  <span className="mobilenumber"><img src={Classteacher} className="micons" alt="classteacher"/></span>
                  <span className="mobiledata"> Class Teacher</span>
                </div>
                <div className="mobilecontent">
                  <span className="mobilenumber"><img src={Notifications} className="micons" alt="notifications" /></span>
                  <span className="mobiledata"> Notification</span>
                </div>
                <div className="mobilecontent">
                  <span className="mobilenumber"><img src={Busroute} className="micons" alt="busroute" /></span>
                  <span className="mobiledata"> Bus route</span>
                </div>
                <div className="mobilecontent">
                  <span className="mobilenumber"><img src={Noticeboard} className="micons" alt="noticeboard" /></span>
                  <span className="mobiledata"> Notice Board</span>
                </div>
                <div className="mobilecontent">
                  <span className="mobilenumber"><img src={Livetracking} className="micons" alt="livetracking" /></span>
                  <span className="mobiledata"> Live tracking</span>
                </div>
                <div className="mobilecontent">
                  <span className="mobilenumber"><img src={Addchild} className="micons" alt="addchild" /></span>
                  <span className="mobiledata"> Add Child</span>
                </div>
              </div></Col>
            </Row>
          </Container>
        </div>
      );
  }
}


export default Mobile;