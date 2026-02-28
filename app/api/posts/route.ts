import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(10)

  if (error) {
    console.error('[posts] Supabase fetch error:', error.message)
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }

  return NextResponse.json({ posts: data })
}
