import React, {useEffect, useState} from 'react';
import NavMenuDesktop from "../component/common/NavMenuDesktop.jsx";
import NavMenuMobile from "../component/common/NavMenuMobile.jsx";
import FooterDesktop from "../component/common/FooterDesktop.jsx";
import FooterMobile from "../component/common/FooterMobile.jsx";
import axios from "axios";
import {useParams} from "react-router";
import Categories from "../component/ProductDetails/Categories.jsx";

const BaseURL = "http://127.0.0.1:8000/api";
const ProductCategoriesPage = () => {
    const { category } = useParams(); // Access the category parameter from the URL
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        window.scroll(0, 0);
        const url = `${BaseURL}/Productlistbycategory/${category}`;
        axios
            .get(url)
            .then(function (response) {
                setProductData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [category]);

    return (
        <div>
            <div className="Desktop">
                <NavMenuDesktop />
            </div>

            <div className="Mobile">
                <NavMenuMobile />
            </div>

            <Categories Category={category} ProductData={productData}/>

            <div className="Desktop">
                <FooterDesktop />
            </div>

            <div className="Mobile">
                <FooterMobile />
            </div>
        </div>
    );
};
export default ProductCategoriesPage;