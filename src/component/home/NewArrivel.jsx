import React, {useEffect, useRef, useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Container, Row, Card, Col} from "react-bootstrap";
import axios from "axios";

import NewArrivalLoading from "../Placeholder/NewArrivalLoading.jsx";
import {Link} from "react-router-dom";

const BaseURL = "http://127.0.0.1:8000/api";

const NewArrivel = () => {
    const sliderRef = useRef(null);
    const [NewProduct,setNewProduct] = useState([])
    const [loaderDiv,setLoaderDiv] = useState('')
    const [mainDiv,setMainDiv] = useState('d-none')
    const next = () => {
        sliderRef.current.slickNext();
    };
    const previous = () => {
        sliderRef.current.slickPrev();
    };


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed:2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    useEffect(()=>{
        const url = BaseURL+'/Productlistbyremark/NEW'
        axios.get(url)
            .then(function (response){
                setNewProduct(response.data)
                setLoaderDiv('d-none')
                setMainDiv('')

            })

            .catch(function (){

            })

    },[])

    const NewProductList = NewProduct;

    const MyView = NewProductList.map((New,i)=>{
        if (New.special_price === 'na'){
            return <div key={i.toString()}>
                <Link to={"/productdetails/"+New.id}>
                <Card className="image-box card">
                    <img className="center" src={New.product_image} />
                    <Card.Body>
                        <p className="product-name-on-card">{New.product_title.length > 30 ? `${New.product_title.substring(0, 30)}...` : New.product_title}</p>
                        <p className="product-price-on-card">Price : $120</p>

                    </Card.Body>
                </Card>
                </Link>
            </div>
        }else{
            return <div key={i.toString()}>
                <Link to={"/productdetails/"+New.id}>
                <Card className="image-box card">
                    <img className="center" src={New.product_image} />
                    <Card.Body>
                        <p className="product-name-on-card">{New.product_title.length > 30 ? `${New.product_title.substring(0, 30)}...` : New.product_title}</p>
                        <p className="product-price-on-card">Price : $<del className="text-secondary">${New.price}</del>&nbsp;${New.special_price} </p>

                    </Card.Body>
                </Card>
                </Link>
            </div>
        }
    })

    return (
        <div>
            <NewArrivalLoading isLoading={loaderDiv}/>
            <div className={mainDiv}>
            <Container className="text-center" fluid={true}>
                <div className="section-title text-center mb-55"><h2>NEW ARRIVAL &nbsp;

                    <a className="btn btn-sm ml-2 site-btn" onClick={previous} ><i className="fa fa-angle-left"></i></a>
                    &nbsp;
                    <a className="btn btn-sm ml-2 site-btn" onClick={next} ><i className="fa fa-angle-right"></i></a>

                </h2>
                    <p>Some Of Our Exclusive Collection, You May Like</p>
                </div>

                <Row>
                    <Slider ref={sliderRef} {...settings}>
                        {MyView}

                    </Slider>
                </Row>
            </Container>
        </div>
        </div>
    );
};

export default NewArrivel;