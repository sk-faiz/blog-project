import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

function Footer() {
  return (
    <div className={styles.container}>
      <div>©2023 Faiz. All rights reserved.</div>
      <div className={styles.social}>
        <Image className={styles.icon} src={'/1.png'} width={15} height={15} alt='facebook-logo' />
        <Image className={styles.icon} src={'/2.png'} width={15} height={15} alt='instagram-logo' />
        <Image className={styles.icon} src={'/3.png'} width={15} height={15} alt='twitter-log' />
      </div>
    </div>
  )
}

export default Footer