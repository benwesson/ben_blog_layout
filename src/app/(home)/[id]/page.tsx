import { prisma } from "@/utils/prisma"


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
            <p>{post?.content}</p>
            <p>Category: {post?.category}</p>
        </div>
    );
}