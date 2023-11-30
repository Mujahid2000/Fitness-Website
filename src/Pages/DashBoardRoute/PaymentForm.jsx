import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';

import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const stripePromise  = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY)
const PaymentForm = () => {

  const {salary, _id, name} = useParams();
  
  

  return (
    <div>
      <Helmet>
                <title>Dashboard || Payment</title>
      </Helmet>
    <div>
      <h2 className='text-5xl font-mono font-semibold text-center mt-5'>Payment Here</h2>
      <Elements stripe={stripePromise} >
        <CheckOutForm salary={salary} trainerId={_id} name={name}></CheckOutForm>
      </Elements>
    </div>
    </div>
  );
};

export default PaymentForm;
