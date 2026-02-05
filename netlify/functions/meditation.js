import { GoogleGenerativeAI } from "@google/generative-ai";

export const handler = async () => {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      model: "models/gemini-1.5-flash",
    });

    const prompt = `
Gere uma meditação bíblica cristã em JSON puro com:
- titulo
- versiculo { texto, referencia }
- reflexao
- pontos (array)
- oracao

Responda SOMENTE JSON válido, sem markdown.
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text().trim();

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: text,
    };

  } catch (error) {
    console.error("Erro Gemini:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Erro ao gerar meditação",
        detalhes: error.message,
      }),
    };
  }
};
