import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({});
const prompt = {
  text: "Write a short blog post about the benefits of eating fruits and vegetables.",
  maxOutputTokens: 500,
  temperature: 0.7,
};
export default async function Gemini() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  console.log(response.text);
  return (
    <div><p>{response.text}</p></div>
  )
}

