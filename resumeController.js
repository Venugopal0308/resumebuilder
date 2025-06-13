exports.getSuggestions = async (req, res) => {
  const { summary, experience } = req.body;

  console.log("API HIT: /suggestions");
  console.log("Summary:", summary);
  console.log("Experience:", experience);

  if (!summary || !experience) {
    return res.status(400).json({ error: "Missing summary or experience" });
  }

  const prompt = `Improve this resume summary and experience:\n\nSummary: ${summary}\n\nExperience: ${experience}`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    const message = completion.choices[0]?.message?.content;
    res.json({ suggestions: message });
  } catch (error) {
    console.error("OpenAI API Error:", error);
    res.status(500).json({ error: error.message || "Unknown error" });
  }
};
