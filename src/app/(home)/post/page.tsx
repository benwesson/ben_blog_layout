"use client";
import ImageTest from "@/actions/imageTest";
import styles from "./post.module.css";
import { useState } from "react";
import axios from "axios";
import "@/globals.css";
import createPost from "@/actions/actions";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Post() {
  const [file, setFile] = useState<File | null>(null);
  const { data: session, status } = useSession();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Breakfast");
  const [content, setContent] = useState("");
  const userEmail = session?.user?.email ?? "";


  // Redirect to login if not authenticated
  if (status === "unauthenticated") {
    router.push("/login");
    return null; // Prevent rendering the rest of the component
  }


  return (
    <div className={styles.container}>
      <h1>Create Post</h1>
      <input
        type="text"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snacks">Snacks</option>
      </select>
      {/* <input
        type="file"
        onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
      /> */}
      <ImageTest /> 
      <textarea
        placeholder="Post Content"
        rows={10}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        className={styles.button}
        onClick={() =>
          createPost(title, content, category, userEmail)
        }
      >
        Done
      </button>
    </div>
  );
} 







