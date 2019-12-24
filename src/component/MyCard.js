import React from 'react';
import './Style.css';
import { Row, Col } from 'reactstrap';
const MyCard = (props)=>{
    return(
        <div>
                <div className="card">
                <Row>
                    <Col md="2" style={{width:'20%', float:'left',}}><img src={require(`../images/maxicons/${props.image}.png`)} alt={props.alts} /></Col>
                    <Col md="10" style={{ width: '79%', float: 'right', }}><h5 style={{marginTop:10}}>{props.title}</h5></Col>
                </Row>
                </div>
        </div>
    );
}

export default MyCard;