import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import SearchBar from './Components/Searchbar';
import Carousel, {CarouselItem} from './Components/Carousel';
import Categories from './Components/Categories';
import ProductsCarousel, { ProductsItem } from './Components/ProductsCarousel';
import Cheese from './cheese.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <section className="main">
        <SearchBar />
        <Carousel>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
          <CarouselItem>Item 3</CarouselItem>
        </Carousel>
        <Categories />
        <ProductsCarousel title="Recently Viewed">
          <ProductsItem>
            <img src={Cheese} />
            <h3>Mexican Feta Cheese</h3>
            <p className="price">$9.99</p>
            <a href="" className="more">Know More</a>
          </ProductsItem>
          <ProductsItem>
            <img src={Cheese} />
            <h3>Marble cheddar cheese sticks</h3>
            <p className="price">$9.99</p>
            <a href="" className="more">Know More</a>
          </ProductsItem>
          <ProductsItem>
            <img src={Cheese} />
            <h3>garden herbs cheddar cheese sticks</h3>
            <p className="price">$9.99</p>
            <a href="" className="more">Know More</a>
          </ProductsItem>
          <ProductsItem>
            <img src={Cheese} />
            <h3>garlic & herb cheddar cheese block</h3>
            <p className="price">$9.99</p>
            <a href="" className="more">Know More</a>
          </ProductsItem>
          <ProductsItem>
            <img src={Cheese} />
            <h3>Mexican Feta Cheese</h3>
            <p className="price">$9.99</p>
            <a href="" className="more">Know More</a>
          </ProductsItem>
          <ProductsItem>
            <img src={Cheese} />
            <h3>Mexican Feta Cheese</h3>
            <p className="price">$9.99</p>
            <a href="" className="more">Know More</a>
          </ProductsItem>
          <ProductsItem>
            <img src={Cheese} />
            <h3>Mexican Feta Cheese</h3>
            <p className="price">$9.99</p>
            <a href="" className="more">Know More</a>
          </ProductsItem>
        </ProductsCarousel>
      </section>
    </div>
  );
}

export default App;
