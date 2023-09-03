import React from 'react'
import ProductCard from '../../../../components/ProductCard'
import styles from './Summary.module.scss'
import "@fontsource/manrope";

const Summary = ({ cart, handleSubmit, onSubmit, total }) => {
  var vat = total * 0.20
  let shipping = total !== 0 ? 50 : 0
  let x = false
  if (total === 0){
    x = true
  }

  return (
    <section className={styles.section}>
      <h3 className={styles.title}>SUMMARY</h3>
      <section className={styles.sectionItems}>
        {cart.map((item) => {
          return (
            <span className={styles.containerItem} key={item.id}>
              <ProductCard item={item} />
              <p className={styles.quantity}>x{item.quantity}</p>
            </span>
          )
        })}
      </section>
      <div className={styles.containerPrices}>
        <span className={styles.span}>
          <p className={styles.propertie}>TOTAL</p>
          <p className={styles.value}>${total.toLocaleString('en')}</p>
        </span>
        <span className={styles.span}>
          <p className={styles.propertie}>SHIPPING</p>
          <p className={styles.value}>${shipping}</p>
        </span>
        <span className={styles.span}>
          <p className={styles.propertie}>VAT (INCLUDED)</p>
          <p className={styles.value}>${Math.trunc(vat).toLocaleString('en')}</p>
        </span>
        <span className={styles.spanGrandTotal}>
          <p className={styles.propertie}>GRAND TOTAL</p>
          <p className={styles.valueOrange}>${Math.trunc(vat + total + shipping).toLocaleString('en')}</p>
        </span>
      </div>
      <input type='submit' form="theForm" onSubmit={handleSubmit(onSubmit)} className={styles.pay} value='CONTINUE & PAY' disabled={x} />
    </section>
  )
}

export default Summary