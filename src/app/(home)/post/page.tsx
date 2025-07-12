"use client";
import "@/globals.css";

import { useState, useRef } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import ImageTest from "@/actions/imageTest";
import { createPost } from "@/actions/actions";
import { convertBlobUrlToFile } from "@/utils/supabase";
import { uploadImage } from "@/supabase/storage/client";
import styles from "./post.module.css";


export default function Post() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Breakfast");
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const userEmail = session?.user?.email ?? "";



  // Redirect to login if not authenticated
  if (status === "unauthenticated") {
    router.push("/login");
    return null; // Prevent rendering the rest of the component
  }

  const handleOnImageAdded = (file: File) => {
    setFile(file);
  };

  const handleSubmitPost = async () => {
    let _imageUrl;

    if (file) {
      const { imageUrl, error } = await uploadImage({
        file,
        bucket: 'benblogbucket'
      })

      if (error) {
        console.error(error)
        return
      }

      _imageUrl = imageUrl;
    }

    createPost(title, content, category, userEmail, _imageUrl)
  };

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
      <ImageTest onImageAdded={handleOnImageAdded} />
      <textarea
        placeholder="Post Content"
        rows={10}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        className={styles.button}
        onClick={handleSubmitPost}
      >
        Done
      </button>
    </div>
  );
}







