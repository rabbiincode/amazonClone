import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../contextApi/reducer';
import { useStateValue } from '../contextApi/StateProvider';
import './_subtotal.scss'

const SubTotal = () => {

  const [{basket}, dispatch] = useStateValue()

  return(
     <div className='subtotal'>
       <CurrencyFormat
         renderText={(value) => (
           <>
             <p>
               {/* here also */}
               SubTotal ({basket.length} items): <strong>{value}</strong>
             </p>
             <small className='subtotal-gift'>
              <input type="checkbox"/>
              This order contains a gift
             </small>
           </>
         )}
         decimalScale={2}
         value={getBasketTotal(basket)} //place the currency value in here
         displayType={'text'}
         thousandSeparator={true}
         prefix={'$'}
       />

       <button>Proceed to Checkout</button>
     </div>
  )    
};

export default SubTotal;
