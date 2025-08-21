import { getSupabaseClient } from './supabaseClient'
import type { Database } from '../../supabase'

export type TournamentCalendarRow = Database['public']['Views']['tournament_calendar']['Row']
export type TournamentResultsRow = Database['public']['Views']['tournament_results']['Row']
export type TournamentTeamRosterRow = Database['public']['Views']['tournament_team_rosters']['Row']

// tournament_calendar
export async function getTournamentCalendarById(tournamentId: string) {
  const supabase = getSupabaseClient()
  const { data, error } = await supabase
    .from('tournament_calendar')
    .select('*')
    .eq('id', tournamentId)
    .maybeSingle()

  if (error) throw error
  return data as TournamentCalendarRow | null
}

export async function listTournamentCalendar(params?: {
  organizer_name?: Database['public']['Enums']['leagues']
  status?: Database['public']['Enums']['status']
  game_year?: Database['public']['Enums']['game_year']
  limit?: number
}) {
  const supabase = getSupabaseClient()
  let q = supabase.from('tournament_calendar').select('*')
  if (params?.organizer_name) q = q.eq('organizer_name', params.organizer_name)
  if (params?.status) q = q.eq('tournament_status', params.status)
  if (params?.game_year) q = q.eq('game_year', params.game_year)
  if (params?.limit) q = q.limit(params.limit)
  const { data, error } = await q
  if (error) throw error
  return data as TournamentCalendarRow[]
}

// tournament_results
export async function getTournamentResults(tournamentId: string) {
  const supabase = getSupabaseClient()
  const { data, error } = await supabase
    .from('tournament_results')
    .select('*')
    .eq('tournament_id', tournamentId)
  if (error) throw error
  return data as TournamentResultsRow[]
}

// tournament_team_rosters
export async function getTournamentTeamRosters(tournamentId: string) {
  const supabase = getSupabaseClient()
  const { data, error } = await supabase
    .from('tournament_team_rosters')
    .select('*')
    .eq('tournament_id', tournamentId)
  if (error) throw error
  return data as TournamentTeamRosterRow[]
}
