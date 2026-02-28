import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { supabase } from '@/lib/supabase'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

const TOPICS = [
  'UX Design',
  'Systems Architecture',
  'Defense Tech',
  'Digital Transformation',
  'Human Factors',
  'Emerging Tech',
]

const SYSTEM_PROMPT = `You are a ghostwriter for Benjamin Jameson, a defense technology professional who designs user interfaces and software for defense and military applications. Write engaging LinkedIn posts that:
- Share insights about defense technology, military UX/UI, digital transformation in defense, or emerging tech in the defense sector
- Sound authentic, professional, and thoughtful — not corporate or generic
- Are 150-250 words
- Include 2-3 relevant hashtags at the end
- Occasionally reference real challenges in defense tech (legacy systems, operator experience, data visualization for commanders, human factors in high-stakes environments)
- Never discuss classified information or operational details
- Vary the format: sometimes an insight, sometimes a question to the audience, sometimes a short story/observation

Return a JSON object with exactly these fields:
{
  "title": "A short headline for the post (for display purposes, not posted to LinkedIn)",
  "content": "The full LinkedIn post text including hashtags",
  "topic": "One of: UX Design | Systems Architecture | Defense Tech | Digital Transformation | Human Factors | Emerging Tech"
}`

function isAuthorized(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization')
  const cronSecret = process.env.CRON_SECRET
  if (!cronSecret) return false
  return authHeader === `Bearer ${cronSecret}`
}

async function generateAndSave() {
  const topic = TOPICS[Math.floor(Math.random() * TOPICS.length)]

  const message = await anthropic.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: 'user',
        content: `Write a LinkedIn post about the topic: "${topic}". Return only the JSON object, no additional text or markdown.`,
      },
    ],
  })

  const rawText = message.content[0].type === 'text' ? message.content[0].text : ''

  let parsed: { title: string; content: string; topic: string }
  try {
    parsed = JSON.parse(rawText)
  } catch {
    // Strip any accidental markdown fences if the model adds them
    const cleaned = rawText.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '').trim()
    parsed = JSON.parse(cleaned)
  }

  if (!parsed.title || !parsed.content || !parsed.topic) {
    throw new Error('Claude response missing required fields')
  }

  const { data, error } = await supabase
    .from('posts')
    .insert({
      title: parsed.title,
      content: parsed.content,
      topic: parsed.topic,
    })
    .select()
    .single()

  if (error) {
    throw new Error(`Supabase insert error: ${error.message}`)
  }

  return data
}

// POST — manual trigger (e.g. curl with Authorization header)
export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const post = await generateAndSave()
    return NextResponse.json({ post }, { status: 201 })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('[generate] Error:', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

// GET — Vercel cron trigger (sends Authorization: Bearer ${CRON_SECRET})
export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const post = await generateAndSave()
    return NextResponse.json({ post }, { status: 201 })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('[generate] Error:', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
