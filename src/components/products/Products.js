import { useStateValue } from '../contextApi/StateProvider';
import './_products.scss'

const Products = ({ image, name, price, ratings, id }) => {

  const [{ basket }, dispatch] = useStateValue()
  console.log('Hello', basket);

  const addToBasket = () => {
    //dispatch the item into the data layout
    dispatch({
      type: 'ADD_TO_BASKET',
        item:{
          image: image,
          name: name,
          price: price,
          ratings: ratings,
          id: id
        }
    })
  }

  return(
   <div className='products'>
    <div className="products-info">
      <p>{name}</p>
      <p className="price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className="rating">
        <p>{ratings}</p>
      </div>
    </div>

    <img src={image} alt="" />
    <button onClick={addToBasket}>Add to Basket</button>
   </div>
  )
};

export default Products;
