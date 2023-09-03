import React from 'react'
import styles from './ProductCard.module.scss'
import "@fontsource/manrope";
const preLink = require.context('../../assets/cart', true)

const ProductCard = ({ item, className }) => {
  return (
    <div className={styles.container}>
      <img src={preLink(item.image)} alt={`${item.product}`} className={`${styles.image} ${styles[className]}`}/>
      <p className={styles.product}>{item.product}</p>
      <p className={styles.price}>${item.price.toLocaleString('en')}</p>
    </div>
  )
}

export default ProductCard