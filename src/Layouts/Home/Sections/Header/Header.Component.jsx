import React from 'react';
import logoImage from '../../../../Assets/Images/temple-logo-t-box.svg'
import templeIcon from '../../../../Assets/Images/temple-t-icon.svg'
import {Button, InputAdornment, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import './Header.Style.scss';

export const HeaderComponent = () => {

    return (
        <div className="header-wrapper">
            <div className="header-content-wrapper">
                <div className="main-header-content-wrapper">
                    <div className="main-header-content">
                        <div className="main-upper-wrapper">
                            <div className="main-upper-image">
                                <img alt="logo" src={logoImage}/>
                            </div>
                            <div className="main-upper-content">
                                <div className="upper-content-section is-with-border">
                                    <div className="upper-content-sub-title">Explore Temple’s Schools and Colleges</div>
                                    <div className="nav-items-wrapper">
                                        <div className="upper-content-item">Visit</div>
                                        <div className="upper-content-item">Apply</div>
                                        <div className="upper-content-item">Alumni</div>
                                        <div className="upper-content-item">TUportal</div>
                                        <Button>
                                            <span>SUPPORT TEMPLE</span>
                                            <img alt="temple-icon" src={templeIcon}/>
                                        </Button>
                                    </div>
                                </div>
                                <div className="upper-content-section">
                                    <div className="upper-content-title">Temple University</div>
                                    <div className="upper-content-search-wrapper">
                                        <TextField
                                            size="small"
                                            label="Search"
                                            placeholder="Search"
                                            InputProps={{
                                                endAdornment:
                                                    <InputAdornment position="end">
                                                       <SearchIcon/>
                                                    </InputAdornment>,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="main-lower-wrapper">
                            <div className="main-lower-item">
                                <span>Admissions</span>
                            </div>
                            <div className="main-lower-item">
                                <span>Academics</span>
                            </div>
                            <div className="main-lower-item">
                                <span>Life at Temple</span>
                            </div>
                            <div className="main-lower-item">
                                <span>Research</span>
                            </div>
                            <div className="main-lower-item">
                                <span>Athletics</span>
                            </div>
                            <div className="main-lower-item">
                                <span>About</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sub-header-content-wrapper">
                    <div className="sub-header-content">
                        <h1 className="sub-title-wrapper">
                            Courses and Schedules
                        </h1>
                        <div className="sub-breadcrumbs-wrapper">
                            <div className="breadcrumb-item is-red">Home</div>
                            <div className="separate-item"> ></div>
                            <div className="breadcrumb-item is-red">Academics</div>
                            <div className="separate-item"> ></div>
                            <div className="breadcrumb-item">Courses and Schedules</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
