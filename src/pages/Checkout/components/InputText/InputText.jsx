import React from 'react'
import styles from './InputText.module.scss'

const InputText = ({ propertie, label, placeholder, error, register, pattern }) => {
  const inputClassName = () => {
    return error ? styles.error : styles.input
  }

  const labelClassName = () => {
    return error ? styles.labelError : styles.label
  }

  let x = pattern !== undefined ? {required: true, pattern: pattern} : {required: true}

  return (
  <span className={`${styles.containerInput} ${styles[propertie]}`}>
    <label className={labelClassName(propertie)} htmlFor={propertie} id={propertie}>{label}</label>
    {error && <span className={styles.errorText}>Wrong Format</span>}
    <input type="text" className={inputClassName(propertie)} id={propertie} name={propertie}
      placeholder={placeholder} {...register((propertie), x)} 
    />
  </span>
  )
}

export default InputText