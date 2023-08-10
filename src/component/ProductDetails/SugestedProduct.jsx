import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const SugestedProduct = () => {
    return (
        <div>
            <Container fluid={true} className="text-center">
                <div className="section-title text-center">
                    <h2>YOU MAY LIKE THIS</h2>
                    <p>Some Of Our Exclusive Collection, You May Like</p>
                </div>
                <Row>

                    <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                        <Link to="/productdetails">
                            <Card className="image-box card">
                                <img className="center" src="https://m.media-amazon.com/images/I/814ePfNubRL._AC_UY218_.jpg" />
                                <Card.Body>
                                    <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
                                    <p className="product-price-on-card">Price : $120</p>

                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                        <Card className="image-box card">
                            <img className="center" src="https://m.media-amazon.com/images/I/812yohjGZ2L._AC_UY218_.jpg" />
                            <Card.Body>
                                <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
                                <p className="product-price-on-card">Price : $120</p>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                        <Card className="image-box card">
                            <img className="center" src="https://m.media-amazon.com/images/I/61LB+d0vheL._AC_UY218_.jpg" />
                            <Card.Body>
                                <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
                                <p className="product-price-on-card">Price : $120</p>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="p-1" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                        <Card className="image-box card">
                            <img className="center" src="https://m.media-amazon.com/images/I/81RR0TAz+5L._AC_UY218_.jpg" />
                            <Card.Body>
                                <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
                                <p className="product-price-on-card">Price : $120</p>

                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default SugestedProduct;