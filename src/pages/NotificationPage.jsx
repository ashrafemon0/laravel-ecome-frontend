import React from 'react';
import NavMenuDesktop from "../component/common/NavMenuDesktop.jsx";
import NavMenuMobile from "../component/common/NavMenuMobile.jsx";
import ProductDetails from "../component/ProductDetails/ProductDetails.jsx";
import SugestedProduct from "../component/ProductDetails/SugestedProduct.jsx";
import FooterDesktop from "../component/common/FooterDesktop.jsx";
import FooterMobile from "../component/common/FooterMobile.jsx";
import Notification from "../component/Notification/Notification.jsx";

const NotificationPage = () => {
    return (
        <div>
            <div className="Desktop">
                <NavMenuDesktop />
            </div>

            <div className="Mobile">
                <NavMenuMobile />
            </div>

            <Notification />


            <div className="Desktop">
                <FooterDesktop/>
            </div>

            <div className="Mobile">
                <FooterMobile/>
            </div>
        </div>
    );
};

export default NotificationPage;