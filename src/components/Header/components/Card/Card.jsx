import React from 'react'
import { useState, useEffect } from 'react'
import InputSpinner from '../../../InputSpinner'
import ProductCard from '../../../ProductCard'
import styles from './Card.module.scss'

const Card = ({ item, handleValue }) => {

  const xd = (x) => {
    handleValue(x, item.id, item)
  }

  return (
    <div className={styles.container}> 
      <ProductCard item={item} />
      <InputSpinner value={item.quantity} handleValue={(x) => xd(x)} whitDelete={true} style='cart'/>
    </div>
  )
}

export default Card