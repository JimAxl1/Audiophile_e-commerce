import React from 'react'
import styles from './InputSpinner.module.scss'
import "@fontsource/manrope";

const InputSpinner = ({ value, handleValue, whitDelete, style }) => {
  let x = value;

  const handleFunction = () => {
    if(whitDelete === true && value === 1){
      return handleValue(0)
    }else{
      return value > 1 ? handleValue(x- 1) : handleValue(1)
    }
  }

  return (
    <div className={`${styles.container} ${styles[style]}`}>
      <div className={`${styles.containerInput} ${styles[style]}`}>
        <span className={styles.span} onClick={() => handleFunction()}>-</span>
        <input type="text" className={styles.input} value={x} readOnly />
        <span className={styles.span} onClick={() => handleValue(x + 1)}>+</span>
      </div>
    </div>
  )
}

export default InputSpinner