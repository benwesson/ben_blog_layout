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
            <div className={styles.featuredTitle}>Featured Recipe</div>

            <div className={styles.container} key={featuredPost.id}>
                {featuredPost.img && (
                    <Image
                        className={styles.image}
                        src={featuredPost.img}
                        alt="Featured"
                        height={300}
                        width={300}
                    />
                )}

                <div className={styles.card}>
                    <div>
                        <div className={styles.title}>{featuredPost.title}</div>
                        <div>{featuredPost.userEmail}</div>
                        <div>Category: {featuredPost.category}</div>
                        <div>
                            Created At:{" "}
                            {new Date(featuredPost.createdAt).toLocaleDateString()}
                        </div>
                        <hr />
                        <div>
                            {featuredPost.content.length > 250
                                ? featuredPost.content.slice(0, 250) + "..."
                                : featuredPost.content}
                        </div>
                    </div>

                    <Link href={`/${featuredPost.id}`} className={styles.read}>
                        Recipe
                    </Link>
                </div>
            </div>
        </>
    );
}
