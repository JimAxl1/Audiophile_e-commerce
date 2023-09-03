import React from 'react'
import Categorys from '../../components/Categorys'
import Aside from '../../components/Aside'
import Footer from '../../components/Footer'
import Picture from '../../components/Picture'
import { Link } from "react-router-dom"
import OrderProduct from './OrderProduct'
import styles from './Product.module.scss'
import GoBack from '../../components/GoBack';
import "@fontsource/manrope";
const preLink = require.context('../../', true)

const Product = ({ data, handleFunction }) => {
  let name = data.name.split(' ').slice(0, -1).join(' '); 
  let x = {image: `./image-${data.slug}.jpg`, product: name, price: data.price, id: data.id}

  const goUp = () => {
    window.scrollTo({
      top: 0, 
      behavior: "smooth"
    })
  }

  return (
    <main className={styles.main}>
      <article className={styles.container}>
        <GoBack className='product' />
        <section className={styles.product}>
          <Picture imageMobile={preLink(data.image.mobile)}
            imageTablet={preLink(data.image.tablet)}
            imageDesktop={preLink(data.image.desktop)}
            altImage={data.category}
            className='product'
          />
          <div className={styles.productInfo}>
            {data.new && <p className={styles.new}>NEW PRODUCT</p>}
            <h2 className={styles.productName}>{data.name}</h2>
            <p className={styles.text}>{data.description}</p>
            <p className={styles.price}>${(data.price).toLocaleString('en')}</p>
            <OrderProduct handleFunction={handleFunction} info={x} />
          </div>
        </section>
        <section className={styles.section}>
          <h3 className={styles.subTitle}>Features</h3>
          <p className={styles.text}>{data.features}</p>
          <h3 className={styles.subTitle}>In the box</h3>
          <ul className={styles.containerIncludes}>
            {data.includes.map((item) => {
              return (
                <li key={item.id}>
                  <p className={styles.listItems}>{item.quantity}x</p>
                  <p className={styles.text}>{item.item}</p>
                </li>
              )
            })}
          </ul>
        </section>
        <div className={styles.gallery}>
          {Object.values(data.gallery).map((item, index) => {
            return <Picture 
              imageMobile={preLink(item.mobile)}
              imageTablet={preLink(item.tablet)}
              imageDesktop={preLink(item.desktop)}
              altImage={'nose'}
              className={`product${index}`}
            />
          })}          
        </div>
      </article>
      <section className={styles.sectionOthers}>
        <h3 className={styles.othersTitle}>YOU MAY ALSO LIKE</h3>
        <div className={styles.containerOthers}>
          {data.others.map((item) => {
            return (
              <div className={styles.others} key={item.id}>
                <Picture imageMobile={preLink(item.image.mobile)}
                  imageTablet={preLink(item.image.tablet)}
                  imageDesktop={preLink(item.image.desktop)}
                  altImage={'nose'}
                  className='otherProduct'
                />
                <h4 className={styles.othersName}>{item.name}</h4>
                <Link to={`/${item.slug}`} className={styles.link} onClick={goUp}>SEE PRODUCT</Link>
              </div>
            )
          })}     
        </div>
      </section>
      <Categorys />
      <Aside />
      <Footer />
    </main>
  )
}

export default Product