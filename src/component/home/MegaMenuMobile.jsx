import React, { useState } from 'react';

const MegaMenu = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="accordionMenuDivMobile">
            <div className="accordionMenuDivInsideMobile">
                <button
                    className={`accordionMobile ${activeAccordion === 0 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(0)}
                >
                    <img
                        className="accordionMenuIconMobile"
                        src="https://cdn-icons-png.flaticon.com/128/2331/2331716.png"
                        alt="Menu Icon"
                    />
                    &nbsp; Men's Clothing
                </button>
                <div
                    className={`panel ${activeAccordion === 0 ? 'open' : ''}`}
                    style={activeAccordion === 0 ? { maxHeight: 'none' } : {}}
                >
                    <ul>
                        <li>
                            <a href="#" className="accordionItemMobile">
                                Mans Tshirt 1
                            </a>
                        </li>
                        <li>
                            <a href="#" className="accordionItemMobile">
                                Mans Tshirt 2
                            </a>
                        </li>
                    </ul>
                </div>
                {/* Add more buttons and panels here */}
                <button
                    className={`accordionMobile ${activeAccordion === 1 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(1)}
                >
                    <img
                        className="accordionMenuIconMobile"
                        src="https://cdn-icons-png.flaticon.com/128/2331/2331716.png"
                        alt="Menu Icon"
                    />
                    &nbsp; Men's Clothing
                </button>
                <div
                    className={`panel ${activeAccordion === 1 ? 'open' : ''}`}
                    style={activeAccordion === 1 ? { maxHeight: 'none' } : {}}
                >
                    <ul>
                        <li>
                            <a href="#" className="accordionItemMobile">
                                Mans Tshirt 1
                            </a>
                        </li>
                        <li>
                            <a href="#" className="accordionItemMobile">
                                Mans Tshirt 2
                            </a>
                        </li>
                    </ul>
                </div>
                <button
                    className={`accordionMobile ${activeAccordion === 2 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(2)}
                >
                    <img
                        className="accordionMenuIconMobile"
                        src="https://cdn-icons-png.flaticon.com/128/2331/2331716.png"
                        alt="Menu Icon"
                    />
                    &nbsp; Men's Clothing
                </button>
                <div
                    className={`panel ${activeAccordion === 2 ? 'open' : ''}`}
                    style={activeAccordion === 2 ? { maxHeight: 'none' } : {}}
                >
                    <ul>
                        <li>
                            <a href="#" className="accordionItemMobile">
                                Mans Tshirt 1
                            </a>
                        </li>
                        <li>
                            <a href="#" className="accordionItemMobile">
                                Mans Tshirt 2
                            </a>
                        </li>
                    </ul>
                </div>
                <button
                    className={`accordionMobile ${activeAccordion === 3 ? 'active' : ''}`}
                    onClick={() => toggleAccordion(3)}
                >
                    <img
                        className="accordionMenuIconMobile"
                        src="https://cdn-icons-png.flaticon.com/128/2331/2331716.png"
                        alt="Menu Icon"
                    />
                    &nbsp; Men's Clothing
                </button>
                <div
                    className={`panel ${activeAccordion === 3 ? 'open' : ''}`}
                    style={activeAccordion === 3 ? { maxHeight: 'none' } : {}}
                >
                    <ul>
                        <li>
                            <a href="#" className="accordionItemMobile">
                                Mans Tshirt 1
                            </a>
                        </li>
                        <li>
                            <a href="#" className="accordionItemMobile">
                                Mans Tshirt 2
                            </a>
                        </li>
                    </ul>
                </div>



            </div>
        </div>

    );
};

export default MegaMenu;
