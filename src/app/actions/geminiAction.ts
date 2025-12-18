import { GoogleGenAI } from "@google/genai";
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
