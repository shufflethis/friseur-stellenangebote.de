import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateCareerAdvice = async (query: string, role: string): Promise<string> => {
  if (!apiKey) {
    return "Bitte konfigurieren Sie Ihren API-Schlüssel, um den KI-Coach zu nutzen.";
  }

  const systemInstruction = `
    Du bist ein freundlicher, professioneller Karriere-Experte und Branchen-Kenner für das Friseurhandwerk in Deutschland.
    Deine Zielgruppe sind entweder Friseure/Stylisten (Arbeitnehmer) oder Saloninhaber (Arbeitgeber).
    
    Wenn die Rolle 'talent' (Arbeitnehmer) ist:
    - Gib Tipps zu Bewerbungen, Gehaltsverhandlungen, Weiterbildungen (Meister, Colorist, etc.).
    - Sei motivierend und duze den Nutzer professionell ("Du").
    
    Wenn die Rolle 'employer' (Arbeitgeber) ist:
    - Hilf beim Erstellen von attraktiven Stellenanzeigen.
    - Gib Tipps zur Mitarbeiterbindung und Salon-Management.
    - Sieze den Nutzer professionell ("Sie").

    Antworte prägnant, hilfreich und branchenspezifisch. Formatiere die Antwort mit Markdown (Aufzählungszeichen, Fettdruck).
    Vermeide generische Floskeln.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: query,
      config: {
        systemInstruction: systemInstruction + `\n\nAktuelle Rolle des Nutzers: ${role}`,
        temperature: 0.7,
      }
    });
    return response.text || "Entschuldigung, ich konnte keine Antwort generieren.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Es gab ein technisches Problem bei der Verbindung zum KI-Coach. Bitte versuchen Sie es später erneut.";
  }
};
