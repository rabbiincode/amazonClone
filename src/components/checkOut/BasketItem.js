import { useStateValue } from '../contextApi/StateProvider';
import './_basketitem.scss'

const BasketItem = ({ image, name, price, ratings, id }) => {

  const [{ basket }, dispatch] = useStateValue()

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id
    })
  }

  return (
    <div className="basketitem">
      <img src={image} alt="" className='image'/>
      <div className="basketitem-info">
        <p className="title">{name}</p>
        <p className="price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="ratings">{ratings}</div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  )
};

export default BasketItem;
