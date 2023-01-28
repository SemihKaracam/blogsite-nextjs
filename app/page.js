import BlogCard from "@/components/BlogCard";
import styles from "./styles.module.css"
async function getCards(){
  const res = await fetch("https://dummyjson.com/posts?limit=10")
  return res.json()
}
export default async function Home() {
  const {posts} = await getCards()
  console.log(posts)
  return (
    <div className={styles.blogsContainer}>
      {
        posts.map((post)=>(
          <BlogCard key={post.id} post={post}/>
        ))
      }
    </div>
  )
}
