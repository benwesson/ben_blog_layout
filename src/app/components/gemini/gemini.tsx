"use client";
import { useState } from "react";
import { generateGeminiResponse } from "@/actions/geminiAction"; // Assuming you have a function to handle Gemini API calls
export default function Gemini() {
	const [prompt, setPrompt] = useState("");
	const [response, setResponse] = useState("");

	const handleSubmit = async () => {
		const response = await generateGeminiResponse(prompt);
		if (response) {
			setResponse(response);
		} else {
			setResponse("No response received from Gemini.");
		}
	};

	return (
		<div>
			<h1>Gemini Component</h1>
			<textarea
				placeholder="Type your message here..."
				value={prompt}
				onChange={(e) => setPrompt(e.target.value)}
			/>
			<button onClick={handleSubmit}>Send</button>
			{!!response && (
				<div>
					<h2>Response:</h2>
					<p>{response}</p>
				</div>
			)}
		</div>
	);
}
