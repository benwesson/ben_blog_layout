import styles from "./grid.module.css";
import { prisma } from "@/utils/prisma";
import Link from "next/link";
import Image from "next/image";

export default async function Grid() {
	const posts = await prisma.post.findMany({
		orderBy: {
			createdAt: "desc",
		},
		take: 12,
		select: {
			id: true,
			title: true,
			content: true,
			category: true,
			createdAt: true,
			img: true,
			userEmail: true,
		},
	});

	return (
		<>
			<div className={styles.gridTitle}>Recent Posts</div>
			<div className={styles.container}>
				{posts.map((post) => (
					<div className={styles.card} key={post.id}>
						<Link href={`/${post.id}`} >
							{post.img && (
								<Image
									className={styles.image}
									src={post.img}
									alt={post.title}
									width={300}
									height={300}
								/>
							)}
						</Link>

						<div className={styles.title}>{post.title}</div>

						<div>Author: {post.userEmail}</div>

						<div>Category: {post.category}</div>

						<div>
							Created At:{" "}
							{new Date(post.createdAt).toLocaleDateString()}
						</div>

						<hr />

						<div>
							{post.content.length > 250
								? post.content.slice(0, 250) + "..."
								: post.content}
						</div>

						<div className={styles.button}>
							<Link href={`/${post.id}`} className={styles.recipeButton}>
								Recipe
							</Link>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
