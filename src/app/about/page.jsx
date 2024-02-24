import React from 'react'
import Image from 'next/image'
import styles from './about.module.css'
const AboutPage = () => {
  // console.log("lets check where it works")
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}><h2 className={styles.subtitle}>
      About Trinity Rock 
        </h2>
        <h1 className={styles.title}>Your beacon of hope in Lagos, with top-notch care.</h1>
        <p className={styles.desc}>
        At Trinity Rock, we offer a comprehensive range of maternity services. Our services include prenatal care, birthing services, postnatal care, and neonatal care. Our team of dedicated healthcare professionals is committed to providing the best care possible, ensuring the well-being of both mother and child.</p>
        <div className={styles.boxes}>
        <div className={styles.box}>
          <h1>
          100% + 
          </h1>
          <p>
          Commitment
          </p>
          </div>
          <div className={styles.box}>
          <h1>
          100% + 
          </h1>
          <p>
          Commitment
          </p>
          </div>
          <div className={styles.box}>
          <h1>
          100% + 
          </h1>
          <p>
          Commitment
          </p>
          </div>
          </div>
          </div>
          <div className={styles.imgContainer}>
            <Image
            src="/about.jpeg"  alt='About Image'
            fill
            className={styles.img}/>
          </div>
          </div>
  )
}

export default AboutPage