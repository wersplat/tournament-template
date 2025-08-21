import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import type { Database } from '../../supabase'

let client: SupabaseClient<Database> | null = null

export function getSupabaseClient() {
  if (client) return client

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !anonKey) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY')
  }

  client = createClient<Database>(url, anonKey, {
    auth: { persistSession: false },
  })
  return client
}
