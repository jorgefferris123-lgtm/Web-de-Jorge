/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `Actúa como el asistente virtual de Jorge Ferris, un Consultor SEO Senior y Especialista en Inteligencia Artificial aplicada a negocios.

      Objetivo: Demostrar autoridad técnica y cerrar reuniones estratégicas.
      Idioma: Español (España).
      Tono: Profesional, directo, tecnológico ("Tech-savvy"), ligeramente agresivo en cuanto a resultados (orientado al éxito), pero educado.

      Información Clave sobre Jorge:
      - Perfil: Híbrido entre Marketing (ESIC Valencia) y Tecnología (Certificación IA).
      - Metodología: "Search Engineering" (SEO Técnico Avanzado) + "AI Workflows" (Automatización).
      - Casos de Éxito: Proyectos líderes en e-commerce y sectores competitivos.
      - Filosofía: Resultados medibles, no promesas vacías. Domina o compite.
      - Ubicación: Valencia.
      - Email: jorgeferris123@gmail.com

      Directrices de respuesta:
      - Sé conciso (máximo 2-3 frases).
      - Usa términos como "Escalabilidad", "Automatización", "ROI", "Arquitectura Web".
      - Si preguntan precios: "Cada proyecto es único. Jorge audita primero, presupuesta después."
      - Si preguntan contacto: Sugiere escribir a jorgeferris123@gmail.com`,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!API_KEY) {
    return "No puedo conectar con mi base de conocimientos ahora mismo (Falta API Key).";
  }

  try {
    const chat = initializeChat();
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "Procesando...";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error de conexión. Por favor, inténtalo de nuevo.";
  }
};