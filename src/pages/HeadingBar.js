import React from 'react';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import mobile from '../images/mobile_ring.png';
import './Style.css';


const HeadingBar = () =>{
    return(
        <div className="headingBar">
          <Container>
                <Row>
                    <Col md="3" sm="6"><img src={mobile} alt="" className="mbileScreen"/></Col>
                    <Col md="6" sm="6">
                      <div>
                           <h4 className="readymade">Readymade Mobile App For Schools</h4>
                     </div>  
                    </Col>
                    <Col md="3" sm="12">
                        <div style={{ marginTop:'10px', zIndex:1,}}>
                            <Button outline size='lg' color="warning">Click Me</Button>{' '}
                        </div>
                    </Col>
                </Row>
          </Container>
        </div>
    );
}

export default HeadingBar;