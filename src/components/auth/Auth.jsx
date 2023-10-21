import React from 'react'
import styles from './auth.module.css'
import Link from 'next/link'
const Auth = () => {

  const status = "notAuth"

  return (
    <>
      {status === "notAuth" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Post</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  )
}

export default Auth