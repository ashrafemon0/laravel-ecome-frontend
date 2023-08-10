import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Google from '../../assets/images/google.png'
import apple from '../../assets/images/apple.png'
import {Link} from "react-router-dom";
import Translate from "../Translate.jsx";
import axios from "axios";
import cogoToast from "cogo-toast";
import ReactHtmlParser from "react-html-parser";

const BaseURL = "http://127.0.0.1:8000/api";
const FooterDesktop = () => {
    const [address,setAddress] = useState('')
    const [androidLink,setAndroidLink] = useState('')
    const [iosLink,setIosLink] = useState('')
    const [facebook,setFacebook] = useState('')
    const [twitter,setTwitter] = useState('')
    const [instagram,setInstagram] = useState('')
    const [copywriteText,setCopyWriteText] = useState('')
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
                        const JsonData = response.data[0]
                        setAddress(JsonData['address'])
                        setAndroidLink(JsonData['android_link'])
                        setIosLink(JsonData['ios_link'])
                        setFacebook(JsonData['facebook'])
                        setTwitter(JsonData['twitter'])
                        setInstagram(JsonData['instagram'])
                        setCopyWriteText(JsonData['copywrite_text'])
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
            setAddress(SiteAboutInfo)
        }

    },[])
    return (
        <div>
            <div className="footerback m-0 mt-5 pt-3 shadow-sm">
                <Container>
                    <Row className="px-0 my-5">
                        <Col className="p-2" lg={3} md={3} sm={6} xs={12}>

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
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={mainDiv}>
                            <h5 className="footer-menu-title">OFFICE ADDRESS</h5>
                            { ReactHtmlParser(address) }
                            </div>
                            <div className={mainDiv}>
                            <h5 className="footer-menu-title">SOCIAL LINK</h5>
                            <a href={facebook} target="_blank"><i className="fab m-1 h4 fa-facebook"></i></a>
                            <a href={twitter} target="_blank"><i className="fab m-1 h4 fa-instagram"></i></a>
                            <a href={instagram} target="_blank"><i className="fab m-1 h4 fa-twitter"></i></a>
                            </div>
                        </Col>

                        <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                            <h5 className="footer-menu-title">THE COMPANY</h5>
                            <Link to="/about" className="footer-link"> About Us</Link><br></br>
                            <Link to="/" className="footer-link"> Company Profile</Link><br></br>
                            <Link to="/contact" className="footer-link"> Contact Us</Link><br></br>
                        </Col>

                        <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                            <h5 className="footer-menu-title">MORE INFO</h5>
                            <Link to="/purchases" className="footer-link">How To Purchase</Link><br></br>
                            <Link to="/privacy" className="footer-link"> Privacy Policy</Link><br></br>
                            <Link to="/refund" className="footer-link"> Refund Policy </Link><br></br>
                        </Col>

                        <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={mainDiv}>
                            <h5 className="footer-menu-title">DOWNLOAD APPS</h5>
                            <a href={androidLink} target="_blank"><img src={Google}  /></a><br></br>
                            <a href={iosLink} target="_blank"><img className="mt-2" src={apple}  /></a><br></br>
                        </div>
                        </Col>
                        Change Your Language <br></br>
                        <div id="translation-widget">
                            <Translate />
                        </div>
                    </Row>
                </Container>
                <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-dark">
                    <Container>
                        <Row>
                            <h6 className="text-white">{copywriteText}</h6>
                        </Row>
                    </Container>
                </Container>

            </div>
        </div>
    );
};

export default FooterDesktop;