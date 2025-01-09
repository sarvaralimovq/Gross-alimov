import { Route, Router, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './companents/Footer/Footer';
import Header from './companents/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Location from './pages/Locations/Location';
import News from './pages/News/News';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
    <Header/> 
       <Routes>
         <Route path='/'  element={<Home/>}/>
         <Route path='/about' element={<About/>} />
         <Route path='/loc' element={<Location/>} />
         <Route path='/news' element={<News/>} />
         <Route path='/contact' element={<Contact/>} />
         
       </Routes>
    <Footer/>
    </div>
  );
}

export default App;
