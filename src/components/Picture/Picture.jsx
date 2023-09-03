import React from 'react'
import styles from './Picture.module.scss'

const Picture = ({ imageDesktop, imageTablet, imageMobile, altImage, className, key }) => {
  return (
    <picture className={`${styles.container} ${styles[className]}`}>
      <source srcSet={imageDesktop} media='(min-width: 992px)' />
      <source srcSet={imageTablet} media='(min-width: 768px)' />
      <img src={imageMobile} alt={altImage} className={styles[className]}/>
  </picture>
  )
}

export default Picture