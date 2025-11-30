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
			userEmail: true,
		},
	});

	return (
		<>
			<div className={styles.featuredTitle}>Featured Recipe</div>

			{posts.map((post) => (
				<div className={styles.container} key={post.id}>
					{post.img && (
						<Image
							className={styles.image}
							src={post.img}
							alt="Featured"
							height={300}
							width={300}
						/>
					)}

					<div key={post.id} className={styles.card}>
						<div>
							<div className={styles.title}>{post.title}</div>
							<div>{post.userEmail}</div>
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
						</div>

						<Link href={`/${post.id}`} className={styles.read}>
							Recipe
						</Link>
					</div>
				</div>
			))}
		</>
	);
}
