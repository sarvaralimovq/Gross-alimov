import React, { useEffect, useRef, useState } from 'react';
import './Header.scss';
import Navlogo from '../../img/logo-nav.png';
import headerCar from '../../img/header-car2.png';
import { Link } from 'react-router-dom';

function Header() {
  const [vWidth, setVWidth] = useState(window.innerWidth);
  const [active, setActive] = useState(1);
  const indicatorRef = useRef(null);
  const itemRefs = useRef([]);
  const [direction, setDirection] = useState('forward');
  const [prevIndex, setPrevIndex] = useState(1);

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
  }, [active, direction, vWidth]);

  const handleClick = (index) => {
    if (index < prevIndex) {
      setDirection('backward');
    } else {
      setDirection('forward');
    }
    setPrevIndex(index);
    setActive(index);
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
          <div className='logo'>
            <Link className='logo' to='/'>
              <img src={Navlogo} alt='Gross logo' />
              <h2>Gross</h2>
            </Link>
          </div>
          <ul className={vWidth <= 600 ? 'dropdown-menu nav-list-li' : 'nav-list'}>
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
        </nav>
      </div>
    </div>
  );
}

export default Header;
