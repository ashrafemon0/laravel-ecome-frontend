import React, {useState} from 'react';
import {Button, Col, Container, Navbar, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Logo from "../../assets/images/easyshop.png";
import MegaMenuMobile from "../home/MegaMenuMobile.jsx";

const NavMenuMobile = () => {
    const [sideNavState, setSideNavState] = useState('sideNavClose');
    const [contentOverState, setContentOverState] = useState('ContentOverlayClose');

    const menuBarClickHandler=()=>{
        sideNavOpenClose()
    }
    const contentOverlayClickHandler = () => {
        sideNavOpenClose();
    };

   const sideNavOpenClose=()=>{
       if (sideNavState === 'sideNavOpen') {
           setSideNavState('sideNavClose');
           setContentOverState('ContentOverlayClose');
       } else {
           setSideNavState('sideNavOpen');
           setContentOverState('ContentOverlayOpen');
       }
    }

    return (
        <div>
            <div className="TopSectionDown">
                <Navbar fixed={"top"} className="navbar" bg="light">

                    <Container fluid={"true"} className="fixed-top shadow-sm p-2 mb-0 bg-white">
                        <Row>
                            <Col lg={4} md={4} sm={12} xs={12}>

                                <Button onClick={menuBarClickHandler} className="btn"><i className="fa fa-bars"></i>  </Button>

                                <Link to="/"> <img className="nav-logo" src={Logo} /> </Link>

                                <Link to=""  className="h4 btn"><img className="w-25 h-25" src="https://cdn-icons-png.flaticon.com/128/419/419910.png" alt=""/></Link>
                            </Col>

                        </Row>

                    </Container>
                    <div className="">
                        <hr className="w-80" />
                        <div className="list-group">

                        </div>
                        <div className={sideNavState}>
                            <MegaMenuMobile/>
                        </div>

                        <div className="">
                            <div onClick={contentOverlayClickHandler} className={contentOverState}>

                            </div>
                        </div>
                    </div>

                </Navbar>
            </div>
        </div>
    );
};

export default NavMenuMobile;