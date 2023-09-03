import React from 'react'
import Categorys from '../../components/Categorys';
import Aside from '../../components/Aside';
import Footer from '../../components/Footer';
import Picture from '../../components/Picture';
import { Link } from "react-router-dom";
import styles from './Category.module.scss'
import "@fontsource/manrope";
const preLink = require.context('../../', true)

const product = (list, nose) => {
  const goUp = () => {
    window.scrollTo({
      top:0, behavior:"smooth"
    })
  }
  let newList = list.filter((item) => {
    return item.category === nose
  })
  newList = newList.reverse()
  
  return newList.map((item) => {
    return (
      <section className={styles.section} key={item.id}>
        <Picture imageMobile={preLink(item.categoryImage.mobile)}
          imageTablet={preLink(item.categoryImage.tablet)}
          imageDesktop={preLink(item.categoryImage.desktop)}
          altImage={item.category}
          className='categorys'
        />
        <div className={styles.infoProduct}>
          {item.new && <p className={styles.new}>NEW PRODUCT</p>}
          <h2 className={styles.productName}>{item.name}</h2>
          <p className={styles.description}>{item.description}</p>
          <Link to={`/${item.slug}`} className={styles.link} onClick={goUp}>SEE PRODUCT</Link>          
        </div>
      </section>
    )
  })
}

const Category = ({ data, category }) => {
  return (
    <main className={styles.main}>
      <span className={styles.categoryContainer}>
        <h1 className={styles.categoryName}>{category}</h1>
      </span>
      <div className={styles.containerProducts}>
        {product(data, category)}
      </div>
      <Categorys />
      <Aside />
      <Footer />
    </main>
  )
}

export default Category