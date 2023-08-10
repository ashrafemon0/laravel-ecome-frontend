import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import axios from "axios";
import NavMenuDesktop from "../component/common/NavMenuDesktop.jsx";
import NavMenuMobile from "../component/common/NavMenuMobile.jsx";
import FooterDesktop from "../component/common/FooterDesktop.jsx";
import FooterMobile from "../component/common/FooterMobile.jsx";
import SearchList from "../component/home/SearchList.jsx";

const BaseURL = "http://127.0.0.1:8000/api";
const SearchPage = () => {
    const { SearchData } = useParams(); // Access the category parameter from the URL
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        window.scroll(0, 0);
        const url = `${BaseURL}/search/${SearchData}`;
        axios
            .get(url)
            .then(function (response) {
                console.log(response.data)
                setProductData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [SearchData]);

    return (
        <div>
            <div className="Desktop">
                <NavMenuDesktop />
            </div>

            <div className="Mobile">
                <NavMenuMobile />
            </div>

            <SearchList search={SearchData} ProductData={productData}/>

            <div className="Desktop">
                <FooterDesktop />
            </div>

            <div className="Mobile">
                <FooterMobile />
            </div>
        </div>
    );
};

export default SearchPage;