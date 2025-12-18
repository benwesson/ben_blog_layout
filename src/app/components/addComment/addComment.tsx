"use client";
import { useState } from "react";

import styles from "./addComment.module.css";

import { createComment } from "@/actions/actions";
import getUserInfo from "@/hooks/getUserInfo";

import type { FormEvent } from "react";

export default function AddComment({
    associatedPostId,
}: {
    associatedPostId: string;
}) {
    const { email, profilePic } = getUserInfo();
    const [desc, setDesc] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        e.stopPropagation();

        createComment(desc, associatedPostId, email, profilePic);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={styles.container}>
                    <textarea
                        className={styles.textarea}
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        name="desc"
                        placeholder="Add a comment..."
                        required
                    />
                    <button type="submit" className={styles.button}>
                        Post
                    </button>
                </div>
            </form>
        </div>
    );
}
