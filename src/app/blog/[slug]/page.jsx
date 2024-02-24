import styles from './singlePost.module.css'
import Image from 'next/image'
import  postUser from '@/component/postUser/postUser';
import { Suspense } from 'react';
import { getPost } from '@/lib/data';
// FETCH DATA WITH AN API
// const getData = async (slug)=>{
//   const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${slug}`);
//   if (!res.ok){
//     throw new Error("something went wrong")
//   }
// return res.json();
// };
const SinglePostPage = async ({params}) => {
  const{slug} = params;
  // const post = await getData(slug);
  //FETCH DATA WITHOUT AN API
  const post = await getPost(slug);
  console.log(post)
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
      <Image src="/iphone.jpeg" alt='' fill className={styles.img}/>
      </div>
      <div className={styles.textContainer}>
    <h1 className={styles.title}>
          {post?.title}
          </h1>
      <div className={styles.detail}>
      <Image src="/iphone.jpeg" alt='' width={50} height={50} className={styles.avatar}/>
      {post && < Suspense fallback={<div>loading</div>}>
        <postUser userId = {post.userId}/>
      </Suspense>}
      <div className={styles.detailText}>
        <span className={styles.detailTitle}>Published</span>
        <span className={styles.detailValue}>01.01.2020</span>
      </div>
      </div>
      <div className={styles.content}>
       {post?.body}
      </div>
      </div>
    </div>
  )
}

export default SinglePostPage