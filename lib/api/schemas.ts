import { z } from 'zod'

export const ThemeSchema = z.object({
  name: z.string(),
  logo: z.string().optional(),
  colors: z.record(z.string()),
  typography: z.object({ fontFamily: z.string().optional() }).optional(),
  shapes: z.object({ radius: z.string().optional() }).optional(),
})
export type Theme = z.infer<typeof ThemeSchema>

export const TournamentSchema = z.object({
  slug: z.string(),
  name: z.string(),
  description: z.string().optional(),
  theme: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  socials: z.object({
    twitter: z.string().optional(),
    twitch: z.string().optional(),
    youtube: z.string().optional(),
    website: z.string().optional(),
  }).partial().optional(),
  sponsors: z.array(z.object({ name: z.string(), logo: z.string().optional(), url: z.string().optional() })).optional(),
})
export type Tournament = z.infer<typeof TournamentSchema>

export const TeamSchema = z.object({
  slug: z.string(),
  name: z.string(),
  logo: z.string().optional(),
  seed: z.number().optional(),
  record: z.object({ wins: z.number(), losses: z.number() }).optional(),
})
export type Team = z.infer<typeof TeamSchema>

export const PlayerSchema = z.object({
  slug: z.string(),
  name: z.string(),
  handle: z.string().optional(),
  avatar: z.string().optional(),
  role: z.string().optional(),
  teamSlug: z.string().optional(),
})
export type Player = z.infer<typeof PlayerSchema>

export const MatchSchema = z.object({
  id: z.string(),
  tournamentSlug: z.string(),
  scheduledAt: z.string().optional(),
  stage: z.string().optional(),
  teams: z.array(z.object({ teamSlug: z.string(), score: z.number().optional() })).length(2),
  vodUrl: z.string().optional(),
  assets: z.array(z.string()).optional(),
})
export type Match = z.infer<typeof MatchSchema>

export const StandingSchema = z.object({
  teamSlug: z.string(),
  wins: z.number(),
  losses: z.number(),
  winPct: z.number().optional(),
  pointDiff: z.number().optional(),
  rating: z.number().optional(),
})
export type Standing = z.infer<typeof StandingSchema>

export const NewsSchema = z.object({
  slug: z.string(),
  title: z.string(),
  excerpt: z.string().optional(),
  publishedAt: z.string().optional(),
  bodyMd: z.string().optional(),
})
export type News = z.infer<typeof NewsSchema>
