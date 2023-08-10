import React, {useEffect, useState} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";
import FeturedLoading from "../Placeholder/FeturedLoading.jsx";
import CategoryLoading from "../Placeholder/CategoryLoading.jsx";

const BaseURL = "http://127.0.0.1:8000/api";
const Categories = () => {
    const [megaMenu,setMegaMenu] = useState([]);
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

    const CatList = megaMenu
    const MyView = CatList.map((Cat,i)=>{
        return <Col key={i.toString()} className="p-0" xl={2} lg={2} md={3} sm={6} xs={6}>
            <Link to={"/productcategory/"+Cat.category_name}>
            <Card className="h-100 w-100 text-center">
                <Card.Body>
                    <img className="center" src={Cat.category_image} />
                    <h5 className="category-name">{Cat.category_name}</h5>
                </Card.Body>
            </Card>
            </Link>
        </Col>

    })


    return (
        <div>
            <CategoryLoading isLoading={loaderDiv}/>
            <div className={mainDiv}>
            <Container className="text-center" fluid={true}>
                <div className="section-title text-center mb-55"><h2> CATEGORIES</h2>
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

export default Categories;