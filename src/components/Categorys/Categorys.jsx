import React from 'react'
import { Link, useLocation } from "react-router-dom";
import imageHeadphones from '../../assets/shared/desktop/image-category-thumbnail-headphones.png'
import imageSpeakers from '../../assets/shared/desktop/image-category-thumbnail-speakers.png'
import imageEarphones from '../../assets/shared/desktop/image-category-thumbnail-earphones.png'
import iconArrow from '../../assets/shared/desktop/icon-arrow-right.svg'
import styles from './Categorys.module.scss'
import "@fontsource/manrope";

const funcionChida = () => {
  window.scrollTo({
    top:0, behavior:"smooth"
  })
}

const Categorys = ({ handleClick, className }) => {
  let x = handleClick === undefined ? funcionChida : handleClick

  return (
    <nav className={`${styles.containerNav} ${className}`}>
      <ul className={styles.containerList}>
        <Link to='/Headphones' className={styles.containerLink} onClick={x}>
          <img src={imageHeadphones} alt="Headphones image" className={styles.image} />
          <div className={styles.container}>
            <h3 className={styles.category}>HEADPHONES</h3>
            <span className={styles.span}>
              <p className={styles.text}>SHOP</p>
              <img src={iconArrow} alt="arrow" />
            </span>
          </div>
        </Link>
        <Link to='/Speakers' className={styles.containerLink} onClick={x}>
          <img src={imageSpeakers} alt="Earphones image" className={styles.image} />
          <div className={styles.container}>
            <h3 className={styles.category}>SPEAKERS</h3>
            <span className={styles.span}>
              <p className={styles.text}>SHOP</p>
              <img src={iconArrow} alt="arrow" />
            </span>
          </div>
        </Link>
        <Link to='/Earphones' className={styles.containerLink} onClick={x}>
          <img src={imageEarphones} alt="Earphones image" className={styles.image} />
          <div className={styles.container}>
            <h3 className={styles.category}>EARPHONES</h3>
            <span className={styles.span}>
              <p className={styles.text}>SHOP</p>
              <img src={iconArrow} alt="arrow" />
            </span>
          </div>
        </Link>
      </ul>      
    </nav>
  )
}

export default Categorys