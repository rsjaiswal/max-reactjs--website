import React from 'react';
import './Style.css';
import fiage from '../images/first_image.png';

const FirstScreen =()=>{
    return(
        <div>
            <img src={fiage} alt="first" style={{width:'100%', padding:'0px', maxHeight:'700px',}}/>
        </div>
    );
}

export default FirstScreen;