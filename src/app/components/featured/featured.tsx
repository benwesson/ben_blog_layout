import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/actions/actions";
export default async function Featured({ posts }: { posts: Post }) {
    const [featuredPost] = posts;

    if (!featuredPost) {
        return null;
    }

    return (
        <>
            <h1 className={styles.featuredTitle}>Featured Recipe</h1>

            <article className={styles.container} key={featuredPost.id}>
                <div className={styles.imageContainer}>
                    {featuredPost.img && (
                        <Image
                            className={styles.image}
                            src={featuredPost.img}
                            alt=""
                            fill={true}
                        />
                    )}
                </div>

                <div className={styles.card}>
                    <div>
                        <div className={styles.title}>{featuredPost.title}</div>
                        <div>Author: {featuredPost.userEmail}</div>
                        <div>Category: {featuredPost.category}</div>
                        <div>
                            Created At:{" "}
                            {new Date(
                                featuredPost.createdAt
                            ).toLocaleDateString()}
                        </div>
                        <hr />
                        <p>
                            {featuredPost.content.length > 250
                                ? featuredPost.content.slice(0, 250) + "..."
                                : featuredPost.content}
                        </p>
                    </div>

                    <Link
                        href={`/post/${featuredPost.id}`}
                        className={styles.read}
                        aria-label={`Read full recipe for ${featuredPost.title}`}
                    >
                        Recipe
                    </Link>
                </div>
            </article>
        </>
    );
}
