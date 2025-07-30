import React, { useEffect, useRef, useState } from 'react';
import './Header.scss';
import Navlogo from '../../img/logo-nav.png';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [vWidth, setVWidth] = useState(window.innerWidth);
  const [active, setActive] = useState(1);
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [direction, setDirection] = useState('forward');
  const [prevIndex, setPrevIndex] = useState(1);

  const indicatorRef = useRef(null);
  const itemRefs = useRef([]);

  const location = useLocation(); // 👈 добавлено

  useEffect(() => {
    const handleResize = () => setVWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const currentItem = itemRefs.current[active - 1];
    if (currentItem && indicatorRef.current) {
      const { offsetLeft, offsetWidth } = currentItem;
      indicatorRef.current.style.left = `${offsetLeft}px`;
      indicatorRef.current.style.width = `${offsetWidth}px`;
      indicatorRef.current.style.transform = direction === 'backward' ? 'scaleX(-1)' : 'scaleX(1)';
      indicatorRef.current.classList.add('drive');

      setTimeout(() => {
        indicatorRef.current?.classList.remove('drive');
      }, 500);
    }
  }, [active, direction, vWidth, burgerOpen]);

  useEffect(() => {
    const match = menuItems.find(item => item.to === location.pathname);
    if (match && match.id !== active) {
      setDirection(match.id < active ? 'backward' : 'forward');
      setPrevIndex(match.id);
      setActive(match.id);
    }
  }, [location.pathname]); // 👈 добавлено

  const handleClick = (index) => {
    if (index < prevIndex) {
      setDirection('backward');
    } else {
      setDirection('forward');
    }
    setPrevIndex(index);
    setActive(index);
    if (vWidth <= 600) setBurgerOpen(false);
  };

  const menuItems = [
    { id: 1, label: 'Home', to: '/' },
    { id: 2, label: 'About', to: '/about' },
    { id: 3, label: 'Location', to: '/loc' },
    { id: 4, label: 'News', to: '/news' },
    { id: 5, label: 'Contact', to: '/contact' },
  ];

  return (
    <div className='Header'>
      <div className='container'>
        <nav>
          <div className='logo scroll-left'>
            <Link className='logo' to='/'>
              <img src={Navlogo} alt='Gross logo' />
              <h2>Gross</h2>
            </Link>
          </div>

          <ul className={`nav-list ${vWidth <= 600 ? (burgerOpen ? 'mobile open scroll-right' : 'mobile scroll-right') : 'desktop scroll-right'}`}>
            {menuItems.map((item, i) => (
              <li
                key={item.id}
                ref={(el) => (itemRefs.current[i] = el)}
                className={active === item.id ? 'active' : ''}
              >
                <Link onClick={() => handleClick(item.id)} to={item.to}>{item.label}</Link>
              </li>
            ))}
            <li>
              <button className='btn-all-s'>
                <i className='bi bi-gear'></i>
              </button>
            </li>
            <div ref={indicatorRef} className='nav-car'></div>
          </ul>

          {vWidth <= 600 && (
            <button className='burger-toggle' onClick={() => setBurgerOpen(!burgerOpen)}>
              <i className='bi bi-list'></i>
            </button>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Header;
