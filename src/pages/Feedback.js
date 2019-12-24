import React, { Component } from "react";
import Slider from "react-slick";
import fd1 from '../images/fd1.jpg';
import fd2 from '../images/fd2.jpg';
import fd3 from '../images/fd3.jpg';
import fd4 from '../images/fd4.jpg';
import {Container, Row, Col} from 'reactstrap';
import './Style.css';


export default class Feedback extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <div>
                <h2 style={{textAlign:'center', color:"#006699", marginTop:40,}}>TESTIMONIALS</h2>
                <Slider {...settings}>
                    <div>
                       <div className="feeddata">
                            <p>Max Connect has played a great role to ensure that I am connected with all my valuable parents, students and staff members with only a swipe of my finger tip. It has amplified the communication between the school and the parents who are always updated about their wards.
I believe that Max Connect is efficacious as the application has a very simple user interface that everyone can use efficiently.</p>
                              
                             <img src={fd1} className="feedimg"/>
                              
                            <h3>sunil bikram sijapati</h3>
                            <h6>Founder Principal, Nagarjuna Academy , Lalitpur Nepal.</h6>
                       </div>
                    </div>
                    <div>
                        <div className="feeddata">
                            <p>First of all i would like to thankful to the team of Max Connect who have made my day to day task easy and on the go.. now i can manage my tasks in a very easy manner, and it saves my lots of time, and on the other hand, its very help full for the parents, it helps them to know the daily routine and activities of their child, by which they can help their child to achieve more, not only this the GPS system of Max Connect is very helpful for them, it keep them alert while pickup and drop off time by sitting their home.. its really good.</p>
                            <img src={fd2} className="feedimg" />
                            <h3>Dilip Saudan</h3>
                            <h6>Founder Principal, Jupiter School, Lalitpur Nepal.</h6>
                        </div>
                    </div>
                    <div>
                        <div className="feeddata">
                            <p>Extremely user friendly;Wonderful product,best customer service ever experienced – they listen to your needs and try to give you exactly what you want and they respond immediately; personal training for our school; help available by email and phone… I Love using Maxconnect. It is very easy to work with maxconnect. The customer service is OUTSTANDING!!!!! THANK YOU MAXCONNECT…..Their customer service is excellent.</p>
                            <img src={fd3} className="feedimg" />
                            <h3>Ganga Pd Khatiwoda</h3>
                            <h6>Ganga Pd Khatiwoda, Principal, New West Point, Beni , Nepal</h6>
                        </div>
                    </div> 
                    <div>
                        <div className="feeddata">
                            <p>It is a good system to manage a school records such as students data, examination, employees, library. Specially we can manage accounts in easy way. Other then accounting it is very good in searching , sorting & updating. The support team is very active in solving any problem quickly. In simple words you are simply awesome.</p>
                            <img src={fd4} className="feedimg" />
                            <h3>Janardan Dhakal</h3>
                            <h6>Janardan Dhakal, Principal,Om Shanti Academy ,Chitwan, Nepal</h6>
                        </div>
                    </div>                     
                </Slider>
            </div>
        );
    }
}