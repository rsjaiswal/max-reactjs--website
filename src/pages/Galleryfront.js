import React, { Component } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from '../images/gallery/img1.jpeg';
import Img2 from '../images/gallery/img1a.jpeg';
import Img3 from '../images/gallery/img1b.jpeg';
import Img4 from '../images/gallery/img2.jpeg';
import Img5 from '../images/gallery/img3.jpeg';
import Img6 from '../images/gallery/img3a.png';
import Img7 from '../images/gallery/img4.jpeg';
import './Style.css';
import Slider from "react-slick";

class Galleryfront extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <div className="slickfull">
                <h2>Gallery</h2>
                <p>Install the App on Android / iPhone mobile or tablet via the official Play store / App Store</p>
                <div className="slickfullwidth">
            <Slider {...settings}>
                <div className="mainslickimage">
                    <img src={Img1} className="slickdimension"/>
                </div>
                <div className="mainslickimage">
                    <img src={Img2} className="slickdimension" />
                </div>
                <div className="mainslickimage">
                    <img src={Img3} className="slickdimension" />
                </div>
                <div className="mainslickimage">
                    <img src={Img4} className="slickdimension" />
                </div>
                <div className="mainslickimage">
                    <img src={Img5} className="slickdimension" />
                </div>
                <div className="mainslickimage">
                    <img src={Img6} className="slickdimension" />
                </div>
                <div className="mainslickimage">
                    <img src={Img7} className="slickdimension" />
                </div>
            </Slider>
            </div>
            </div>
        );
    }
}

export default Galleryfront;