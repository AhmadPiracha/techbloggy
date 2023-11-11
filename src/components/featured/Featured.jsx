import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Discover the Top Tech Stories on TechBloggy
      </h1>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <Image className={styles.image} src="/images/homePage.jpg" alt='image' fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postHead}>TechBloggy: Exploring the Boundaries of Innovation</h1>
          <p className={styles.postDescription}>Welcome to TechBloggy, where we unravel the latest in technology, from cutting-edge gadgets to groundbreaking developments. Join us on a journey to explore the limitless possibilities of innovation and stay ahead in the fast-paced world of tech.</p>
          <button className={styles.button}>
            Read More
          </button>
        </div>

      </div>
    </div>
  )
}

export default Featured