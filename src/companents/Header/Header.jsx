import React from 'react'
import './Header.scss'
import Navlogo from '../../img/logo-nav.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='Header'>
        <div className="container">
            <nav>
                <div className="logo">
                    <Link className='logo'>
                    <img src={Navlogo} alt="Gross logo" />
                    <h2>Gross</h2>
                    </Link>
                </div>
                <ul className='nav-list'>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/loc'}>Location</Link>
                    </li>
                    <li>
                        <Link to={'/news'}>News</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contact</Link>
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