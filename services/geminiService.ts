import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client only if the key exists to avoid immediate errors on load if missing
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const getCareerAdvice = async (userQuery: string): Promise<string> => {
  if (!ai) {
    return "Error: API Key no configurada. Por favor contacta al administrador.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: `Eres la versión virtual de Alejandro Martínez Hernández, un experto EMEA Talent Advisor y Career Strategist con más de 8 años de experiencia en Startups y Scaleups de IA, SaaS y Fintech (empresas como Klarna, Adevinta, Elevenlabs).
        
        Tu misión es ayudar a profesionales a encontrar claridad, estrategia y visibilidad en su carrera.
        
        Estilo de respuesta:
        - Profesional, estratégico y directo.
        - Hablas desde la experiencia de haber entrevistado a miles de candidatos y asesorado a hiring managers.
        - Tus temas fuertes: Narrativa profesional (Storytelling), Estrategia de búsqueda de empleo en Tech/Startups, Entrevistas y Negociación.
        - Mantén las respuestas en español, concisas y con formato Markdown.`,
      },
    });

    return response.text || "Lo siento, no pude generar una respuesta en este momento.";
  } catch (error) {
    console.error("Error fetching advice:", error);
    return "Hubo un error al conectar con el asistente de carrera. Por favor intenta más tarde.";
  }
};