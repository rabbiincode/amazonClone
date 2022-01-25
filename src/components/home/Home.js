import Products from '../products/Products'
import './_home.scss'

const Home = () => {
 return (
  <div className='home'>
    <div className="home-container">
      <img 
        src="images/home/image2.jpg"
        alt="image"
        className='img' 
      />

      <div className="row">
        <Products image={'images/home/product1.jpg'} 
                  name={'Gaming Laptop Cover Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, cupiditate.'} 
                  price={'20.99'} ratings={'----'} id={'1'}/>
        <Products image={'images/home/gaming.jpg'} 
                  name={'Gaming Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, cupiditate.consectetur adipisicing elit. Iusto, cupiditate.'} 
                  price={'30.00'} ratings={'----'} id={'2'}/>
        <Products image={'images/home/gaming.jpg'} name={'mouse'} price={'20.99'} ratings={'-----'} id={'3'}/>
      </div>

      <div className="row">
        <Products image={'images/home/product1.jpg'} name={'Laptop'} price={'230.40'} ratings={'----'} id={'4'}/>
        <Products image={'images/home/gaming.jpg'} name={' Hp Laptop'} price={'155.00'} ratings={'-----'} id={'5'}/>
        <Products image={'images/home/product1.jpg'} name={'Charging Cable'} price={'10.59'} ratings={'-----'} id={'6'}/>
      </div>

      <div className="row">
        <Products image={'images/home/product1.jpg'} name={'USB Adapter'} price={'5.99'} ratings={'----'} id={'7'}/>
        <Products image={'images/home/product1.jpg'} name={'Samsung S7'} price={'100.00'} ratings={'-----'} id={'8'}/>
      </div>

      <div className="row">
        <Products image={'images/home/gaming.jpg'} name={'Wireless Charger'} price={'50.55'} ratings={'---'} id={'9'}/>
      </div>

    </div>
  </div>
 )
}

export default Home
