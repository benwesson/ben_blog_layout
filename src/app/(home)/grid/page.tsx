import styles from "./grid.module.css";
import { prisma } from "@/utils/prisma"
import Link from "next/link"
import Image from "next/image";

export default async function Grid() {

    const posts = await prisma.post.findMany({
        orderBy: {
            createdAt: 'desc',
        },
        take: 12, // Limit to the 5 most recent posts
        select: {
            id: true,
            title: true,
            content: true,
            category: true,
            createdAt: true,
            img: true, 
            userEmail: true,
        },

    })

  return (
    <div className={styles.container}>
        {posts.map((post) =>(
            <div className={styles.card} key={post.id}>

                <div className={styles.imageContainer}>
                    {post.img && <Image className={styles.image} src={post.img}  alt={post.title} width={300} height={300} />}
                </div>

                <h1>{post.title}</h1>

                <p>{post.userEmail}</p>

                <p>Category: {post.category}</p>

                <p>Created At: {new Date(post.createdAt).toLocaleDateString()}</p>

                <p>
                    {post.content.length > 250
                    ? post.content.slice(0, 250) + "..."
                    : post.content}
                </p>

                <div className={styles.button}>
                    <Link href={`/${post.id}`} className={styles.read}>Read More</Link>
                </div>

            </div>

        ))}
        
      
      
    </div>
  );
}