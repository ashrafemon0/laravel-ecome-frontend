import React, {useRef, useState} from 'react';
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import axios from "axios";
import cogoToast from 'cogo-toast';

const BaseURL = "http://127.0.0.1:8000/api";
const Contact = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData  = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value
        };

        if (formData.name.length===0){
            cogoToast.error('Please Enter Your name')
        }else if(formData.email.length===0){
            cogoToast.error('Please Enter Your Email')
        }else if(formData.message.length===0){
            cogoToast.error('Please Enter Your message')
        }
        else{
            setIsLoading(true);
            const url = BaseURL + '/contact'
            axios.post(url, formData)
                .then(response => {
                    cogoToast.success('This message Send success !');
                    setIsLoading(false);
                    console.log(response.data); // Optional: Handle response from the server
                    // Reset form fields if needed
                    nameRef.current.value = '';
                    emailRef.current.value = '';
                    messageRef.current.value = '';
                })
                .catch(error => {
                    console.error(error); // Optional: Handle e rror

                })
        }

    }

    return (
        <div>
            <Container>
                <Row className="p-2">
                    <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>

                        <Row className="text-center">
                            <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                <Form className="onboardForm" onSubmit={handleSubmit}>
                                    <h4 className="section-title-login">CONTACT WITH US </h4>
                                    <h6 className="section-sub-title">Please Contact With Us </h6>
                                    <input className="form-control m-2" type="text" placeholder="Enter Your Name" ref={nameRef}/>

                                    <input className="form-control m-2" type="email" placeholder="Enter Email" ref={emailRef}/>

                                    <textarea className="form-control m-2" name="" id="" cols="30" rows="10" placeholder="Enter Your Message" ref={messageRef}></textarea>

                                    <Button type="submit" className="btn btn-block m-2 site-btn-login" disabled={isLoading}>
                                        {isLoading ? 'Loading...' : 'Send'}
                                    </Button>

                                </Form>


                            </Col>

                            <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                                <br></br><br></br>
                                <p className="section-title-contact">
                                    1635 Franklin Street Montgomery, Near Sherwood Mall. AL 36104
                                    Email: Support@easylearningbd.com
                                </p>

                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162771.1102477064!2d-74.10054944459704!3d40.70681480276415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1627241390779!5m2!1sen!2sbd" width="500" height="450" styles="border:0;" allowfullscreen="" loading="lazy"></iframe>

                            </Col>
                        </Row>






                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;