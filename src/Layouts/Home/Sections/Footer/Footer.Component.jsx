import React from 'react';
import footerLogo from '../../../../Assets/Images/temple-logo-horizontal.svg';
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
                            <li>Cherry &amp; White Directory</li>
                            <li>Maps &amp; Directions</li>
                            <li>Contact</li>
                            <li>Calendar</li>
                            <li>Policies</li>
                            <li>Social Media</li>
                            <li>TUportal</li>
                            <li>TUmail</li>
                            <li>Accessibility</li>
                            <li>Careers at Temple</li>
                            <li>Safety & Emergency Information</li>
                            <li>Ethics & Compliance</li>
                            <li>Privacy Statement</li>
                            <li>Professional Licensure Disclosures</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};
