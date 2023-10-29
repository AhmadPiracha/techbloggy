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
          <Image className={styles.image} src="/images/p1.jpeg" alt='image' fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postHead}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h1>
          <p className={styles.postDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eum consequuntur, perferendis totam dolores, sequi velit nobis distinctio ex mollitia laboriosam assumenda voluptatem explicabo, autem necessitatibus eius et earum nisi.</p>
          <button className={styles.button}>
            Read More
          </button>
        </div>

      </div>
    </div>
  )
}

export default Featured