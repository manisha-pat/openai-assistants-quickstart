import OpenAI from "openai";

export const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  
  export default async function handler(req, res) {
    const { prompt } = req.body;
    const response = await openai.completions.create({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 150,
    });
    res.status(200).json({ result: response.choices[0].text });
  }
