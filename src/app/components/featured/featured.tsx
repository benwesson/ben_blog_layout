import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/actions/actions";
export default async function Featured({ posts }: { posts: Post }) {
	const [featuredPost] = posts;

	if (!featuredPost) {
		return null;
	}

	return (
		<>
			<div
				className={styles.featuredTitle}
				aria-label="Featured recipe section heading"
			>
				Featured Recipe
			</div>

			<div
				className={styles.container}
				key={featuredPost.id}
				role="region"
				aria-label={`Featured recipe card for ${featuredPost.title}`}
			>
				{featuredPost.img && (
					<Image
						className={styles.image}
						src={featuredPost.img}
						alt={`${featuredPost.title} dish`}
						height={300}
						width={300}
					/>
				)}

				<div className={styles.card} aria-label="Featured recipe details">
					<div>
						<div className={styles.title}>{featuredPost.title}</div>
						<div aria-label="Recipe author">{featuredPost.userEmail}</div>
						<div aria-label="Recipe category">
							Category: {featuredPost.category}
						</div>
						<div aria-label="Recipe creation date">
							Created At:{" "}
							{new Date(featuredPost.createdAt).toLocaleDateString()}
						</div>
						<hr />
						<div aria-label="Recipe summary">
							{featuredPost.content.length > 250
								? featuredPost.content.slice(0, 250) + "..."
								: featuredPost.content}
						</div>
					</div>

					<Link
						href={`/post/${featuredPost.id}`}
						className={styles.read}
						aria-label={`Read full recipe for ${featuredPost.title}`}
					>
						Recipe
					</Link>
				</div>
			</div>
		</>
	);
}
