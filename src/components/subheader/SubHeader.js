import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import './_subheader.scss'

const SubHeader = () => {
  return (
   <div className="subheader">
     <div className="head">
       <div className="hamburger">
         <span className="line1"></span>
         <span className="line2"></span>
         <span className="line3"></span>
       </div>
       <span className='all'>All</span>
     </div>

     <div className="head">Today's Deal</div>
     <div className="head">Buy Again</div>
     <div className="head">Customer Service</div>
     <div className="head head-1">
       Browsing History
       <span><ArrowDropDownIcon style={{ marginTop: 6, color: 'Gray'}}/></span>
     </div>
     <div className="head">Gift Cards</div>
     <div className="head">Amazon.com</div>
     <div className="head">Registry</div>
     <div className="head">Sell</div>
   </div>
  )
};

export default SubHeader;
