import styles from "./grid.module.css";

import Link from "next/link";
import Image from "next/image";

import type { Post } from "@/actions/actions";

export default async function Grid({ posts }: { posts: Post }) {
    return (
        <>
            <div className={styles.gridTitle}>Recent Posts</div>
            <div
                className={styles.container}
                role="list"
                aria-label="Recent recipe posts"
            >
                {posts.map((post) => (
                    <div
                        className={styles.card}
                        key={post.id}
                        role="listitem"
                        aria-label={`Recipe card for ${post.title}`}
                    >
                        <Link
                            href={`/${post.id}`}
                            aria-label={`View recipe details for ${post.title}`}
                        >
                            {post.img && (
                                <Image
                                    className={styles.image}
                                    src={post.img}
                                    alt=""
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
                            <Link
                                href={`/post/${post.id}`}
                                className={styles.recipeButton}
                                aria-label={`Open full recipe for ${post.title}`}
                            >
                                Recipe
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
