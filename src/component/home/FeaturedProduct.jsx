import React, {useEffect, useState} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import FeturedLoading from "../Placeholder/FeturedLoading.jsx";

const BaseURL = "http://127.0.0.1:8000/api";

const FeaturedProduct = () => {
    const [productData,setproductData] = useState([])
    const [loaderDiv,setLoaderDiv] = useState('')
    const [mainDiv,setMainDiv] = useState('d-none')

    useEffect(()=>{
        const url = BaseURL+'/Productlistbyremark/FEATURED'
            axios.get(url)
                .then(function (response){
                    setproductData(response.data)
                    setLoaderDiv('d-none')
                    setMainDiv('')

                })

                .catch(function (){

                })

    },[])

    const FeaturedList = productData;

    const MyView = FeaturedList.map((Fetured,i)=>{

        if (Fetured.special_price === 'na'){
            return  <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                <Link to={"/productdetails/"+Fetured.id}>
                    <Card className="image-box card">
                        <img className="center" src={Fetured.product_image} />
                        <Card.Body>
                            <p className="product-name-on-card">{Fetured.product_title.length > 30 ? `${Fetured.product_title.substring(0, 30)}...` : Fetured.product_title}</p>
                            <p className="product-price-on-card">Price : ${Fetured.price}</p>

                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        }else{
            return  <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                <Link to={"/productdetails/"+Fetured.id}>
                    <Card className="image-box card">
                        <img className="center" src={Fetured.product_image} />
                        <Card.Body>
                            <p className="product-name-on-card">{Fetured.product_title.length > 30 ? `${Fetured.product_title.substring(0, 30)}...` : Fetured.product_title}</p>
                            <p className="product-price-on-card">Price : <del className="text-secondary">${Fetured.price}</del>&nbsp;${Fetured.special_price} </p>

                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        }


    })

    return (
        <div>
            <FeturedLoading isLoading={loaderDiv}/>
            <div className={mainDiv}>
            <Container fluid={true} className="text-center">
                <div className="section-title text-center">
                    <h2>Featured Product</h2>
                    <p>Some Of Our Exclusive Collection, You May Like</p>
                </div>
                <Row>

                    {MyView}

                </Row>
            </Container>
            </div>
        </div>
    );
};

export default FeaturedProduct;