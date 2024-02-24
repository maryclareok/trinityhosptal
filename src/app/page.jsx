import React from 'react'
import styles from './home.module.css'
import Image from 'next/image'
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
    A Clinic of Faith and Grace.
        </h1>
        <p className={styles.desc}>an oaisis of healing and kindness</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Appointment</button>
          <button className={styles.button}>Our services</button>
        </div>
        <div className={styles.brands}>
          <Image src='/brands.png' alt='' fill className={styles.brandImg}/>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src='/heroimage1.png' alt='' fill className={styles.heroImg}/>
      </div>
    </div>
  )
}

export default Home