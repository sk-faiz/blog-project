import React from 'react'
import styles from "./contact.module.css"
import Image from 'next/image'
import Button from '@/components/Button/Button'

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch!</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" alt="contact" className={styles.image} fill={true} />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder='Name' className={styles.input}/>
          <input type="text" placeholder='Email' className={styles.input}/>
          <textarea className={styles.textArea} id="" cols="30" rows="10" placeholder='Message'></textarea>
          <Button text="Send" url="#" />
        </form>
      </div>
    </div>
  )
}

export default Contact