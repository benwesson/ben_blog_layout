import { prisma } from "@/utils/prisma"
import Link from "next/link"
import Image from "next/image";
import styles from "./recent.module.css"; 

export default async function Recent() {
    const posts = await prisma.post.findMany({
        orderBy: {
            createdAt: 'desc',
        },
        take: 5, // Limit to the 5 most recent posts
        select: {
            id: true,
            title: true,
            content: true,
            category: true,
            createdAt: true,
            img: true, 
        },

    })

    return (
        <>
            <h1>Recent Recipes</h1> 
            <div className={styles.container}>
            
               

                
                {posts.map((post) => (
                    <div className={styles.recipe}  key={post.id}>
                        <div key={post.id} className={styles.recipeInfo}>
                            <h2>{post.title}</h2>
                            
                            <p>Category: {post.category}</p>
                            <p>Created At: {new Date(post.createdAt).toLocaleDateString()}</p>
                            <p>
                              {post.content.length > 250
                                ? post.content.slice(0, 250) + "..."
                                : post.content}
                            </p>
                       
                            <div className={styles.buttons}>
                                <Link href={`/${post.id}`} className={styles.read}>Read More</Link>
                           
                                {/* <Link href={`/${post.id}`} className={styles.read}>Comment</Link> */}

                            </div>
                            
                            {/* <Link href={`/${post.category}`}>{post.category}</Link> */}
                            
                                   
                        </div>
                         <div className={styles.imageContainer}>
                            {post.img && <Image className={styles.image} src={post.img} width={300} height={300} alt="Featured" />}

                        </div>
                        {/* <div className={styles.imageContainer}>
                            <Image className ={styles.image} src="/breakfast.jpg" alt="Featured" fill/>
                        </div> */}

                    </div>
                ))}
            

            
    
                
            </div>
        </>
    );
}