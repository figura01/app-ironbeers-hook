import React, {useState, useEffect} from 'react';
import logoSvg from '../../assets/logo.svg';
import { Link } from 'react-router-dom' 
import { MenuIcon, XIcon } from '@heroicons/react/solid'

import classes from './Navbar.module.css';

const Navbar = props => {
  const [isOpen, setIsOpen] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
    setIsActive(!isActive)
  }

  const [width, setWidth] = useState(window.innerWidth);
  const handleCloseMenu = () => {
    setIsActive(!isActive)
    setTimeout(() => {
      setIsOpen(!isOpen)
    }, 300)
  }
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);
  

  return (
    <nav className={classes.navbar}>
      
   
      <div className={`${classes.brand}`}>
        <Link to="/" className={classes.brand__link}>
          <img className={classes.brand__logo} src={logoSvg} alt="Iron Beer" />
          <h1 className={classes.brand__text}>IronBeers</h1>
        </Link>
      </div>

      <ul className="flex w-full text-white justify-end px-2">
        <li className="flex px-2"><Link to="beers">All Beers</Link></li>
        <li className="flex px-2"><Link to="random-beer">Random Beer</Link></li>
        <li className="flex px-2"><Link to="new-beer">Create Beer</Link></li>
      </ul>
      {isOpen && (
        <ul className={isActive ? classes['open-menu'] : classes['close-menu']}>
          <li><Link to="beers">All Beers</Link></li>
          <li><Link to="random-beer">Random Beer</Link></li>
          <li><Link to="new-beer">Create Beer</Link></li>
        </ul>
      )}

      <div className={classes['burger-menu']}>
        <button type="button" className="bg-white rounded-md" onClick={ isActive ? handleCloseMenu : handleToggle}>
          { !isOpen ? <MenuIcon className="" /> : <XIcon /> }
        </button>
      </div>
    </nav>
  )
}

export default Navbar;