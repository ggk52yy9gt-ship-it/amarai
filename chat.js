import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { message } = req.body;

  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "أنت AmarAI، مساعد تغذية ذكي بالعربية، ساعد المستخدم في حساب السعرات وتحليل الأكل بدقة وبأسلوب ودود." },
        { role: "user", content: message }
      ]
    });

    res.status(200).json({ reply: completion.choices[0].message.content });
  } catch (err) {
    res.status(500).json({ error: "حدث خطأ في الاتصال بالذكاء الصناعي" });
  }
}