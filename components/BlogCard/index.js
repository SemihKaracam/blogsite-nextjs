import React from 'react'
import styles from "./styles.module.css"
import Image from 'next/image'
import Link from 'next/link'

function BlogCard({post}) {
  return (
    <Link href={`/${post.id}`} className={styles.card}>
        <div className={styles.cardImg}>
            <Image src={`https://picsum.photos/200/300?random=${post.id}`} alt={post.title} fill/>
        </div>
        <div className={styles.cardInfo}>
            <h3 className={styles.cardTitle}>{post.title}</h3>
            <p className={styles.cardDescription}>{post.body}</p>
        </div>
    </Link>
  )
}

export default BlogCard