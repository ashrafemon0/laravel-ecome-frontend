import React from 'react';

const SliderLoding = (props) => {
    let isLoading = props.isLoading;

    return (
        <div className={isLoading}>

            <div className="row">
                <div className="col-3">
                    <div className="ph-row">
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>
                        <div className="ph-col-12"></div>

                    </div>

                </div>

                <div className="col-9 h-100">
                    <div className="ph-picture"></div>
                </div>

            </div>


        </div>
    );
};

export default SliderLoding;