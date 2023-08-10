import React, { useState } from 'react';
import Logo from '../../assets/images/easyshop.png';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Col, Container, Navbar, Row } from 'react-bootstrap';
import MegaMenuAll from '../home/MegaMenuAll.jsx';
import bar from '../../assets/images/566020.png';

const BaseURL = 'http://127.0.0.1:8000/api';

const NavMenuDesktop = () => {
    const [sideNavState, setSideNavState] = useState('sideNavClose');
    const [contentOverState, setContentOverState] = useState('ContentOverlayClose');
    const [search, setSearch] = useState('');
    const [searchRedirect, setsearchRedirect] = useState(false);

    const navigate = useNavigate();

    const menuBarClickHandler = () => {
        sideNavOpenClose();
    };

    const contentOverlayClickHandler = () => {
        sideNavOpenClose();
    };

    const sideNavOpenClose = () => {
        if (sideNavState === 'sideNavOpen') {
            setSideNavState('sideNavClose');
            setContentOverState('ContentOverlayClose');
        } else {
            setSideNavState('sideNavOpen');
            setContentOverState('ContentOverlayOpen');
        }
    };

    const SearchProduct = (event) => {
        let searchValue = event.target.value;
        setSearch(searchValue);
    };

    const SearchRedirect = () => {
        if (search.length >= 2) {
            setsearchRedirect(true);
        }
    };

    const SearchRedirectAnotherPage = () => {
        if (searchRedirect === true) {
            return navigate(`/productbysearch/${search}`);
        }
    };

    return (
        <div className="TopSectionDown">
            <Navbar fixed="top" className="navbar" bg="light">
                <Container fluid={true}>

                <Container fluid={true} className="fixed-top shadow-sm p-2 mb-0 bg-white">
                    <Row>
                        <Col lg={4} md={4} sm={12} xs={12}>
                            <img onClick={menuBarClickHandler} className="bar-custom" src={bar} alt="" />
                            <Link to="/">
                                {' '}
                                <img className="nav-logo" src={Logo} alt="Logo" />{' '}
                            </Link>
                        </Col>

                        <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                            <div className="input-group w-100">
                                <input onChange={SearchProduct} type="text" className="form-control" />
                                <Button onClick={SearchRedirect} type="button" className="btn site-btn">
                                    <i className="fa fa-search"> </i>
                                </Button>
                            </div>
                        </Col>

                        <Col className="p-1 mt-1 text-center" lg={4} md={4} sm={12} xs={12}>
                            <Link to="/notification" className="btn">
                                <i className="fa h4 fa-bell"></i>
                                <sup>
                                    <span className="badge text-white bg-danger">5</span>
                                </sup>
                            </Link>
                            <Link to="/favorite" className="btn">
                                <i className="fa h4 fa-heart"></i>
                                <sup>
                                    <span className="badge text-white bg-danger">5</span>
                                </sup>
                            </Link>

                            <a className="btn">
                                <i className="fa h4 fa-mobile-alt"></i>
                            </a>

                            <Link to="/login" className="h4 btn">
                                <i className="fa h4 fa-user"></i>LOGIN
                            </Link>
                            <Link to="/registration" className="h4 btn">
                                <i className="fa h4 fa-user"></i>Registration
                            </Link>

                            <Link to="/cart" className="h4 btn">
                                <img className="w-25 h-25" src="https://cdn-icons-png.flaticon.com/128/419/419910.png" alt="" />
                                <sup>
                                    <span className="badge text-white bg-danger">5</span>
                                </sup>
                            </Link>
                        </Col>
                    </Row>
                    {SearchRedirectAnotherPage()}
                </Container>
                <div className="">
                    <hr className="w-80" />
                    <div className="list-group"></div>
                    <div className={sideNavState}>
                        <MegaMenuAll />
                    </div>

                    <div className="">
                        <div onClick={contentOverlayClickHandler} className={contentOverState}></div>
                    </div>
                </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavMenuDesktop;
