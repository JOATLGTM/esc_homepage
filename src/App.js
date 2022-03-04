import NavBar from './components/NavBar/NavBar'
import CarouselESC from './components/CarouselESC';
import ShopLinks from './components/ShopLinks'
import ProductList from './components/ProductList'
import 'bootstrap/dist/css/bootstrap.min.css';
import callie from './assets/callie.jpg'
import Caroline from './assets/Caroline.jpg'
import Charlotte from './assets/Charlotte.jpg'
import Lightmyfire from './assets/Lightmyfire.jpg'
import Loveme from './assets/Loveme.jpg'
import Loveyou from './assets/Loveyou.jpg'
import Pandoraskiss from './assets/Pandoraskiss.jpg'
import Peytonsbagofhearts from './assets/Peytonsbagofhearts.jpg'
import suckerforyou from './assets/suckerforyou.jpg'
import valentinepostman from './assets/valentinepostman.jpg'
import vickisvalentine from './assets/vickisvalentine.jpg'
import './app.css'

const information = [
  {
    img: `${callie}`,
    price: 37.50,
    name: 'Callie',
    alt: 'Callie'
  },
  {
    img: `${Caroline}`,
    price: 31.25,
    name: 'Caroline',
    alt: 'Caroline'
  },
  {
    img: `${Charlotte}`,
    price: 50.00,
    name: 'Charlotte',
    alt: 'Charlotte'
  },
  {
    img: `${Lightmyfire}`,
    price: 45.00,
    name: 'Light my fire',
    alt: 'Light my fire'
  },
  {
    img: `${Loveme}`,
    price: 41.25,
    name: 'Love me',
    alt: 'Love me'
  },
  {
    img: `${Loveyou}`,
    price: 41.25,
    name: 'Love you',
    alt: 'Love you'
  },
  {
    img: `${Pandoraskiss}`,
    price: 62.50,
    name: 'Pandoras kiss',
    alt: 'Pandoras kiss'
  },
  {
    img: `${Peytonsbagofhearts}`,
    price: 37.50,
    name: 'Peytons bag of hearts',
    alt: 'Peytons bag of hearts'
  },
  {
    img: `${suckerforyou}`,
    price: 46.50,
    name: 'Sucker for You',
    alt: 'Sucker for You'
  },
  {
    img: `${valentinepostman}`,
    price: 37.50,
    name: 'Valentine Postman',
    alt: 'Valentine Postman'
  },
  {
    img: `${vickisvalentine}`,
    price: 37.50,
    name: `Vicki's Valentine`,
    alt: `Vicki's Valentine`
  },
]

function App() {
  return (
    <div className="main">
      <NavBar />
      <CarouselESC />
      <ShopLinks />
      <div className="product-items">
        {information.map(info => {
          return <ProductList img={info.img} alt={info.alt} name={info.name} price={info.price} />
        })}
      </div>
    </div>
  );
}

export default App;