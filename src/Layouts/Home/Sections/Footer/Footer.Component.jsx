import React from 'react';
import footerLogo from '../../../../Assets/Images/temple-logo-horizontal.svg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons'
import './Footer.Style.scss';

export const FooterComponent = () => {

    return (
        <footer className="footer-wrapper">
            <div className="footer-content">
                <div className="footer-right-section">
                    <div className="footer-logo">
                        <img alt="footer-logo" src={footerLogo}/>
                    </div>
                    <div className="footer-item">
                        <p>1801 N. Broad Street</p>
                        <p>Philadelphia, PA 19122 USA</p>
                    </div>
                    <div className="footer-item">
                        <p>(215) 204-7000</p>
                    </div>
                    <div className="footer-social-media">
                        <div className="social-media-title">Follow Temple University</div>
                    </div>
                    <div className="copy-right-wrapper">
                        <p>Copyright 2022, Temple University. All rights reserved.</p>
                        <p className="copy-right-body">
                            Please note that what you see here may reflect Temple under more normal circumstances. In
                            the event of a COVID-19 outbreak or other emergencies, public health measures like face
                            coverings and physical distancing requirements may be implemented to protect the health and
                            safety of our community.
                        </p>
                    </div>
                </div>
                <div className="footer-left-section">
                    <div className="item-list">
                        <ul className="footer-menu">
                            <li><a>Cherry &amp; White Directory</a></li>
                            <li><a>Maps &amp; Directions</a></li>
                            <li><a>Contact</a></li>
                            <li><a>Calendar</a></li>
                            <li><a>Policies</a></li>
                            <li><a>Social Media</a></li>
                            <li><a>TUportal</a></li>
                            <li><a>TUmail</a></li>
                            <li><a>Accessibility</a></li>
                            <li><a>Careers at Temple</a></li>
                            <li><a>Safety & Emergency Information</a></li>
                            <li><a>Ethics & Compliance</a></li>
                            <li><a>Privacy Statement</a></li>
                            <li><a>Professional Licensure Disclosures</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};
