import { v4 as uuidv4 } from "uuid";
import { supabase } from "@/supabase/client";
import imageCompression from "browser-image-compression";

function getStorage() {
	return supabase.storage;
}

type UploadProps = {
	file: File;
	bucket: string;
	folder?: string;
};

export async function uploadImage({ file, bucket, folder }: UploadProps) {
	const fileName = file.name;
	const fileExtension = fileName.slice(fileName.lastIndexOf(".") + 1);
	const path = `${folder ? folder + "/" : ""}${uuidv4()}.${fileExtension}`;

	try {
		file = await imageCompression(file, {
			maxSizeMB: 1,
		});
	} catch (error) {
		console.error(error);
		return { imageUrl: "", error: "Image compression failed" };
	}

	const storage = getStorage();
	const { data, error } = await storage.from(bucket).upload(path, file);

	if (error) {
		console.error("Error uploading image:", error);
		return { imageUrl: "", error: "Image upload failed" };
	}

	const imageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL!}/storage/v1/object/public/${bucket}/${data.path}`;

	return { imageUrl, error: "" };
}
