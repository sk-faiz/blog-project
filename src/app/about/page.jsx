import React from 'react'
import styles from "./about.module.css"
import Image from 'next/image'
import Button from '@/components/Button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image fill={true} src="https://plus.unsplash.com/premium_photo-1674672910261-1a212b8dbaba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=849&q=80" alt="hero" className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Something</h1>
          <h2 className={styles.imgDesc}>asjnajdauidhaubshbvsbrvs</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who am I?</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor
            <br />
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What I do?</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor
            <br />
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Button text="Contact Me" url="/contact" />
        </div>
      </div>
    </div>
  )
}

export default About