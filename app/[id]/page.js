import Image from "next/image"
import React from "react"
import styles from "./styles.module.css"
import { notFound } from "next/navigation"

async function getPost(id) {
    const res = await fetch(`https://dummyjson.com/posts/${id}`)
    return res.json()
}


export default async function Page({ params }) {
    const post = await getPost(params.id)
    if (!post.title) {
        notFound()
    }
    return (
        <div className={styles.singlePost}>
            <div className={styles.postImg}>
                <Image src={`https://picsum.photos/960/400?random=${params.id}`} alt={post.title} fill />
            </div>
            <div className={styles.postInfo}>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        </div>
    )
}

