import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Card, Col} from "react-bootstrap";
const BaseURL = "http://127.0.0.1:8000/api";
const MegaMenu = () => {

    const [activeAccordion, setActiveAccordion] = useState(null);
    const [megaMenu,setMegaMenu] = useState([]);

    useEffect(()=>{
        const url = BaseURL+'/allCategory'

        axios.get(url).then(function (response){
            setMegaMenu(response.data)

        })

            .catch(function (error){
                console.error('Error fetching data:', error);
            })

    },[])


    const toggleAccordion = (index) => {
        setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
    };

    const CatList = megaMenu
    const MyView = CatList.map((Cat,i)=>{
        return (<div key={i.toString()}>
                <button
                    className={`accordionMobile ${activeAccordion === i ? 'active' : ''}`}
                    onClick={() => toggleAccordion(i)}
                >
                    <img
                        className="accordionMenuIconMobile"
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
                                    <a href="#" className="accordionItemMobile">
                                        {Sub.subcategory_name}
                                    </a>
                                </li>
                            })
                        }

                    </ul>
                </div>
            </div>
        )

    })

    return (
        <div className="accordionMenuDivMobile">
            <div className="accordionMenuDivInsideMobile">

                {MyView}


            </div>
        </div>

    );
};

export default MegaMenu;
