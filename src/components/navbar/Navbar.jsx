import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Auth from '../auth/Auth'
import ThemeToggle from '../themeToggle/ThemeToggle'
const Navbar = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.social}>
        <Image src="/images/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/images/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/images/whatsapp.png" alt="whatsapp" width={24} height={24} />
        <Image src="/images/youtube.png" alt="youtube" width={24} height={24} />
      </div> */}
      <div className={styles.logo}>Techbloggy</div>
      <div className={styles.links}>
        <ThemeToggle/>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      <Auth/>
      </div>


    </div>
  )
}

export default Navbar