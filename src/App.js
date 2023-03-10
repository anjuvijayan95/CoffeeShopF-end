import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Products from './components/Products'
import Review from './components/Review'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Menu/>
      <Products/>
      <Review/>
      <Contact/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
