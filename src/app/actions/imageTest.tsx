"use client";
import { ChangeEvent, useRef, useState, useTransition } from "react";
import Image from "next/image";

export default function ImageTest({ onImageAdded }: { onImageAdded?: (file: File) => void }) {
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
      <button onClick={() => imageInputRef.current?.click()}>Select Image</button>
      {image && <img src={image} width={300} />}
    </>
  )
}