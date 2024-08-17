/*eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async (tourId) => {
  const stripe = Stripe(
    'pk_test_51PoEqIAS5NXDVUEP22R5fjvqvgBZrFg2LMPEwtPKM2o1CIVbq86OQ1XGOD928v705yAQTw3SzlP5z0FjLdIluTUO00VzHczlYh',
  );
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/booking/checkout-session/${tourId}`,
    );
    console.log(session);

    //2) Create checkout form + charge the credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
    // window.location.replace(session.data.session.url);
  } catch (err) {
    console.log('Error creating checkout session', err);
    showAlert('error', err);
  }
};
