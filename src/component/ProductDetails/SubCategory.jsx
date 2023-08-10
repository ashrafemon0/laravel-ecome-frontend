import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const SubCategory = (props) => {
    const MyList = props.ProductData;
    const Category = props.Category;
    const SubCategory = props.SubCategory;

    const MyView = MyList.map((ProductSubList,i)=>{
        if (ProductSubList.special_price === 'na'){
            return  <Col key={i.toString()} className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                <Link to={"/productdetails/"+ProductSubList.id}>
                <Card className="image-box card w-100">
                    <img className="center w-75" src={ProductSubList.product_image} />
                    <Card.Body>
                        <p className="product-name-on-card">{ProductSubList.product_title.length > 30 ? `${ProductSubList.product_title.substring(0, 30)}...` : ProductSubList.product_title}</p>
                        <p className="product-price-on-card">Price : ${ProductSubList.price}</p>

                    </Card.Body>
                </Card>
                </Link>
            </Col>
        }else{
            return  <Col key={i.toString()} className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                <Link to={"/productdetails/"+ProductSubList.id}>
                <Card className="image-box card w-100">
                    <img className="center w-75" src={ProductSubList.product_image} />
                    <Card.Body>
                        <p className="product-name-on-card">{ProductSubList.product_title.length > 30 ? `${ProductSubList.product_title.substring(0, 30)}...` : ProductSubList.product_title}</p>
                        <p className="product-price-on-card">Price : <del className="text-secondary">${ProductSubList.price}</del>&nbsp;${ProductSubList.special_price}</p>

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
                        <Breadcrumb.Item><Link to={"/productcategory/" +Category}>{Category}</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={"/productcategory/" +Category+"/"+SubCategory}>{SubCategory}</Link>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="section-title text-center mb-55">
                    <h2> {Category} / {SubCategory}</h2>


                </div>

                <Row>

                    {MyView}

                </Row>
            </Container>
        </div>
    );
};

export default SubCategory;