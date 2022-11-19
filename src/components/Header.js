import React from 'react'
import Home from '../components/pages/Home/Home';
import { Link } from 'react-router-dom'
import classes from './Header.module.css';

const Header = props => {
  return <header className={classes.header}>
    <Link to="/" element={<Home />}>
      <span className={classes['header__icon']}>
        <i className="fas fa-home"></i>
      </span>
    </Link>
  </header>
}

export default Header;