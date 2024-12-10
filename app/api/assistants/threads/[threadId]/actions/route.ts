import { openai } from "@/app/openai";

export default async function handler(req, res) {
  const { threadId } = req.query;

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const { content } = JSON.parse(req.body);

    if (!content) {
      res.status(400).json({ error: 'Content is required' });
      return;
    }

    // Simulate AI response
    res.status(200).json({ reply: `Response to: ${content}` });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}