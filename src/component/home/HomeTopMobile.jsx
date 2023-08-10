import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import HomeSlider from "./HomeSlider.jsx";
import axios from "axios";

const BaseURL = "http://127.0.0.1:8000/api";
const HomeTopMobile = () => {
    const [slider,setSlider] = useState([]);
    useEffect(()=>{
        const url = BaseURL+'/homeslider'
        axios.get(url).then(function (response) {
            setSlider(response.data)
        }).catch(function () {

        })
    },[])
    return (
        <div>
            <Container className="p-0 m-0 overflow-hidden" fluid={true}>
                <Row className="p-0 m-0 overflow-hidden">
                    <Col lg={12} md={12} sm={12}>
                        <HomeSlider data={slider}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeTopMobile;