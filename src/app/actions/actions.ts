"use server";
import { GoogleGenAI } from "@google/genai";

import { prisma } from "@/utils/prisma";
export async function getRecentPosts() {
	const posts = await prisma.post.findMany({
		orderBy: {
			createdAt: "desc",
		},
		take: 12,
		select: {
			id: true,
			title: true,
			content: true,
			category: true,
			createdAt: true,
			img: true,
			userEmail: true,
		},
	});

	return posts;
}
export type Post = {
	id: string;
	createdAt: Date;
	title: string;
	content: string;
	img: string | null;
	category: string;
	userEmail: string;
}[];

export async function getPostsByCategory(category: string) {
	const posts = await prisma.post.findMany({
		where: {
			category: category,
		},
		orderBy: {
			createdAt: "desc",
		},
		take: 12,
		select: {
			id: true,
			title: true,
			content: true,
			category: true,
			createdAt: true,
			img: true,
			userEmail: true,
		},
	});

	return posts;
}

export async function getPostsByID(id: string) {
	const posts = await prisma.post.findMany({
		where: {
			id: id,
		},
		orderBy: {
			createdAt: "desc",
		},
		take: 12,
		select: {
			id: true,
			title: true,
			content: true,
			category: true,
			createdAt: true,
			img: true,
			userEmail: true,
		},
	});

	return posts;
}



export async function createPost(
	title: string,
	content: string,
	category: string,
	userEmail: string,
	imageUrl?: string
) {
	await prisma.post.create({
		data: {
			title: title,
			content: content,
			category: category,
			userEmail: userEmail,
			slug: title.toLowerCase().replace(/\s+/g, "-"),
			catSlug: category.toLowerCase(),
			img: imageUrl ? imageUrl : undefined,
		},
	});
}

export async function createComment(
	desc: string,
	associatedPostId: string,
	userEmail: string,
	profilePic: string
) {
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
		contents: prompt,
	});

	return response.text;
}

export async function searchPosts(query: string) {
	const posts = await prisma.post.findMany({
		where: {
			OR: [
				{ title: { contains: query, mode: "insensitive" } },
				{ content: { contains: query, mode: "insensitive" } },
				{ category: { contains: query, mode: "insensitive" } },
			],
		},
		orderBy: {
			createdAt: "desc",
		},
	});

	return posts;
}
