import React, {useEffect} from 'react';
import FeaturedProduct from "../component/home/FeaturedProduct.jsx";
import Categories from "../component/home/Categories.jsx";
import Collection from "../component/home/Collection.jsx";
import NewArrivel from "../component/home/NewArrivel.jsx";
import HomeTop from "../component/home/HomeTop.jsx";
import NavMenuDesktop from "../component/common/NavMenuDesktop.jsx";
import NavMenuMobile from "../component/common/NavMenuMobile.jsx";
import HomeTopMobile from "../component/home/HomeTopMobile.jsx";
import FooterDesktop from "../component/common/FooterDesktop.jsx";
import FooterMobile from "../component/common/FooterMobile.jsx";
import axios from "axios";
import {Route} from "react-router";
const BaseURL = "http://127.0.0.1:8000/api";
const HomePage = () => {
    useEffect(()=>{
        window.scroll(0,0)
        GetVisitorDetails()
    })
    const GetVisitorDetails =()=>{
        const url = BaseURL + '/getvisitor'
        axios.get(url).then().catch()
    }
    // const HomePageRoute = () => {
    //     return (
    //         <Route path="/" element={<HomePage key={Date.now()} />} />
    //     );
    // };

    return (
        <div>
            {/*<NavMenuDesktop/>*/}

            {/*<NavMenuMobile/>*/}
            {/*<HomeTop/>*/}
            <div className="Desktop">
                <NavMenuDesktop />
                <HomeTop />
            </div>

            <div className="Mobile">
                <NavMenuMobile />
                <HomeTopMobile />
            </div>
            <FeaturedProduct/>
            <Categories/>
            <NewArrivel/>
            <Collection/>
            <div className="Desktop">
                <FooterDesktop/>
            </div>

            <div className="Mobile">
                <FooterMobile/>
            </div>
        </div>
    );
};

export default HomePage;