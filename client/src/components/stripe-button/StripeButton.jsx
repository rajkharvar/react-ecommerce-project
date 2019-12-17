import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

export const StripeButton = ({ price }) => {
  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: price * 100,
        token: token
      }
    })
      .then(response => {
        alert('succesful payment');
      })
      .catch(error => {
        console.log('Payment Error: ', error);
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
  };
  return (
    <div>
      <StripeCheckout
        label='Pay Now'
        name='React Ecommerce project'
        currency='USD'
        billingAddress
        shippingAddress
        panelLabel='Pay now'
        amount={price * 100}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        description={`Your total is $${price}`}
        token={onToken}
      />
    </div>
  );
};
