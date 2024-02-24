import Image from 'next/image'
import styles from './PostCard.module.css'
import Link from 'next/link'
const postCard = ({post}) => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
              <Image src="/iphone.jpeg" alt='' fill className={styles.img}/>
            </div>
            <span className={styles.date}>01.01.20</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.body}</p>
            <Link  href={`/blog/${post.id}`} className={styles.link}>READ MORE</Link>
        </div>
    </div>
  )
}

export default postCard