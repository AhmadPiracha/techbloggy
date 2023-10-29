"use client"
import React, { useState } from 'react';
import styles from './auth.module.css';
import Link from 'next/link';

const Auth = () => {
  const status = "notAuth";
  const [open, setOpen] = useState(false);

  const handleBurgerClicked = () => {
    console.log("clicked");
    setOpen(!open); // Toggle the 'open' state
  }

  return (
    <>
      {status === "notAuth" ? (
        <Link href="/login" className={styles.link}>Login</Link>
      ) : (
        <>
          <Link href="/write">Post</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={handleBurgerClicked}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.burgerMenu}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          {status === "notAuth" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Post</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Auth;
