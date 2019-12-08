import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export const StripeButton = ({ price }) => {
  const onToken = token => {
    alert('Payment successful');
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
