import React from 'react';
import NavMenuDesktop from "../common/NavMenuDesktop.jsx";
import NavMenuMobile from "../common/NavMenuMobile.jsx";
import FooterDesktop from "../common/FooterDesktop.jsx";
import FooterMobile from "../common/FooterMobile.jsx";
import Favorite from "../Favorite/Favorite.jsx";

const FavoritePage = () => {
    return (
        <div>
            <div>
                <div className="Desktop">
                    <NavMenuDesktop />
                </div>

                <div className="Mobile">
                    <NavMenuMobile />
                </div>

                <Favorite />


                <div className="Desktop">
                    <FooterDesktop/>
                </div>

                <div className="Mobile">
                    <FooterMobile/>
                </div>
            </div>
        </div>
    );
};

export default FavoritePage;