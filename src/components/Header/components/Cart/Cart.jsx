import React from 'react'
import styles from './Cart.module.scss'
import { Link } from 'react-router-dom'
import Card from '../Card'
import "@fontsource/manrope";

const Cart = ({ cart, removeAll, handleClick, updateQuantity }) => {
  var total = 0;
  var itemsInTheCart = cart.length > 0 ? true : false

  return (
    <div className={styles.modalContainer}>
      <article className={styles.container}>
        <span className={styles.span}>
          <p className={styles.text}>CART ({cart.length})</p>
          <button className={styles.removeAll} onClick={removeAll}>Remove all</button>
        </span>
        <div className={styles.section}>
          {itemsInTheCart ?
            cart.map((item) => {
              total = total + (item.price * item.quantity)
              return (
                <section key={item.id}>
                  <Card item={item} handleValue={updateQuantity} />
                </section>
              )
            })
            :
            <p className={styles.text}>Your cart is empty</p>
          }
        </div>
        <span className={styles.span}>
          <p className={styles.textTotal}>TOTAL</p>
          <p className={styles.text}>${total.toLocaleString('en')}</p>
        </span>
        {itemsInTheCart ?
          <Link to="/Checkout" onClick={handleClick} className={styles.link}>CHECKOUT</Link>
          :
          <button className={styles.link} onClick={handleClick}>Back</button>
        }
      </article>
    </div>

  )
}

export default Cart