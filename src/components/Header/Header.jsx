import React from 'react'
import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from 'react';
import logo from '../../assets/shared/desktop/logo.svg'
import iconMenu from '../../assets/shared/tablet/icon-hamburger.svg'
import iconCart from '../../assets/shared/desktop/icon-cart.svg'
import Categorys from '../Categorys'
import Cart from './components/Cart';
import styles from './Header.module.scss'

const Header = ({ cart, removeAll, updateCart }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [showCart, setShowCart] = useState(false)

  if (showMenu === true || showCart === true){
    document.body.style.overflow = 'hidden'
  }else{
    document.body.style.overflow = 'visible'
  }

  const hideModal = () => {
    setShowCart(false)
    setShowMenu(false)
  }

  return (
    <div>
      <header className={useLocation().pathname === "/" ? styles.header : styles.header2}>
        <nav className={useLocation().pathname === "/" ? styles.nav : styles.nav2}>
          <img className={styles.iconMenu} src={iconMenu} alt="" onClick={() => setShowMenu(!showMenu)} />
          <img src={logo} alt="" className={styles.logo} />
          <div className={showMenu ? styles.modalLink : styles.hideModalLink}>
            <ul className={showMenu ? styles.listLink : styles.hideMenu}>
              <Categorys handleClick={hideModal} className={styles.categorys} />
              <Link to='/' className={styles.link}>Home</Link>
              <Link to='/Headphones' className={styles.link}>Headphones</Link>
              <Link to='/Speakers' className={styles.link}>Speakers</Link>
              <Link to='/Earphones' className={styles.link}>Earphones</Link>
            </ul>
          </div>
          <img className={styles.iconCart} src={iconCart} alt="" onClick={() => setShowCart(!showCart)} />
          <div className={showCart ? styles.modalCart : styles.hideModalCart}>
            <Cart cart={cart} removeAll={removeAll} handleClick={hideModal} updateQuantity={updateCart} />
          </div>
        </nav>  
      </header>
      <Outlet />  
    </div>
  )
}

export default Header