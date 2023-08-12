import React, {useEffect, useState} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";

const BaseURL = "http://127.0.0.1:8000/api";

const SugestedProduct = (props) => {
    const [productData, setproductData] = useState([]);

    useEffect(() => {
        let subcategory = props.subcategory
        const url = (`${BaseURL}/similar/${subcategory}`);
        axios
            .get(url)
            .then(function (response) {
                setproductData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const MyList = productData;

    if (MyList.length>0){
        const MyView  = MyList.map((ProductList,i)=>{
            if (ProductList.special_price === 'na'){
                return  <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                    <Link to={"/productdetails/"+ProductList.id}>
                        <Card className="image-box card">
                            <img className="center" src={ProductList.product_image} />
                            <Card.Body>
                                <p className="product-name-on-card">{ProductList.product_title.length > 30 ? `${ProductList.product_title.substring(0, 30)}...` : ProductList.product_title}</p>
                                <p className="product-price-on-card">Price : ${ProductList.price}</p>

                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            }else{
                return  <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                    <Link to={"/productdetails/"+ProductList.id}>
                        <Card className="image-box card">
                            <img className="center" src={ProductList.product_image} />
                            <Card.Body>
                                <p className="product-name-on-card">{ProductList.product_title.length > 30 ? `${ProductList.product_title.substring(0, 30)}...` : ProductList.product_title}</p>
                                <p className="product-price-on-card">Price : <del className="text-secondary">${ProductList.price}</del>&nbsp;${ProductList.special_price} </p>

                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            }
        })
        return (
            <div>
                <Container fluid={true} className="text-center">
                    <div className="section-title text-center">
                        <h2>YOU MAY LIKE THIS</h2>
                        <p>Some Of Our Exclusive Collection, You May Like</p>
                    </div>
                    <Row>

                        {MyView}

                    </Row>
                </Container>

            </div>
        );
    }

else{
        return (
            <div>
                <Container fluid={true} className="text-center">
                    <div className="section-title text-center">
                        <h2>YOU MAY LIKE THIS</h2>
                        <p>Some Of Our Exclusive Collection, You May Like</p>
                    </div>
                    <Row>

                        <p>There is no related Product Here</p>

                    </Row>
                </Container>

            </div>
        )
    }

};

export default SugestedProduct;