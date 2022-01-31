import { useStateValue } from '../contextApi/StateProvider';
import BasketItem from '../checkOut/BasketItem';
import './_payment.scss'
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../contextApi/reducer';
import axios from 'axios';
import { db } from '../../firebase'

const Payment = () => {

 const [{basket, user}, dispatch] = useStateValue()

 const navigate = useNavigate()

 const stripe = useStripe();
 const elements = useElements();

 const [disabled, setDisabled] = useState(true)
 const [error, setError] = useState(null)
 const [processing, setProcessing] = useState('')
 const [succeeded, setSucceeded] = useState(false)
 const [clientSecret, setClientSecret] = useState(true)

 useEffect(() => {
  // generate the special stripe secret which allows us to charge a customer
  const getClientSecret = async () => {
    const response = await axios({
       method: 'post',
      // stripe expects the total in a curriences subunit
       url: `/payments/create?total=${getBasketTotal(basket) * 100}`
    })
    setClientSecret(response.data.clientSecret)
  }

  getClientSecret()
 }, [basket])

 console.log('The Secret is', clientSecret);

 const handleSubmit = async (e) => {
    e.preventDefault()
    setProcessing(true)

    const payload = await stripe.confirmCardPayment(clientSecret, {
       payment_method: {
          card: elements.getElement(CardElement)
       }
    }).then(({ paymentIntent }) => {
      // paymentIntent = payment confirmation

      db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
           basket: basket,
           amount: paymentIntent.amount,
           created: paymentIntent.created
        })

      setSucceeded(true)
      setError(null)
      setProcessing(false)

      dispatch({
         type: 'EMPTY_BASKET'
      })

      // we use 'replace' instead of 'push' b/c we don't want
      // people to come back to the page after payment even
      // if they go back in their browsers
      navigate.replace('./orders')
    })
 }

 const handleChange = e => {
  // listen for changes in the cardElement
  // display any errors as the customer types their card details
  setDisabled(e.empty)
  setError(e.error ? e.error.message : '')
 }

  return (
    <div className="payment">
      <div className="payment-container">

        <h1>
          Checkout (
            <Link to='/checkout' style={{ textDecoration: 'none' }}>{basket.length} items</Link>
          )
        </h1>

        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <p>{user?.email}</p>
            <p>123 lane road</p>
            <p>Enugu Rd</p>
          </div>
        </div>

        <div className="payment-section">
          <div className="payment-title">
             <h3>Review items and delivery</h3>
          </div>
          <div className="payment-items">
             {basket.map(item => (
                <BasketItem 
                  image={item.image} 
                  name={item.name}
                  price={item.price} 
                  ratings={item.ratings} 
                  id={item.id}
                  key={item.id}
                />
             ))}
          </div>
        </div>

        {/* payment method */}
        <div className="payment-section">
           <div className="payment-title">
              <h3>Payment Method</h3>
           </div>
           <div className="payment-details">
              {/* stripe details */}
              <form onSubmit={handleSubmit}>
                 <CardElement onChange={handleChange}/>

                 <div className="payment-price-container">
                    <CurrencyFormat
                       renderText={(value) => (
                          <>
                           <h3>Order Total: {value}</h3>
                          </>
                        )}
                        decimalScale={2}
                        value={getBasketTotal(basket)} //place the currency value in here
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                    />
                    <button disabled={processing || disabled || succeeded}>
                       <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                    </button>

                    <div>
                      {/* show error */}
                      {error && <div>{error}</div>}
                    </div>
                 </div>

              </form>
           </div>
        </div>

      </div>
    </div>
  )
};

export default Payment;
