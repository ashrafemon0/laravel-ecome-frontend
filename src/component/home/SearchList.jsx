import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const SearchList = (props) => {
    const MyList = props.ProductData;
    const searchKey = props.search;

    const MyView = MyList.map((ProductList,i)=>{
        if (ProductList.special_price === 'na'){
            return  <Col key={i.toString()} className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                <Link to={"/productdetails/"+ProductList.id}>
                    <Card className="image-box card w-100">
                        <img className="center w-75" src={ProductList.product_image} />
                        <Card.Body>
                            <p className="product-name-on-card">{ProductList.product_title.length > 30 ? `${ProductList.product_title.substring(0, 30)}...` : ProductList.product_title}</p>
                            <p className="product-price-on-card">Price : ${ProductList.price}</p>

                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        }else{
            return  <Col key={i.toString()} className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                <Link to={"/productdetails/"+ProductList.id}>
                    <Card className="image-box card w-100">
                        <img className="center w-75" src={ProductList.product_image} />
                        <Card.Body>
                            <p className="product-name-on-card">{ProductList.product_title.length > 30 ? `${ProductList.product_title.substring(0, 30)}...` : ProductList.product_title}</p>
                            <p className="product-price-on-card">Price : <del className="text-secondary">${ProductList.price}</del>&nbsp;${ProductList.special_price}</p>

                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        }
    })
    return (
        <div>
            <Container className="text-center" fluid={true}>
                <div className="bradcome-body">
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={"/productbysearch/" +searchKey}>Search By: {searchKey}</Link>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="section-title text-center mb-55"><h2> {searchKey}</h2>

                </div>

                <Row>

                    {MyView}

                </Row>
            </Container>
        </div>
    );
};

export default SearchList;