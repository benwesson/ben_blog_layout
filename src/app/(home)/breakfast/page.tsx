import styles from "./breakfast.module.css";
import { prisma } from "@/utils/prisma"
import Link from "next/link"
import Image from "next/image";

export default async function Grid() {

    const posts = await prisma.post.findMany({
       where: {
        category: 'Breakfast',
     },
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
    <>
    
        <div className={styles.gridTitle}>
            Recent Posts
        </div>
        <div className={styles.container}>
            {posts.map((post) =>(
                <div className={styles.card} key={post.id}>

                    <div className={styles.imageContainer}>
                        {post.img && <Image className={styles.image} src={post.img}  alt={post.title} width={300} height={300} />}
                    </div>

                    <div className={styles.title}>{post.title}</div>

                    <div>{post.userEmail}</div>

                    <div>Category: {post.category}</div>

                    <div>Created At: {new Date(post.createdAt).toLocaleDateString()}</div>

                    <hr />

                    <div>
                        {post.content.length > 250
                        ? post.content.slice(0, 250) + "..."
                        : post.content}
                    </div>

                    <div className={styles.button}>
                        <Link href={`/${post.id}`} className={styles.read}>Read More</Link>
                    </div>

                </div>

            ))}
            
        
        
        </div>
    </>
  );
}