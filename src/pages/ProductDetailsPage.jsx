import React, {useEffect, useState} from 'react';
import NavMenuDesktop from "../component/common/NavMenuDesktop.jsx";
import NavMenuMobile from "../component/common/NavMenuMobile.jsx";
import FooterDesktop from "../component/common/FooterDesktop.jsx";
import FooterMobile from "../component/common/FooterMobile.jsx";
import ProductDetails from "../component/ProductDetails/ProductDetails.jsx";
import SugestedProduct from "../component/ProductDetails/SugestedProduct.jsx";
import {useParams} from "react-router";
import axios from "axios";
import SliderLoding from "../component/Placeholder/SliderLoding.jsx";

const BaseURL = "http://127.0.0.1:8000/api";
const ProductDetailsPage = () => {

    const { code } = useParams(); // Access the category parameter from the URL
    const [productDetailsData, setproductDetailsData] = useState([]);
    const [loaderDiv,setLoaderDiv] = useState('')
    const [mainDiv,setMainDiv] = useState('d-none')

    useEffect(() => {
        window.scroll(0, 0);
        const url = (`${BaseURL}/productdetails/${code}`);
        console.log(url)
        axios
            .get(url)
            .then(function (response) {
                console.log(response.data)
                setproductDetailsData(response.data);
                setLoaderDiv('d-none')
                setMainDiv('')
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [code]);

    if (mainDiv === 'd-none'){
        return (
            <div>
                <div className="Desktop">
                    <NavMenuDesktop />
                </div>

                <div className="Mobile">
                    <NavMenuMobile />
                </div>

               <SliderLoding isLoading={loaderDiv}/>

                <div className="Desktop">
                    <FooterDesktop/>
                </div>

                <div className="Mobile">
                    <FooterMobile/>
                </div>
            </div>
        );
    }else{
        return (
            <div>
                <div className="Desktop">
                    <NavMenuDesktop />
                </div>

                <div className="Mobile">
                    <NavMenuMobile />
                </div>

                        <ProductDetails data={productDetailsData} />
                        <SugestedProduct />

                <div className="Desktop">
                    <FooterDesktop/>
                </div>

                <div className="Mobile">
                    <FooterMobile/>
                </div>
            </div>
        );
    }

};

export default ProductDetailsPage;