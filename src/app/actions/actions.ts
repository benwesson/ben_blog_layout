"use server";
import { prisma } from "@/utils/prisma";
export default async function createPost(title: string, content: string, category: string, userEmail: string,) {
    await prisma.post.create({
        data: {
            title: title,
            content: content,
            category: category,
            userEmail: userEmail,
            slug: title.toLowerCase().replace(/\s+/g, '-'),
            catSlug: category.toLowerCase()
           
        },
        
    })
       
}
