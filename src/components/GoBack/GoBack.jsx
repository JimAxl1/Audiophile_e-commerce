import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './GoBack.module.scss'

const GoBack = ({ className }) => {
  const navigate = useNavigate();

  return (
    <div className={`${styles.container} ${styles[className]}`}>
      <button className={styles.button} onClick={() => navigate(-1)}>Go back</button>
    </div>
  )
}

export default GoBack