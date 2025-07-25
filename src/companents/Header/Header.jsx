import React, { useEffect, useState } from 'react'
import './Header.scss'
import Navlogo from '../../img/logo-nav.png'
import { Link } from 'react-router-dom'
import { Squash as Hamburger } from 'hamburger-react'

  

function Header() {
    const [vWidth, setVWidth] = useState(window.innerWidth);

useEffect(() => {
    const handleResize = () => setVWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className='Header'>
        <div className="container">
            <nav  >
                <div className="logo">
                    <Link className='logo'>
                    <img src={Navlogo} alt="Gross logo" />
                    <h2>Gross</h2>
                    </Link>
                </div>
                <button  className={vWidth <= 600 ? "btn  dropdown-toggle" : 'none'}  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i  className="bi bi-list btn-nav-list"></i>
                </button>
                     

                <ul  className={vWidth <= 600 ? " dropdown-menu nav-list-li  " : "nav-list"} aria-labelledby="dropdownMenuButton1">
                    <li>
                        <Link  to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link  to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link  to={'/loc'}>Location</Link>
                    </li>
                    <li>
                        <Link  to={'/news'}>News</Link>
                    </li>
                    <li>
                        <Link  to={'/contact'}>Contact</Link>
                    </li>
                   <li>
                        <button className='btn-all-s'><i class="bi bi-gear"></i></button>

                   </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header