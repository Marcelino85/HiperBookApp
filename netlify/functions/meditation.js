import { GoogleGenerativeAI } from "@google/generative-ai";

export const handler = async () => {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "API KEY não configurada" }),
      };
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const prompt = `
Gere uma meditação bíblica cristã em JSON puro com:
- titulo
- versiculo { texto, referencia }
- reflexao
- pontos (array de strings)
- oracao

⚠️ Responda SOMENTE com JSON válido. Sem markdown.
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text().trim();

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
