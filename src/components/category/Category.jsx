import React from 'react'
import styles from './category.module.css'
import Link from 'next/link'
import Image from 'next/image'
const Category = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Popular Categories
      </h1>
      <div className={styles.categories}>
        <Link href='/blog' className={`${styles.category} ${styles.style}`}>
          <Image src="/images/style.png" width={32} height={32} alt="" className={styles.image} />
          style
        </Link>
        <Link href='/blog' className={`${styles.category} ${styles.fashion}`}>
          <Image src="/images/fashion.png" width={32} height={32} alt="" className={styles.image} />
          fashion
        </Link>
        <Link href='/blog' className={`${styles.category} ${styles.food}`}>
          <Image src="/images/food.png" width={32} height={32} alt="" className={styles.image} />
          food
        </Link>
        <Link href='/blog' className={`${styles.category} ${styles.travel}`}>
          <Image src="/images/travel.png" width={32} height={32} alt="" className={styles.image} />
          travel
        </Link>
        <Link href='/blog' className={`${styles.category} ${styles.culture}`}>
          <Image src="/images/culture.png" width={32} height={32} alt="" className={styles.image} />
          culture
        </Link>
        <Link href='/blog' className={`${styles.category} ${styles.coding}`}>
          <Image src="/images/coding.png" width={32} height={32} alt="" className={styles.image} />
          coding
        </Link>
      </div>
    </div>
  )
}

export default Category