import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './companents/Footer/Footer';
import Header from './companents/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Location from './pages/Locations/Location';
import News from './pages/News/News';
import Contact from './pages/Contact/Contact';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedItems = document.querySelectorAll('.scroll-left, .scroll-right, .scroll-up');

    animatedItems.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Header /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/loc' element={<Location />} />
        <Route path='/news' element={<News />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
