import Image from "next/image";
import styles from "./post.module.css";
import AddComment from "@/components/addComment/addComment";
import ShowComments from "@/components/showComments/showComments";
import { getPostsByID, Post } from "@/actions/actions";

// Define the type for params
type PageProps = {
	params: {
		id: string;
	};
};

export default async function SinglePage({ params }: PageProps) {
	const { id } = await params;

	const posts: Post = await getPostsByID(id);
	const [post] = posts;

	return (
		<div
			className={styles.container}
			aria-label={`Recipe details for ${post?.title}`}
		>
			{post?.img && (
				<Image
					className={styles.image}
					src={post.img}
					width={500}
					height={500}
					alt="Featured"
				/>
			)}
			<h1 className={styles.title}>{post?.title}</h1>
			<p>Author: {post.userEmail}</p>
			<p>Category: {post?.category}</p>
			<p>Created At: {new Date(post.createdAt).toLocaleDateString()}</p>

			<p>{post?.content}</p>
			<h1>Comments</h1>
			<AddComment associatedPostId={id} />

			<ShowComments associatedPostId={id} />
		</div>
	);
}
