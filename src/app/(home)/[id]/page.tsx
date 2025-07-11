import { prisma } from "@/utils/prisma"
import Image from "next/image";
import styles from "./singlePage.module.css"; // Import your CSS module
// Define the type for params
type PageProps = {
  params: {
    id: string;
  };
};

export default async function SinglePage({ params }: PageProps) {
   
    const post = await prisma.post.findUnique({
        where: {
            id: params.id,
        },
    })
    return (
        <div> 
            <h2>{post?.title}</h2>
            <p>Category: {post?.category}</p>
            {post?.img && <Image className={styles.image} src={post.img} width={300} height={300} alt="Featured" />}
            
            <p>{post?.content}</p>
        </div>
    );
}