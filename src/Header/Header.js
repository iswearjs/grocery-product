import React from 'react';
import { Navbar, Nav, FormControl, InputGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import LoginPage from '../LoginAndSignup/LoginPage';
import SignupPage from '../LoginAndSignup/SingupPage';
import { useSelector } from "react-redux";
import { BsFillBagFill } from "react-icons/bs";

const Header = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalloginShow, setModalloginShow] = React.useState(false);

    const { totalQuantities } = useSelector(state => state.CartReducer)
    return (
        <header className="hinfo">
            <Navbar bg="light" expand="lg">
                <div className="container">
                    <div className="row" style={{ 'width': '1200px', 'height': '100px' }}>
                        {/* START */}
                        <div className="col-md-2">
                            <Nav className="justify-content-start">
                                <Navbar.Brand>
                                    <span className="reverse-word" >&#8477;</span><span className="reverse-word-one">&#65;&#84;&#73;&#79;&#78;&#8455;&#66;&#79;&#88;</span>
                                </Navbar.Brand>
                            </Nav>
                        </div>
                        {/* END */}
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        {/* START */}
                        <div className="col-md-6">
                            <Nav className="justify-content-center">
                                <InputGroup className="">
                                    <FormControl size="sm"
                                        placeholder="Search for your favorities in orders..."
                                        aria-label="Search for your favorities in orders..."
                                        aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append className="mb-4">
                                        <FontAwesomeIcon icon={faSearch} className="fas fa-search" />
                                    </InputGroup.Append>
                                </InputGroup>
                            </Nav>
                        </div>
                        {/* END */}
                        {/* START */}
                        <div className="col-md-4">
                            <Nav className="justify-content-center">
                                <Nav.Item>
                                    <Nav.Link href="/">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                        <span>491001</span><span>,</span><span>Durg</span>
                                        {/* <FontAwesomeIcon icon={faAngleDown} /> */}
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link onClick={() => setModalloginShow(true)} title="Account">
                                        <span>Login</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <LoginPage
                                    show={modalloginShow}
                                    onHide={() => setModalloginShow(false)}
                                />
                                <Nav.Item>
                                    <Nav.Link eventKey="disabled" disabled><span>&#10073;</span></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link onClick={() => setModalShow(true)} title="Account">
                                        <span>Singup</span>
                                    </Nav.Link>
                                    {/* </Nav.Link> */}
                                </Nav.Item>
                                <SignupPage
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                />
                                {/* <Link to="/cart"> */}
                                <Nav.Item>
                                    <Nav.Link>
                                        {/* <FontAwesomeIcon icon={faShoppingCart} /> */}
                                        <Link to="/cart" title="Personal Cart">
                                            <BsFillBagFill className="cart-icon" />
                                            <span>{totalQuantities}</span>
                                        </Link>
                                    </Nav.Link>
                                </Nav.Item>
                                {/* </Link> */}
                            </Nav>
                        </div>
                        {/* END */}
                    </div>
                </div>
            </Navbar>
        </header>
    );
}

export default Header;