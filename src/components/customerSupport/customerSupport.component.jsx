import React from 'react';

import './customerSupport.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

const feedbackStyle = {
    color: 'black',
    fontSize: 20,
    marginTop: '1em',
}

const CustomerSupport = () => (
    <div className="customer-support-component">
        <div className="customer-support">
            <div style={feedbackStyle}>&#9993;</div>
            <h4>Fill out the form below for feedback</h4>    
        </div>
        {/* <FormInput 
            type='password'
            name='password'
            label='Password'
            required
            /> */}
        <CustomButton inverted>Submit</CustomButton>
    </div>
)

export default CustomerSupport;