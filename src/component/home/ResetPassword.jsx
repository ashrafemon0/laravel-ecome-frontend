import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Forget from '../../assets/images/forget.jpg'
const ResetPassword = () => {
    return (
        <div>
            <Container>
                <Row className="p-2">
                    <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>

                        <Row className="text-center">
                            <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                <Form className="onboardForm">
                                    <h4 className="section-title-login"> RESET PASSWORD </h4>

                                    <input className="form-control m-2" type="text" placeholder="Enter Your Pin Code" />

                                    <input className="form-control m-2" type="email" placeholder="Enter Your Email" />

                                    <input className="form-control m-2" type="password" placeholder="Your New Password" />

                                    <input className="form-control m-2" type="password" placeholder="Confirm Your Password" />


                                    <Button className="btn btn-block m-2 site-btn-login"> Reset Password </Button>

                                </Form>


                            </Col>

                            <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                                <img className="onboardBanner" src={Forget} />
                            </Col>
                        </Row>






                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ResetPassword;