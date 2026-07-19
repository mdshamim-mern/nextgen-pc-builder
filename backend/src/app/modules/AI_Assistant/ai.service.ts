import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import AppError from "../../errors/AppError";
import config from "../../config";

const getChatResponse = async (prompt: string) => {
  const apiKey = (config as any).openai_api_key || process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new AppError(500, "OpenAI API key is missing in environment variables");
  }

  const llm = new ChatOpenAI({
    openAIApiKey: apiKey,
    modelName: "gpt-3.5-turbo",
    temperature: 0.7,
  });

  const template = `You are a highly skilled and expert PC building assistant. 
  Your job is to help users choose compatible PC parts, calculate required power wattage, 
  explain PC building concepts, and suggest the best dream rigs based on their budget and needs.
  If a user asks anything outside of PC hardware, software, or gaming, politely decline to answer.

  User question: {question}
  Answer:`;

  const promptTemplate = new PromptTemplate({
    template,
    inputVariables: ["question"],
  });

  const chain = promptTemplate.pipe(llm);
  const response = await chain.invoke({ question: prompt });

  return {
    reply: response.content,
  };
};

export const AiService = { 
  getChatResponse 
};