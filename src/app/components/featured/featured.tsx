import styles from "./featured.module.css";
import Image from "next/image";

import { prisma } from "@/utils/prisma";
import Link from "next/link";

export default async function Recent() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 1, // Limit to the 5 most recent posts
    select: {
      id: true,
      title: true,
      content: true,
      category: true,
      createdAt: true,
      img: true,
    },
  });

  return (
    <>
      <h1>Featured Recipe</h1>
      
        {posts.map((post) => (

            
          <div className={styles.container} key={post.id}>
            <div className={styles.imageCard}>
              {/* <Image className ={styles.image} src="/breakfast.jpg" alt="Featured" fill /> */}
              {post.img && (
                <Image
                  className={styles.image}
                  src={post.img}
                  alt="Featured"
                  height={400}
                  width={400}
                />
              )}
            </div>
            <div key={post.id} className={styles.card}>
              <h2>{post.title}</h2>

              <p>Category: {post.category}</p>
              <p>Created At: {new Date(post.createdAt).toLocaleDateString()}</p>
              <p>
                {post.content.length > 750
                  ? post.content.slice(0, 750) + "..."
                  : post.content}
              </p>
              <Link href={`/${post.id}`} className={styles.read}>
                Read More
              </Link>
            </div>

            
          </div>
        ))}
      
    </>
  );
}
