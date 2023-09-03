import React from 'react'
import "@fontsource/manrope";
import { Link } from "react-router-dom";
import styles from './Footer.module.scss'
import logo from '../../assets/shared/desktop/logo.svg'

const Footer = () => {
  const goUp = () => {
    window.scrollTo({
      top:0, behavior:"smooth"
    })
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img src={logo} alt="" className={styles.logoCompany}/>
        <nav className={styles.containerLink}>
          <ul className={styles.listLink}>
            <Link to='/' className={styles.link} onClick={goUp}>Home</Link>
            <Link to='/Headphones' className={styles.link} onClick={goUp}>Headphones</Link>
            <Link to='/Speakers' className={styles.link} onClick={goUp}>Speakers</Link>
            <Link to='/Earphones' className={styles.link} onClick={goUp}>Earphones</Link>
          </ul>
        </nav>
        <p className={styles.description}>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
        <p className={styles.copyright}>Copyright 2021. All Rights Reserved</p>
        <div className={styles.containerRRSS}>
          <a alt="facebook logo" href='https://www.facebook.com' className={`${styles.logoRRSS} ${styles.facebook}`} target='_blank' rel="noreferrer"><i /></a>
          <a alt="twitter logo" className={`${styles.logoRRSS} ${styles.twitter}`} href='https://www.twitter.com' target='_blank' rel="noreferrer"><i /></a>
          <a alt="instagram logo" className={`${styles.logoRRSS} ${styles.instagram}`} href='https://www.instagram.com' target='_blank' rel="noreferrer"><i /></a>        
        </div>
      </div>
    </footer>
  )
}

export default Footer