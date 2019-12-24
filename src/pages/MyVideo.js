import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './Style.css';
import { Container, Row, Col } from 'reactstrap';


class MyVideo extends Component{
    render(){
        const opts = {
            width:'100%',
            height:'280px',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0
            }
        };
        const optss = {
            width: '100%',
            height: '280px',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0
            }
        };
        //  const stylename ={
        //      width:'200px',
        //  }
     
      
    return (
        <div className="Myvideo">
            <Container>
                <div className="erpschool">
                 <div className="borderbt">   
                <h2>MAXCONNECT ERP FOR SCHOOL</h2>
                </div>
                </div>
                <Row>
                    <Col lg="6" sm="12">
                        <div className="youtubeName">
                            <YouTube
                                videoId="o8OKppzpAss"
                                opts={opts}
                                onReady={this._onReady}
                                className="videoBorder"
                            />
                            <div style={{ textAlign: 'center', fontWeight: 'bold', color:'#455a64'}}>A Maxconnect Explainer Video</div>  
                        </div>
                    </Col>
                    <Col md="6" sm="12">
                        <div className="youtubeName1">
                            <YouTube
                                videoId="4NuxupprctY"
                                opts={optss}
                                onReady={this._onReady}
                                className="videoBorder1"
                            />
                            <div style={{ textAlign: 'center', fontWeight: 'bold', color: '#455a64' }}>Introducing Maxconnect Globally</div> 
                        </div>
                    </Col>  
                </Row>
              
            </Container>
        </div>
    );
}
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

   
}

export default MyVideo;