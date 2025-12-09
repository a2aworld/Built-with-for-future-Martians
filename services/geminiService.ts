
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";
import { StoryNode, AgentResponse } from "../types";

/**
 * Service singleton for the Google Gemini API client.
 * Initialized only after the user selects their API key via the AI Studio overlay.
 */
let client: GoogleGenAI | null = null;

/**
 * Initializes the Gemini API client using the environment's injected API key.
 * This function handles the handshake with the hackathon environment.
 * 
 * @returns {Promise<boolean>} True if initialization was successful, false otherwise.
 */
export const initializeGemini = async (): Promise<boolean> => {
  try {
    // @ts-ignore - window.aistudio is injected by the hackathon environment
    if (window.aistudio && window.aistudio.hasSelectedApiKey) {
      // @ts-ignore
      const hasKey = await window.aistudio.hasSelectedApiKey();
      if (hasKey) {
        // @ts-ignore
        client = new GoogleGenAI({ apiKey: process.env.API_KEY }); 
        return true;
      }
    }
    return false;
  } catch (e) {
    console.error("Failed to initialize Gemini client", e);
    return false;
  }
};

/**
 * Triggers the AI Studio key selection dialog.
 * This is required for the application to function in the hackathon environment.
 */
export const promptSelectKey = async () => {
   // @ts-ignore
   if (window.aistudio && window.aistudio.openSelectKey) {
      // @ts-ignore
      await window.aistudio.openSelectKey();
      await initializeGemini();
   }
};

/**
 * Generates the narrative text for a specific story node.
 * Uses Gemini 3 Pro to weave the ancient myth.
 * 
 * @param {StoryNode} node - The selected geographical/mythological node.
 * @returns {Promise<string>} The generated narrative text.
 */
const generateText = async (node: StoryNode): Promise<string> => {
    if (!client) throw new Error("Gemini client not initialized");
    
    const prompt = `
    Target: ${node.title}
    Location: ${node.coordinates.lat}, ${node.coordinates.lng}
    Myth: ${node.description}
    Meaning: ${node.culturalContext}
    Visual: ${node.visualCue}
    
    Recite the ancient tale. Preserve the heritage.
    `;

    const response = await client.models.generateContent({
      model: 'gemini-3-pro-preview', // User requested Gemini 3 Pro
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7, // Slightly lower temperature for more faithful retelling
      },
      contents: prompt,
    });
    
    return response.text || "Accessing Archive...";
};

/**
 * Generates a high-fidelity visualization of the myth.
 * Uses Gemini 3 Pro Image to create "Artistic Masterpieces".
 * 
 * @param {StoryNode} node - The selected geographical/mythological node.
 * @returns {Promise<string | undefined>} Base64 encoded image string or undefined if generation fails.
 */
const generateImage = async (node: StoryNode): Promise<string | undefined> => {
    if (!client) return undefined;

    // Prompt Engineering: Focus on "Artistic Masterpiece" / "Iconography".
    // Instruction ensures the AI acts as a 'Cosmic Iconographer'.
    const prompt = `
    Create a stunning, intricate, high-fidelity artistic masterpiece of: ${node.title}.
    Context: Ancient mythology encoded into the Earth at Latitude: ${node.coordinates.lat}, Longitude: ${node.coordinates.lng}.
    
    Visual Style: 
    - A magnificent, museum-quality iconographic drawing or painting.
    - Vivid, rich colors appropriate to the culture and subject (e.g., Lapis Lazuli for Egyptian, vibrant Ochre/Red for Vedic, Fresco styles for Classical).
    - Intricate linework, divine proportions, majestic composition.
    - Visually stunning work of art that correlates to the subject matter (${node.visualCue}).
    - NOT a map overlay. A standalone artifact of the "Galactic Storybook".
    
    Aspect Ratio: 16:9.
    Quality: 8k resolution style, cinematic, majestic.
    `;

    try {
        const response = await client.models.generateContent({
            model: 'gemini-3-pro-image-preview', // High quality image generation
            contents: {
                parts: [{ text: prompt }]
            },
            config: {
                imageConfig: {
                    aspectRatio: "16:9",
                    imageSize: "1K"
                }
            }
        });

        // Extract image data from the response parts
        for (const part of response.candidates?.[0]?.content?.parts || []) {
            if (part.inlineData) {
                return `data:image/png;base64,${part.inlineData.data}`;
            }
        }
    } catch (e) {
        console.warn("Image generation failed", e);
        return undefined;
    }
    return undefined;
};

/**
 * Orchestrates the full agent response (Text + Image).
 * Runs generation in parallel for "Vibe Coding" speed.
 * 
 * @param {StoryNode} node - The selected node.
 * @returns {Promise<AgentResponse>} The combined response object.
 */
export const generateStoryResponse = async (node: StoryNode): Promise<AgentResponse> => {
  if (!client) {
    const success = await initializeGemini();
    if (!success) throw new Error("API Key not selected");
  }

  // Parallel execution to minimize latency
  const [text, imageUrl] = await Promise.all([
      generateText(node),
      generateImage(node)
  ]);

  return {
      text,
      imageUrl,
      emotionalTone: 'Wondrous'
  };
};
