import React, { Component } from 'react';
import MyCard from '../component/MyCard';
import { Row, Col } from 'reactstrap';
import maxconnect from '../data/MaxconnectErp.json';
import { Link } from 'react-router-dom';
import './Style.css';

const maxerp = maxconnect.maxconnecterp;

class Sidelist extends Component {

    render() {
        return (
      
                <div className="cardMargin">
                    <Row>
                        {maxerp.map((maxerp) => (
                            <Col md="12" className="maxerpp">
                                <MyCard image={maxerp.image} alts="image file not supported" title={<Link to={{ pathname: `/AppFeature/${maxerp.id}`, state: { AppFeature: `${maxerp.name}` } }}>{maxerp.name}</Link>} />
                            </Col>))}
                    </Row>
                </div>
         

        );
    }
}

export default Sidelist;


