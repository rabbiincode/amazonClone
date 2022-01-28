import SearchIcon from '@material-ui/icons/Search';
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { LocationOnOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStateValue } from '../contextApi/StateProvider';
import './_header.scss'
import { auth } from '../../firebase';


const Header = () => {

  const [{basket, user}, dispatch] = useStateValue()

  const handleAuth = () => {
    if (user) {
      auth.signOut()
    }
  }

 return (
  <div className='header'>
    <Link to='/' style={{ textDecoration: 'none' }}>
      <img src="images/header/amazon2.jpg" alt="image" className='img'/>
    </Link>
    
    <div className="deliver">
      <span className="location"><LocationOnOutlined/></span>
      <div className="place">
        <span className="place-2" style={{color: 'lightGray'}}>Deliver to</span>
        <span className="place-3">Nigeria</span>
      </div>
    </div>

    <div className="header-search">   
       All<ArrowDropDownIcon style={{color: 'Gray'}}/>
       <input type="text" className='search-input'/>
       <SearchIcon className='search-icon' style={{ fontSize: 20 }}/>
    </div>

    <div className="header-nav">

      <div className="row row-1">
       <img src="images/header/flag.png" alt=""className='flag'/>
       <ArrowDropDownIcon className='flag-push'/>
      </div>

      <Link to={!user && '/signup'} style={{ textDecoration: 'none' }}>
        <div onClick={handleAuth} className="option">
          <span className="option-2">
            {user ? 'Sign Out' : 'Hello, Sign in'}
          </span>
          <span className="option-3 row">
            Account & Lists <ArrowDropDownIcon style={{ marginBottom: -2, marginLeft: -4, color: 'lightGray' }}/>
          </span>
        </div>
      </Link>

      <div className="option">
       <span className="option-2">
         Returns
       </span>
       <span className="option-3">
         & Orders
       </span>
      </div>

      <Link to='/checkout' style={{ textDecoration: 'none' }}>
        <div className="row row-2">
          <span className="basket-count">{basket?.length}</span>
          <img src="images/header/shop.png" alt="" className='cart'/>          
          <span className="row-3">Cart</span>
        </div>
      </Link>

    </div>

  </div>
 )
}

export default Header
