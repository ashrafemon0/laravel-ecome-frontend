import React, {useEffect, useState} from 'react';
import { Container,Row,Col } from 'react-bootstrap'
import axios from "axios";
import cogoToast from "cogo-toast";
import ReactHtmlParser from "react-html-parser";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import {Link} from "react-router-dom";

const BaseURL = "http://127.0.0.1:8000/api";
const Purches = () => {

    const [purches,setpurches] = useState('')
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
                        const JsonData = response.data[0]['purchase']
                        setpurches(JsonData)
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
            setpurches(SiteAboutInfo)
        }

    },[])

    return (
        <div>
            <Container>
                <div className="bradcome-body">
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to="/purchases">Purches</Link>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <Row className="p-2">
                    <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>


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
                        <h4 className="section-title-login">Purchase Page </h4>
                        <p className="section-title-contact">
                            { ReactHtmlParser(purches) }
                        </p>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Purches;