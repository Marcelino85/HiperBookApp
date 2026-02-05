import { GoogleGenerativeAI } from "@google/generative-ai";

export default async (request, context) => {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return new Response(
        JSON.stringify({ error: "API Key não configurada" }),
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      model: "models/gemini-1.5-flash",
    });

    const prompt = `
Gere uma meditação bíblica cristã EM JSON PURO no formato:

{
  "titulo": "",
  "versiculo": {
    "texto": "",
    "referencia": ""
  },
  "reflexao": "",
  "pontos": [],
  "oracao": ""
}

⚠️ NÃO use markdown
⚠️ NÃO explique nada fora do JSON
`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    return new Response(text, {
      headers: {
        "Content-Type": "application/json",
      },
    });

  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Erro na function",
        message: error.message,
      }),
      { status: 500 }
    );
  }
};
