"use client";
import { ChangeEvent, useRef, useState, useTransition } from "react";
import { convertBlobUrlToFile } from "@/utils/supabase";
import uploadImage from "@/supabase/storage/client";
import Image from "next/image";

export default function ImageTest() {
  const [imageUrls, setImageURLs] = useState<string[]>([]);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>)=> {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)
      const newImageUrls = filesArray.map(file => URL.createObjectURL(file));

      setImageURLs([...imageUrls, ...newImageUrls]);

    } 
  }

  
  const [isPending, startTransition] = useTransition();
  const handleClickUploadImageButton = () => {
    startTransition(async() => {
      let urls = [];
      for (const url of imageUrls ) {
        const imageFile = await convertBlobUrlToFile(url)
        const {imageUrl,error} = await uploadImage({
          file: imageFile,
          bucket: 'benblogbucket'
        })

        if (error) {
          console.error(error)
          return
        }

        urls.push(imageUrl)


      }
      console.log(urls)
      setImageURLs([]) 
    })
  }
  
  return (
    <div>
        <input type="file" multiple ref={imageInputRef} hidden onChange={handleImageChange} disabled={isPending}/>
        <button onClick={() => imageInputRef.current?.click() } disabled={isPending}>Select Images</button>
        <div>
            {imageUrls.map((url, index) => (
                <img key={index} src={url} width={300} alt={`img-${index}`} />
            ))} 
        </div>

        <button onClick={handleClickUploadImageButton} disabled={isPending}>{isPending ? "Uploading.." : "Upload Images" }</button>
        {/* <Image alt="" width={300} height={300} src="https://wgzehsuwqvpmwqdukotw.supabase.co/storage/v1/object/public/benblogbucket//e4bf85b7-941b-4de7-800f-e82053360271.jpeg" /> */}

    </div>
  )
}