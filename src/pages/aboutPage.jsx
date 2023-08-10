import React from 'react';
import NavMenuDesktop from "../component/common/NavMenuDesktop.jsx";
import NavMenuMobile from "../component/common/NavMenuMobile.jsx";
import FooterDesktop from "../component/common/FooterDesktop.jsx";
import FooterMobile from "../component/common/FooterMobile.jsx";
import About from "../component/others/About.jsx";

const AboutPage = () => {
    return (
        <div>
            <div>
                <div className="Desktop">
                    <NavMenuDesktop />
                </div>

                <div className="Mobile">
                    <NavMenuMobile />
                </div>

                <About />

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

export default AboutPage;