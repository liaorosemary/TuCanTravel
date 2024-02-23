/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { Hono } from 'hono'
import { Ai } from '@cloudflare/ai'
/*
export default {

    const answer = await ai.run(
      '@cf/meta/llama-2-7b-chat-int8',
      {
        messages: [
          { role: 'user', content: `Who's Le Sserafim.`}
        ]
      }
    )

    return new Response(JSON.stringify(answer))
	}
}*/

import userInfoForm from './userInfoForm.html'

const app = new Hono()

app.get('/', c=> {
  return c.html(streaming)
})

app.get('/b', c=>{
  return c.html(userInfoForm)
})

app.get("/streamstream", async => {
 const ai = new Ai(c.env.AI)
  
  const query = c.req.query("query") //?query = Hey!!! How you doing?
  const question = query || 'What is the square root of 9?' //the question they ask

  const messages = [
    {role: "system", content:"You are a helpful assistant"}, //Context/role of AI
    {role: "assistant", content:"You should respond in 2 - 3 sentences"}, //Limitations to answer | may not work
    {role: "user", content:question}
  ]

  const aiResponse = ai.run( //fix this later (used to have await)
    '@cf/meta/llama-2-7b-chat-int8', //check if this is right
    {messages, stream: true}
  ) // {Answer}

  return new Response(aiResponse,{
    headers:{
      'Content-Type':'text/event-stream'
    }
  })
  

})

app.post('/', async c => {
  const ai = new Ai(c.env.AI)
  results = []
  
  const body = await c.req.json()
  const questions = body.query || 'Hello, how you doing?' //the question they ask

  for (q in questions) {
    const messages = [
      {role: "system", content:"You are a helpful assistant"}, //Context/role of AI
      {role: "assistant", content:"You should respond in 2 - 3 sentences"}, //Limitations to answer | may not work
      {role: "user", content:question}
    ]

    const aiResponse = await ai.run(
      '@cf/meta/llama-2-7b-chat-int8', //check if this is right
      {messages}
    ) // {Answer}

    results.push("***" + c.text(aiResponse.response))
  }

  return c.text(results)
})

export default app

