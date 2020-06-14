import React from 'react';

//import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

import './with-spinner.styles.scss';


//Using Styled Component
// const WithSpinner = WrappedComponent => {
// const Spinner = ({ isLoading, ...otherProps }) => {
//     return isLoading ? (
//         <SpinnerOverlay>
//             <SpinnerContainer />
//         </SpinnerOverlay>
//     ) : (
//         <WrappedComponent {...otherProps} />
//     )
//   };
//     return Spinner
// };


const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <div className="spinner-overlay">
            <div className="spinner-container" />
        </div>
    ) : (
            <WrappedComponent {...otherProps} />
        )
    };
    return Spinner
};

export default WithSpinner;