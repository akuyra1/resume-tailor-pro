// example.mjs
import OpenAI from "openai";

// Create an instance of the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Reads your API key from the environment variable
});

// Make an API call to generate a chat completion
const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",  // Ensure you have access to this model or change to "gpt-3.5-turbo"
    messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
            role: "user",
            content: "Write a haiku about recursion in programming.",
        },
    ],
    store: true, // Optional flag if you want to store the conversation context
});

// Output the generated message from the assistant
console.log(completion.choices[0].message);
