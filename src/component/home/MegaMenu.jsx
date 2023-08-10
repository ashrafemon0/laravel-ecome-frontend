import React, { useState } from 'react';
import {Link} from "react-router-dom";

const MegaMenu = (props) => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
    };

    const CatList = props.data;



    const MyView = CatList.map((Cat,i)=>{
        return (<div key={i.toString()}>
            <button
                className={`accordion ${activeAccordion === i ? 'active' : ''}`}
                onClick={() => toggleAccordion(i)}
            >
                <img
                    className="accordionMenuIcon"
                    src={Cat.category_image}
                    alt="Menu Icon"
                />
                &nbsp; {Cat.category_name}
            </button>
            <div
                className={`panel ${activeAccordion === i ? 'open' : ''}`}
                style={activeAccordion === i ? { maxHeight: 'none' } : {}}
            >
                <ul>
                    {
                        (Cat.subcategory_name).map((Sub,i)=>{
                            return <li key={i.toString()}>
                                <Link to={"productcategory/"+Cat.category_name+"/"+Sub.subcategory_name} className="accordionItem">
                                    {Sub.subcategory_name}
                                </Link>
                            </li>
                        })
                    }

                </ul>
            </div>
        </div>
        )
    })

    return (



        <div className="accordionMenuDiv">
            <div className="accordionMenuDivInside">
                {MyView}
                {/* Add more buttons and panels here */}


            </div>
        </div>

    );
};

export default MegaMenu;
