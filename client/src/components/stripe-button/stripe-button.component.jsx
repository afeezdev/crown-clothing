 import React from 'react';
 import StripeCheckout from 'react-stripe-checkout';
 import axios from 'axios';

 const StripeCheckoutButton = ({ price }) => {
     const priceForStripe = price * 100;
    const publishableKey = "pk_test_sSVDzUWshDuAK3s7HmPUKQa800B93oaB8A";

const onToken = token => {
  axios({
    url: "http://localhost:5000/payment",
    method: "post",
    data: {
      amount: priceForStripe,
      token,
    },
  })
    .then((response) => {
      alert("Payment successful");
    })
    .catch((error) => {
      console.log("Payment error: ", error);
      alert(
        "There was an issue with your payment. Please make sure you use the provided card"
      );
    });
};

// using fetch

// const onToken = token => {
//   async function postData(url = '', data = {}) {
//     const response = await fetch(url, {
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//       mode: 'cors', // no-cors, *cors, same-origin
//       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: 'same-origin', // include, *same-origin, omit
//       headers: {
//         'Content-Type': 'application/json'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: 'follow', // manual, *follow, error
//       referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//       body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
//   }

//   postData('http://localhost:5000/payment', { 
//     amount: priceForStripe,
//     token
//    })
//     .then(response => {
//     alert('Payment successful')
//   }).catch(error => {
//     // console.log('Payment error: ', JSON.parse(error));
//     alert(
//       'There was an issue with your payment. Please make sure you use the provided card'
//     )
//   })
// }

 return (
   <StripeCheckout
     label="Pay Now"
     name="CROWN CLOTHING"
     billingAddress
     shippingAddress
     image="https://sendeyo.com/up/d/f3eb2117da"
     description={`Your total is $${price}`}
     amount={priceForStripe}
     panelLabel='Pay Now'
     token={onToken}
     stripeKey={publishableKey}
   />
 );    

}

export default StripeCheckoutButton;