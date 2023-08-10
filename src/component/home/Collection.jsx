import React, {useEffect, useState} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import CollectionLoading from "../Placeholder/CollectionLoading.jsx";
import {Link} from "react-router-dom";
const BaseURL = "http://127.0.0.1:8000/api";
const Collection = () => {
    const [collectionData,setcollectionData] = useState([])
    const [loaderDiv,setLoaderDiv] = useState('')
    const [mainDiv,setMainDiv] = useState('d-none')

    useEffect(()=>{
        const url = BaseURL+'/Productlistbyremark/COLLECTION'
        axios.get(url)
            .then(function (response){
                setcollectionData(response.data)
                setLoaderDiv('d-none')
                setMainDiv('')

            })

            .catch(function (){

            })

    },[])

    const CollectionList = collectionData;

    const MyView = CollectionList.map((Collection,i)=>{
        if (Collection.special_price === 'na'){
            return  <Col key={i.toString()} className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                <Link to={"/productdetails/"+Collection.id}>
                <Card className="image-box card w-100">
                    <img className="center w-75" src={Collection.product_image} />
                    <Card.Body>
                        <p className="product-name-on-card">{Collection.product_title.length > 30 ? `${Collection.product_title.substring(0, 30)}...` : Collection.product_title}</p>
                        <p className="product-price-on-card">Price : ${Collection.price}</p>

                    </Card.Body>
                </Card>
                </Link>
            </Col>
        }else{
            return  <Col key={i.toString()} className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
                <Link to={"/productdetails/"+Collection.id}>
                <Card className="image-box card w-100">
                    <img className="center w-75" src={Collection.product_image} />
                    <Card.Body>
                        <p className="product-name-on-card">{Collection.product_title.length > 30 ? `${Collection.product_title.substring(0, 30)}...` : Collection.product_title}</p>
                        <p className="product-price-on-card">Price : <del className="text-secondary">${Collection.price}</del>&nbsp;${Collection.special_price}</p>

                    </Card.Body>
                </Card>
                </Link>
            </Col>
        }
    })

    return (
        <div>
            <CollectionLoading isLoading={loaderDiv}/>
            <div className={mainDiv}>
                <Container className="text-center" fluid={true}>
                    <div className="section-title text-center mb-55"><h2> PRODUCT COLLECTION</h2>
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

export default Collection;