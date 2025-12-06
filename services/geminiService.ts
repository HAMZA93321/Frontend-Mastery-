import { GoogleGenAI, Type } from "@google/genai";
import { LearningResponse, TechPillar } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const fetchLearningContent = async (topic: string, category: TechPillar): Promise<LearningResponse> => {
  const modelId = "gemini-2.5-flash";

  const prompt = `
    You are an expert coding tutor specializing in ${category}.
    The user wants to learn about: "${topic}".
    
    Please provide a structured response containing:
    1. A clear, beginner-friendly explanation (approx 100-150 words).
    2. A practical code example demonstrating the concept.
    3. Three key takeaways or bullet points summarizing the most important parts.
    
    Format the response carefully according to the JSON schema provided.
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING, description: "A catchy title for the lesson" },
            explanation: { type: Type.STRING, description: "The educational explanation content" },
            codeExample: { type: Type.STRING, description: "Code block example" },
            keyTakeaways: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of 3 key takeaways"
            }
          },
          required: ["title", "explanation", "codeExample", "keyTakeaways"]
        }
      }
    });

    const text = response.text;
    if (!text) {
        throw new Error("No content generated");
    }
    return JSON.parse(text) as LearningResponse;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      title: "Error Loading Content",
      explanation: "We couldn't generate the content at this moment. Please check your API key and try again.",
      codeExample: "// Try refreshing or selecting a different topic",
      keyTakeaways: ["Check internet connection", "Verify API Key", "Try again later"]
    };
  }
};