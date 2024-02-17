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

export default {
	async fetch(request, env, ctx) {
    const ai = new Ai(env.AI)

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
}
