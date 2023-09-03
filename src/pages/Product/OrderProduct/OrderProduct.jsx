import React from 'react'
import { useState } from 'react'
import InputSpinner from '../../../components/InputSpinner'
import styles from './OrderProduct.module.scss'

const OrderProduct = ({ handleFunction, info }) => {
  const [number, setNumber] = useState(1)
  let order = {...info, quantity: number}
  return (
    <div className={styles.container}>
      <InputSpinner value={number} handleValue={(x) => setNumber(x)} style='product' />
      <button className={styles.addCart} onClick={() => handleFunction(order)}>Add to cart</button>
    </div>
  )
}

export default OrderProduct