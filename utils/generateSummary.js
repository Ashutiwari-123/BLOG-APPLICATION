const { HfInference } = require('@huggingface/inference');

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

const generateSummary = async (content) => {
  try {
    const result = await hf.summarization({
      model: 'facebook/bart-large-cnn', // Pretrained summarization model
      inputs: content,
    });
    return result.summary_text;
  } catch (error) {
    console.error("Error generating summary:", error.message);
    throw new Error("Failed to generate summary");
  }
};

module.exports = generateSummary;
