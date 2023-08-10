import React, {useEffect, useState} from 'react';
import MegaMenu from "./MegaMenu.jsx";
import {Col, Container, Row} from "react-bootstrap";
import HomeSlider from "./HomeSlider.jsx";
import axios from "axios";
import SliderLoding from "../Placeholder/SliderLoding.jsx";


const BaseURL = "http://127.0.0.1:8000/api";
const HomeTop = () => {
    const [megaMenu,setMegaMenu] = useState([]);
    const [slider,setSlider] = useState([]);
    const [loaderDiv,setLoaderDiv] = useState('')
    const [mainDiv,setMainDiv] = useState('d-none')
    useEffect(()=>{
        const url = BaseURL+'/allCategory'

                axios.get(url).then(function (response){
                    setMegaMenu(response.data)
                    setLoaderDiv('d-none')
                    setMainDiv('')

                })

                .catch(function (error){
                    console.error('Error fetching data:', error);
                })

    },[])
    useEffect(()=>{
        const url = BaseURL+'/homeslider'
        axios.get(url).then(function (response) {
            setSlider(response.data)
            setLoaderDiv('d-none')
            setMainDiv('')
        }).catch(function () {

        })
    },[])

    return (

        <div>
            <SliderLoding isLoading={loaderDiv}/>
            <div className={mainDiv}>
                <Container className="p-0 m-0 overflow-hidden" fluid={true}>
                    <Row>
                        <Col lg={3} md={3} sm={12}>
                            <MegaMenu data={megaMenu}/>
                        </Col>

                        <Col lg={9} md={9} sm={12}>
                            <HomeSlider data={slider}/>

                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    );
};

export default HomeTop;