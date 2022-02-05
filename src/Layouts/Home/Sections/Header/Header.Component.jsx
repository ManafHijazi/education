import React from 'react';
import './Header.Style.scss';

export const HeaderComponent = () => {

    return (
        <div className="header-wrapper">
            <div className="header-content-wrapper">
                <div className="main-header-content-wrapper">
                    <div className="main-header-content">
                        main
                    </div>
                </div>
                <div className="sub-header-content-wrapper">
                    <div className="sub-header-content">
                        <h1 className="sub-title-wrapper">
                            Courses and Schedules
                        </h1>
                        <div className="sub-breadcrumbs-wrapper">
                            <div className="breadcrumb-item is-red">Home</div>
                            <div className="separate-item"> > </div>
                            <div className="breadcrumb-item is-red">Academics</div>
                            <div className="separate-item"> > </div>
                            <div className="breadcrumb-item">Courses and Schedules</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
