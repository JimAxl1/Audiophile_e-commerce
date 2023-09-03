import React from 'react'
import { useState } from 'react'
import ProductCard from '../../../../components/ProductCard'
import { Link } from 'react-router-dom'
import icon from '../../../../assets/checkout/icon-order-confirmation.svg'
import styles from './PaySuccess.module.scss'
import "@fontsource/manrope";

const PaySuccess = ({ cart, total, deleteItems }) => {
  const [showMoreItems, setShowMoreItems] = useState(false)

  let show = showMoreItems ? "view less" : `and ${cart.length - 1} other item(s)`

  return (
    <div className={styles.modal}>
      <article className={styles.container}>
        <img src={icon} alt="" />
        <p className={styles.title}>THANK YOU FOR YOUR ORDER</p>
        <p className={styles.text}>You will receive an email confirmation shortly.</p>
        <div className={styles.containerInfo}>
          <div className={styles.containerCartInfo}>
            {showMoreItems ? 
              <div className={styles.containerCart}>
                {cart.map((item) => {
                  return (
                    <div className={styles.containerItem} key={item.id}>
                      <ProductCard item={item} className='paySuccess' />
                      <p className={styles.quantity}>x{item.quantity}</p>
                    </div>
                  )
                })}
              </div>
              :
              <div className={styles.containerItem}>
                <ProductCard item={cart[0]} className='paySuccess' />
                <p className={styles.quantity}>x{cart[0].quantity}</p>
              </div>
            }
            <hr className={styles.hr} />
            <button className={styles.show} onClick={() => setShowMoreItems(!showMoreItems)}>{show}</button>  
          </div>
          <div className={styles.containerTotal}>
            <p className={styles.text}>GRAND TOTAL</p>
            <p className={styles.textTotal}>${total.toLocaleString('en')}</p>
          </div>
        </div>
        <Link to="/" className={styles.link} onClick={deleteItems}>BACK TO HOME</Link>
      </article>
    </div>
  )
}

export default PaySuccess