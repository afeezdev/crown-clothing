import React from 'react';

import './contactUs.styles.scss';

const phoneStyle = {
    color: 'black',
    fontSize: 20,
    marginTop: '1em',
    }

const ContactUs = () => (
    <div className="contact-us-component">
        <div className="contact-us">
            <div style = {phoneStyle}>
                <span role="img" aria-label="phone"> &#128222;</span>
            </div>
            <h4>Talk to Sales</h4> <br/>
            <div>Just pick up the number to chat with the developer</div>    
            <br /><br />
            <div>+234 8167089828 </div>
        </div>
    </div>
)

export default ContactUs;