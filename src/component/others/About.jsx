import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import ReactHtmlParser from 'react-html-parser';
import cogoToast from "cogo-toast";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {Link} from "react-router-dom";

const BaseURL = "http://127.0.0.1:8000/api";
const About = () => {
    const [about,setAbout] = useState('')
    const [loaderDiv,setLoaderDiv] = useState('')
    const [mainDiv,setMainDiv] = useState('d-none')

    useEffect(()=>{
        const url = BaseURL+'/allsiteinformation'
       const SiteAboutInfo = sessionStorage.getItem('url')
        if (SiteAboutInfo == null){
            axios.get(url)
                .then(function (response){
                    const StatusCode = response.status;
                    if (StatusCode === 200){
                        const JsonData = response.data[0]['about']
                        setAbout(JsonData)
                        setLoaderDiv('d-none')
                        setMainDiv('')
                        sessionStorage.setItem('SiteAboutInfo',JsonData)
                    }else {
                        cogoToast.error('Something went wrong')
                    }
                })

                .catch(function (){

                })
        }else {
            setAbout(SiteAboutInfo)
        }

    },[])
    return (
        <div>
            <Container>
                <div className="bradcome-body">
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to="/about">About</Link>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <Row className="p-2">
                    <Col className="shadow-sm bg-white mt-1" md={12} lg={12} sm={12} xs={12}>

                        <div className={loaderDiv}>
                            <div className="ph-item">
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-4"></div>
                                        <div className="ph-col-8 empty"></div>
                                        <div className="ph-col-6"></div>
                                        <div className="ph-col-6 empty"></div>
                                        <div className="ph-col-12"></div>
                                        <div className="ph-col-12"></div>
                                        <div className="ph-col-12"></div>
                                        <div className="ph-col-12"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={loaderDiv}>
                            <div className="ph-item">
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-4"></div>
                                        <div className="ph-col-8 empty"></div>
                                        <div className="ph-col-6"></div>
                                        <div className="ph-col-6 empty"></div>
                                        <div className="ph-col-12"></div>
                                        <div className="ph-col-12"></div>
                                        <div className="ph-col-12"></div>
                                        <div className="ph-col-12"></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className={mainDiv}>
                        <h4 className="section-title-login">About US </h4>
                        <p className="section-title-contact">
                            { ReactHtmlParser(about) }
                        </p>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;