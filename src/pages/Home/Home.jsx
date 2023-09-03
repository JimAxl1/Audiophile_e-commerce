import React from 'react'
import Categorys from '../../components/Categorys'
import Aside from '../../components/Aside'
import Footer from '../../components/Footer';
import Picture from '../../components/Picture'
import { Link } from "react-router-dom";
import zx9SpeakerMobile from '../../assets/home/mobile/image-speaker-zx9.png'
import zx9SpeakerTablet from '../../assets/home/tablet/image-speaker-zx9.png'
import zx9SpeakerDesktop from '../../assets/home/desktop/image-speaker-zx9.png'
import yx1HeadphonesMobile from '../../assets/home/mobile/image-earphones-yx1.jpg'
import yx1HeadphonesTablet from '../../assets/home/tablet/image-earphones-yx1.jpg'
import yx1HeadphonesDesktop from '../../assets/home/desktop/image-earphones-yx1.jpg'
import styles from './Home.module.scss'
import "@fontsource/manrope";

const Home = () => {

  return (
    <main className={styles.main}>
      <article className={styles.header}>
        <section className={styles.section}>
          <p className={styles.new}>NEW PRODUCT</p>
          <h2 className={styles.productName}>XX99 MARK II HEADPHONES</h2>
          <p className={styles.text}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <Link to='/xx99-mark-two-headphones' className={styles.link}>SEE PRODUCT</Link>
        </section>
      </article>
      <Categorys className={styles.categorys} />
      <article className={styles.article}>
        <div className={styles.product1}>
          <Picture imageMobile={zx9SpeakerMobile}
            imageTablet={zx9SpeakerTablet}
            imageDesktop={zx9SpeakerDesktop}
            alt='jajaj'
            className='homeZx9Speaker'
          />
          <div className={styles.product1Info}>
            <h3 className={styles.productName}>ZX9 SPEAKER</h3>
            <p className={styles.text}>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <Link to='/zx9-speaker' className={styles.link}>SEE PRODUCT</Link>            
          </div>
        </div>
        <div className={styles.product2}>
          <h3 className={styles.productName}>ZX7 SPEAKER</h3>
          <Link to="/zx7-speaker" className={styles.link}>SEE PRODUCT</Link>
        </div>
        <div className={styles.product3}>
          <Picture imageMobile={yx1HeadphonesMobile}
            imageTablet={yx1HeadphonesTablet}
            imageDesktop={yx1HeadphonesDesktop}
            alt='jajajaj'
            className='homeYx1Headphones'
          />
          <div className={styles.container}>
            <h3 className={styles.productName}>YX1 EARPHONES</h3>
            <Link to="/yx1-earphones" className={styles.link}>SEE PRODUCT</Link>
          </div>
        </div>
      </article>
      <Aside />
      <Footer />
    </main>
  )
}

export default Home