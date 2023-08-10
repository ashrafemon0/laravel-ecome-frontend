import React, {useEffect} from 'react';
import NavMenuDesktop from "../component/common/NavMenuDesktop.jsx";
import NavMenuMobile from "../component/common/NavMenuMobile.jsx";
import FooterDesktop from "../component/common/FooterDesktop.jsx";
import FooterMobile from "../component/common/FooterMobile.jsx";
import Privacy from "../component/others/Privacy.jsx";

const PrivacyPage = () => {
    useEffect(()=>{
        window.scroll(0,0)
    })
    return (
        <div>
            <div>
                <div className="Desktop">
                    <NavMenuDesktop />
                </div>

                <div className="Mobile">
                    <NavMenuMobile />
                </div>

                <Privacy />

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

export default PrivacyPage;