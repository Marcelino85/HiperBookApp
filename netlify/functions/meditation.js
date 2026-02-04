export default async () => {
  try {
    const prompt = `
Gere uma meditação bíblica cristã em JSON puro com:
- titulo
- versiculo { texto, referencia }
- reflexao
- pontos (array)
- oracao
`;

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": process.env.GEMINI_API_KEY,
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1024,
          },
        }),
      }
    );

    const data = await response.json();

    // 🔴 SE A API RESPONDER ERRO, DEVOLVEMOS CLARO
    if (!data.candidates || !data.candidates.length) {
      return new Response(
        JSON.stringify({
          error: "Resposta inválida do Gemini",
          detalhes: data,
        }),
        { status: 500 }
      );
    }

    let text = data.candidates[0].content.parts[0].text
      .replace(/```json|```/g, "")
      .trim();

    return new Response(text, {
      headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500 }
    );
  }
};
