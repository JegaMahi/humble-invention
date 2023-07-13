import './App.css';
import Sidebar from './components/menu/Sidebar';
import Trending from './components/trending/Trending';
import Categories from './components/categories/Categories';
import Testimonial from './components/testimonials/Testimonial';
import Footer from './components/footer/Footer';
import Banner from './components/banner/Banner';
import Trending1 from './components/trending1/Trending1';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
 
      <Router>
      <Sidebar />
      <Routes>
  
        <Route path='/trending' exact Component={Trending1}/>
        <Route path='/categories' exact Component={Categories}/>
      </Routes>
      </Router>
     <Banner />
     <Trending/>
     <Categories />
     <Testimonial />
     <Footer />
    
    </div>
  );
}

export default App;
