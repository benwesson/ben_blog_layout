
import { prisma } from "@/utils/prisma"
// import Poster from "@/components/poster/poster";
import Image from "next/image";
import styles from "./singlePage.module.css";
import AddComment from "@/components/addComment/addComment";
import ShowComments from "@/components/showComments/showComments";
// import { useSession } from "next-auth/react";
// import Gemini from "@/components/gemini/gemini";
import Gemini from "@/components/gemini/gemini";


// Define the type for params
type PageProps = {
  params: {
    id: string;
  };
};

export default async function SinglePage({ params }: PageProps) {
    const { id } = await params;

    const post = await prisma.post.findUnique({
        where: {
            id,
        },
    })
    return (
        <div> 
            <h2>{post?.title}</h2>
            <p>Category: {post?.category}</p>
            {post?.img && <Image className={styles.image} src={post.img} width={300} height={300} alt="Featured" />}
            
            <p>{post?.content}</p>
            <h1>Comments</h1>
            <AddComment 
                associatedPostId={id}
            />
            <Gemini />   
            <ShowComments
                associatedPostId={id} 
             />

            
        </div>
    );
}