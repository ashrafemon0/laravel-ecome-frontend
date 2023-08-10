import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import SubCategory from "../component/ProductDetails/SubCategory.jsx";
import NavMenuDesktop from "../component/common/NavMenuDesktop.jsx";
import NavMenuMobile from "../component/common/NavMenuMobile.jsx";
import FooterDesktop from "../component/common/FooterDesktop.jsx";
import FooterMobile from "../component/common/FooterMobile.jsx";
import axios from "axios";

const BaseURL = "http://127.0.0.1:8000/api";
const ProductSubCategory = () => {
    const { category,subcategory } = useParams();
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        window.scroll(0, 0);
        const url = `${BaseURL}/Productlistbysubcategory/${category}/${subcategory}`;
        axios
            .get(url)
            .then(function (response) {
                console.log(response.data)
                setProductData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [category,subcategory]);

    return (
        <div>
            <div className="Desktop">
                <NavMenuDesktop />
            </div>

            <div className="Mobile">
                <NavMenuMobile />
            </div>

            <SubCategory Category={category} SubCategory={subcategory} ProductData={productData}/>

            <div className="Desktop">
                <FooterDesktop />
            </div>

            <div className="Mobile">
                <FooterMobile />
            </div>
        </div>
    );
};

export default ProductSubCategory;