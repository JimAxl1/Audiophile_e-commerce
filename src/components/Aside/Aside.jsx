import React from 'react'
import imageMobile from '../../assets/shared/mobile/image-best-gear.jpg'
import imageTablet from '../../assets/shared/tablet/image-best-gear.jpg'
import imageDesktop from '../../assets/shared/desktop/image-best-gear.jpg'
import styles from './Aside.module.scss'
import "@fontsource/manrope";

const Aside = () => {
  return (
    <aside className={styles.container}>
      <picture className={styles.picture}>
        <source srcSet={imageDesktop} media='(min-width: 992px)' />
        <source srcSet={imageTablet} media='(min-width: 768px)' />
        <img src={imageMobile} alt="" className={styles.image}/>
      </picture>
      <div className={styles.containerText}>
        <p className={styles.slogan}>Bringing you the <mark className={styles.orange}>best</mark> audio gear</p>
        <p className={styles.text}>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
      </div>
    </aside>
  )
}

export default Aside