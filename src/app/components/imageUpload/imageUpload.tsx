"use client";
import { ChangeEvent, useRef, useState } from "react";
import styles from "./imageUpload.module.css";	

export default function ImageUpload({ onImageAdded }: { onImageAdded?: (file: File) => void }) {
  const [image, setImage] = useState<string>("");
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onImageAdded?.(e.target.files[0]);
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  }

  return (
    <>
      <input type="file" ref={imageInputRef} hidden onChange={handleImageChange} accept="image/*" required/>
      <button className={styles.button} onClick={() => imageInputRef.current?.click()}>Upload Image +</button>
      {image && <img src={image} width={300} />}
    </>
  )
}