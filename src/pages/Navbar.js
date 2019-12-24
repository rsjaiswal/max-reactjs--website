import React from 'react';
import './Style.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    // UncontrolledDropdown,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem,
    Container,
    // Row, Col,
} from 'reactstrap';
import logo from '../images/logo.png';

export default class MyNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className="Mynab">
                <Navbar color="light" light expand="md">
                    <Container>
                        <NavbarBrand href="/"><img src={logo} className="headerLogo" alt="logo" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="#" style={{color:"#000"}}>Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" style={{ color: "#000" }}>About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" style={{ color: "#000" }}>Features</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" style={{ color: "#000" }}>Benefits</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" style={{ color: "#000" }}>Contact Us</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

