import React, {useEffect, useState} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

const BaseURL = "http://127.0.0.1:8000/api";
const Notification = () => {
    const [Notification,setNotification] = useState([])
    const [NotificationTitle,setNotificationTitle] = useState([])
    const [NotificationMessage,setNotificationMessage] = useState([])
    const [NotificationDate,setNotificationDate] = useState([])
    const [loaderDiv,setLoaderDiv] = useState('')
    const [mainDiv,setMainDiv] = useState('d-none')

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (event) =>{
        setShow(true);
        let Nmsg = event.target.getAttribute('data-message')
        let Ntitle = event.target.getAttribute('data-title')
        let Ndate = event.target.getAttribute('data-date')
        setNotificationTitle(Ntitle);
        setNotificationMessage(Nmsg);
        setNotificationDate(Ndate);

    }

    useEffect(()=>{
        const url = BaseURL+'/notification'
        axios.get(url)
            .then(function (response){
                setNotification(response.data)
                setLoaderDiv('d-none')
                setMainDiv('')

            })

            .catch(function (){

            })

    },[])
    const NotificationList = Notification;

    const MyView = NotificationList.map((Noti,i)=>{
        return  <Col key={i.toString()} className=" p-1 " md={6} lg={6} sm={12} xs={12}>
            <Card onClick={handleShow} className="notification-card">
                <Card.Body>
                    <h6> {Noti.title}</h6>
                    <p className="py-1  px-0 text-primary m-0"><i className="fa  fa-bell"></i>   Date: {Noti.date} | Status: Unread</p>
                    <button data-title={Noti.title} data-message={Noti.message} data-date={Noti.date} className="btn btn-danger">Details</button>
                </Card.Body>
            </Card>
        </Col>
    })
    return (
        <div>
            <Container className="TopSection">
                <Row>

                    {MyView}

                </Row>
            </Container>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h6><i className="fa fa-bell"></i> Date:{NotificationDate}</h6>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>{NotificationTitle}</h5>
                        {NotificationMessage}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default Notification;