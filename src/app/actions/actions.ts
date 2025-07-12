"use server";
import { GoogleGenAI } from "@google/genai";

import { prisma } from "@/utils/prisma";

export async function createPost(title: string, content: string, category: string, userEmail: string, imageUrl?: string) {
    await prisma.post.create({
        data: {
            title: title,
            content: content,
            category: category,
            userEmail: userEmail,
            slug: title.toLowerCase().replace(/\s+/g, '-'),
            catSlug: category.toLowerCase(),
            img: imageUrl ? imageUrl : undefined,
        },
    })
}

export async function createComment(desc: string, associatedPostId: string, userEmail: string, profilePic: string) {
    await prisma.comment.create({
        data: {
            desc,
            associatedPostId,
            userEmail,
            profilePic,
        },
    });
}

export async function generateGeminiResponse(prompt: string) {
    const genAI = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
    });

    const response = await genAI.models.generateContent({
        model: "gemini-2.5-flash",
        contents:  prompt,
    });

    return response.text;
}





