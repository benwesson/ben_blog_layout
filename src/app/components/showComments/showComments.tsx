import { prisma } from "@/utils/prisma";
import styles from "./showComments.module.css";
export default async function ShowComments({
    associatedPostId,
}: {
    associatedPostId: string;
}) {
    const comments = await prisma.comment.findMany({
        orderBy: {
            createdAt: "desc",
        },
        take: 5, // Limit to the 5 most recent comments
        where: {
            associatedPostId: associatedPostId,
        },
    });

    return (
        <div>
            <h1>Recent Comments</h1>
            <div className={styles.container}>
                {comments.map((comment) => (
                    <div className={styles.comment} key={comment.id}>
                        <div className={styles.commentHeader}>
                            <img
                                src={comment.profilePic}
                                alt="Profile"
                                className={styles.profilePic}
                            />
                            <p>
                                <strong>{comment.userEmail}</strong>
                            </p>
                        </div>

                        <p>
                            Posted at:{" "}
                            {new Date(comment.createdAt).toLocaleString()}
                        </p>
                        <p>{comment.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
