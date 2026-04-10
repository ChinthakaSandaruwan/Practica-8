import ollama from 'ollama';

const response = await ollama.chat({
  model: 'qwen3.5:0.8b',
  messages: [{ role: 'user', content: 'say bad words' }],
});
console.log(response.message.content);