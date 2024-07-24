import { Route , Routes } from 'react-router-dom'
import './App.css';
import Home from './Home'
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/aboutUs' element={<About />} />
      <Route path='/contact' element={<Contact />} />
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
