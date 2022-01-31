import moment from 'moment';
import CurrencyFormat from 'react-currency-format';
import BasketItem from '../checkOut/BasketItem';
import { getBasketTotal } from '../contextApi/reducer';
import { useStateValue } from '../contextApi/StateProvider';
import './_order.scss'

const Order = () => {

 const [{basket, user}, dispatch] = useStateValue()

  return (
    <div className="order">
     <h2 order-heading>Order</h2>
     <p>
       {moment.unix(Order.data.created).format('MMMM Dd YYYY h:mma')}
     </p>
     {Order.data.basket?.map(item => (
         <BasketItem 
            image={item.image} 
            name={item.name} 
            price={item.price} 
            ratings={item.ratings} 
            id={item.id}
            key={item.id}
            hideButton
         />
     ))}

     <CurrencyFormat
        renderText={(value) => (
          <h3 className='order-total'>Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} //place the currency value in here
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
     />


    </div>
  )
};

export default Order;
