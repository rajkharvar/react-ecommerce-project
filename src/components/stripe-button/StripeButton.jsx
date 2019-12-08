import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { stripePublishableKey } from '../../.env.local/keys';

export const StripeButton = ({ price }) => {
  const onToken = token => {
    console.log(token);
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
        stripeKey={stripePublishableKey}
        token={onToken}
      />
    </div>
  );
};
