import React from 'react';

import CustomerSupport from '../../components/customerSupport/customerSupport.component';
import ContactUs from '../../components/contactUs/contactUs.component';

import './contactPage.styles.scss';

const ContactPage = () => (
    <div className= "contact-page">
        <div className="contact-content">
            <div className="contact-message">
                <h2>Get in touch</h2>
                <p>Want to get in touch? We'd love to hear from you. Here's how you can reach us.....</p>
                <div className="contact-components">
                    <ContactUs />
                </div>
            </div>
        </div>
    </div>
)

export default ContactPage;