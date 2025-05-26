// lib/huggingface.ts
const HF_API_KEY = process.env.HUGGINGFACE_API_KEY!;
const MODEL_URL = "https://api-inference.huggingface.co/models/roberta-base-openai-detector";

export const analyzeResume = async (text: string): Promise<{
  trustScore: number;
  label: string;
}> => {
  const response = await fetch(MODEL_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${HF_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inputs: text }),
  });

  const result = await response.json();

  // 👇 You can tweak this logic
  const trustScore = 100 - (result?.[0]?.score || 0) * 100;
  const label = trustScore > 70 ? "Trusted" : trustScore > 40 ? "Suspicious" : "Likely AI";

  return { trustScore, label };
};
