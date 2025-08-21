export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          extensions?: Json
          operationName?: string
          query?: string
          variables?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      alembic_version: {
        Row: {
          version_num: string
        }
        Insert: {
          version_num: string
        }
        Update: {
          version_num?: string
        }
        Relationships: []
      }
      awards_race: {
        Row: {
          award_type: Database["public"]["Enums"]["award_types"] | null
          award_winner: boolean | null
          created_at: string
          id: string
          league_id: string | null
          player_id: string | null
          rank: number | null
          rp_bonus: number | null
          team_id: string
          tournament_id: string | null
        }
        Insert: {
          award_type?: Database["public"]["Enums"]["award_types"] | null
          award_winner?: boolean | null
          created_at?: string
          id?: string
          league_id?: string | null
          player_id?: string | null
          rank?: number | null
          rp_bonus?: number | null
          team_id: string
          tournament_id?: string | null
        }
        Update: {
          award_type?: Database["public"]["Enums"]["award_types"] | null
          award_winner?: boolean | null
          created_at?: string
          id?: string
          league_id?: string | null
          player_id?: string | null
          rank?: number | null
          rp_bonus?: number | null
          team_id?: string
          tournament_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "awards_race_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_calendar"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "awards_race_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "awards_race_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "awards_race_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "leagues_info"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "awards_race_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["organizer_id"]
          },
          {
            foreignKeyName: "awards_race_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["player_id"]
          },
          {
            foreignKeyName: "awards_race_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "player_performance_by_game_year"
            referencedColumns: ["player_id"]
          },
          {
            foreignKeyName: "awards_race_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "player_performance_by_year"
            referencedColumns: ["player_id"]
          },
          {
            foreignKeyName: "awards_race_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "player_performance_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "awards_race_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "awards_race_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "awards_race_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "awards_race_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_game_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "awards_race_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "awards_race_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "awards_race_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "awards_race_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "awards_race_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "awards_race_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["tournament_id"]
          },
          {
            foreignKeyName: "awards_race_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournaments"
            referencedColumns: ["id"]
          },
        ]
      }
      draft_pool: {
        Row: {
          created_at: string | null
          declared_at: string | null
          draft_notes: string | null
          draft_rating: number | null
          league_id: string | null
          player_id: string
          season: string | null
          status: string | null
          tournament_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          declared_at?: string | null
          draft_notes?: string | null
          draft_rating?: number | null
          league_id?: string | null
          player_id: string
          season?: string | null
          status?: string | null
          tournament_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          declared_at?: string | null
          draft_notes?: string | null
          draft_rating?: number | null
          league_id?: string | null
          player_id?: string
          season?: string | null
          status?: string | null
          tournament_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "draft_pool_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_calendar"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "draft_pool_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "draft_pool_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "draft_pool_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "leagues_info"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "draft_pool_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["organizer_id"]
          },
          {
            foreignKeyName: "draft_pool_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: true
            referencedRelation: "league_team_rosters"
            referencedColumns: ["player_id"]
          },
          {
            foreignKeyName: "draft_pool_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: true
            referencedRelation: "player_performance_by_game_year"
            referencedColumns: ["player_id"]
          },
          {
            foreignKeyName: "draft_pool_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: true
            referencedRelation: "player_performance_by_year"
            referencedColumns: ["player_id"]
          },
          {
            foreignKeyName: "draft_pool_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: true
            referencedRelation: "player_performance_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "draft_pool_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: true
            referencedRelation: "players"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "draft_pool_season_fkey"
            columns: ["season"]
            isOneToOne: false
            referencedRelation: "league_calendar"
            referencedColumns: ["season_id"]
          },
          {
            foreignKeyName: "draft_pool_season_fkey"
            columns: ["season"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["season_id"]
          },
          {
            foreignKeyName: "draft_pool_season_fkey"
            columns: ["season"]
            isOneToOne: false
            referencedRelation: "league_seasons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "draft_pool_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "draft_pool_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["tournament_id"]
          },
          {
            foreignKeyName: "draft_pool_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournaments"
            referencedColumns: ["id"]
          },
        ]
      }
      event_results: {
        Row: {
          awarded_at: string | null
          bonus_rp: number | null
          id: string
          league_id: string | null
          placement: number | null
          prize_amount: number | null
          rp_awarded: number | null
          rp_decay_start_days: number | null
          season_id: string | null
          team_id: string
          total_rp: number | null
          tournament_id: string | null
          winner_banner_url: string | null
        }
        Insert: {
          awarded_at?: string | null
          bonus_rp?: number | null
          id?: string
          league_id?: string | null
          placement?: number | null
          prize_amount?: number | null
          rp_awarded?: number | null
          rp_decay_start_days?: number | null
          season_id?: string | null
          team_id: string
          total_rp?: number | null
          tournament_id?: string | null
          winner_banner_url?: string | null
        }
        Update: {
          awarded_at?: string | null
          bonus_rp?: number | null
          id?: string
          league_id?: string | null
          placement?: number | null
          prize_amount?: number | null
          rp_awarded?: number | null
          rp_decay_start_days?: number | null
          season_id?: string | null
          team_id?: string
          total_rp?: number | null
          tournament_id?: string | null
          winner_banner_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_results_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_calendar"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "event_results_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "event_results_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "event_results_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "leagues_info"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_results_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["organizer_id"]
          },
          {
            foreignKeyName: "event_results_season_id_fkey"
            columns: ["season_id"]
            isOneToOne: false
            referencedRelation: "league_calendar"
            referencedColumns: ["season_id"]
          },
          {
            foreignKeyName: "event_results_season_id_fkey"
            columns: ["season_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["season_id"]
          },
          {
            foreignKeyName: "event_results_season_id_fkey"
            columns: ["season_id"]
            isOneToOne: false
            referencedRelation: "league_seasons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_results_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "event_results_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "event_results_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_game_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "event_results_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "event_results_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "event_results_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_results_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "event_results_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_results_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["tournament_id"]
          },
          {
            foreignKeyName: "event_results_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournaments"
            referencedColumns: ["id"]
          },
        ]
      }
      event_tiers: {
        Row: {
          created_at: string
          event_tier: Database["public"]["Enums"]["event_tier"] | null
          event_type: Database["public"]["Enums"]["event_type"] | null
          id: string
          is_tournament: boolean | null
          max_rp: number | null
          player_rp_bonus: number | null
          tier_name: string | null
        }
        Insert: {
          created_at?: string
          event_tier?: Database["public"]["Enums"]["event_tier"] | null
          event_type?: Database["public"]["Enums"]["event_type"] | null
          id?: string
          is_tournament?: boolean | null
          max_rp?: number | null
          player_rp_bonus?: number | null
          tier_name?: string | null
        }
        Update: {
          created_at?: string
          event_tier?: Database["public"]["Enums"]["event_tier"] | null
          event_type?: Database["public"]["Enums"]["event_type"] | null
          id?: string
          is_tournament?: boolean | null
          max_rp?: number | null
          player_rp_bonus?: number | null
          tier_name?: string | null
        }
        Relationships: []
      }
      group_matches: {
        Row: {
          created_at: string | null
          group_id: string
          id: string
          match_id: string
          match_number: number
          round: number
        }
        Insert: {
          created_at?: string | null
          group_id: string
          id?: string
          match_id: string
          match_number: number
          round: number
        }
        Update: {
          created_at?: string | null
          group_id?: string
          id?: string
          match_id?: string
          match_number?: number
          round?: number
        }
        Relationships: [
          {
            foreignKeyName: "group_matches_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "tournament_groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "group_matches_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: false
            referencedRelation: "matches"
            referencedColumns: ["id"]
          },
        ]
      }
      group_standings: {
        Row: {
          group_id: string
          id: string
          losses: number | null
          matches_played: number | null
          point_differential: number | null
          points_against: number | null
          points_for: number | null
          position: number | null
          team_id: string
          updated_at: string | null
          wins: number | null
        }
        Insert: {
          group_id: string
          id?: string
          losses?: number | null
          matches_played?: number | null
          point_differential?: number | null
          points_against?: number | null
          points_for?: number | null
          position?: number | null
          team_id: string
          updated_at?: string | null
          wins?: number | null
        }
        Update: {
          group_id?: string
          id?: string
          losses?: number | null
          matches_played?: number | null
          point_differential?: number | null
          points_against?: number | null
          points_for?: number | null
          position?: number | null
          team_id?: string
          updated_at?: string | null
          wins?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "group_standings_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "tournament_groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "group_standings_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "group_standings_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "group_standings_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_game_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "group_standings_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "group_standings_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "group_standings_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "group_standings_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["team_id"]
          },
        ]
      }
      kv_store_10f5458b: {
        Row: {
          key: string
          value: Json
        }
        Insert: {
          key: string
          value: Json
        }
        Update: {
          key?: string
          value?: Json
        }
        Relationships: []
      }
      league_rp_values: {
        Row: {
          created_at: string
          days_to_complete_decay: number | null
          decay_days_start: number | null
          decay_rate: number | null
          event_tier: Database["public"]["Enums"]["event_tier"] | null
          game_year: Database["public"]["Enums"]["game_year"] | null
          id: string
          league_id: string | null
          leagues: Database["public"]["Enums"]["leagues"] | null
          player_rp_bonus: number | null
          rp_max: number | null
          runner_up_rp: number | null
          winner_rp: number | null
        }
        Insert: {
          created_at?: string
          days_to_complete_decay?: number | null
          decay_days_start?: number | null
          decay_rate?: number | null
          event_tier?: Database["public"]["Enums"]["event_tier"] | null
          game_year?: Database["public"]["Enums"]["game_year"] | null
          id?: string
          league_id?: string | null
          leagues?: Database["public"]["Enums"]["leagues"] | null
          player_rp_bonus?: number | null
          rp_max?: number | null
          runner_up_rp?: number | null
          winner_rp?: number | null
        }
        Update: {
          created_at?: string
          days_to_complete_decay?: number | null
          decay_days_start?: number | null
          decay_rate?: number | null
          event_tier?: Database["public"]["Enums"]["event_tier"] | null
          game_year?: Database["public"]["Enums"]["game_year"] | null
          id?: string
          league_id?: string | null
          leagues?: Database["public"]["Enums"]["leagues"] | null
          player_rp_bonus?: number | null
          rp_max?: number | null
          runner_up_rp?: number | null
          winner_rp?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "league_rp_values_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_calendar"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "league_rp_values_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "league_rp_values_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "league_rp_values_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "leagues_info"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "league_rp_values_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["organizer_id"]
          },
        ]
      }
      league_seasons: {
        Row: {
          created_at: string
          end_date: string
          id: string
          is_active: boolean | null
          league_id: string | null
          league_name: Database["public"]["Enums"]["leagues"]
          season_number: number
          start_date: string
          updated_at: string
          year: Database["public"]["Enums"]["game_year"] | null
        }
        Insert: {
          created_at?: string
          end_date: string
          id?: string
          is_active?: boolean | null
          league_id?: string | null
          league_name: Database["public"]["Enums"]["leagues"]
          season_number: number
          start_date: string
          updated_at?: string
          year?: Database["public"]["Enums"]["game_year"] | null
        }
        Update: {
          created_at?: string
          end_date?: string
          id?: string
          is_active?: boolean | null
          league_id?: string | null
          league_name?: Database["public"]["Enums"]["leagues"]
          season_number?: number
          start_date?: string
          updated_at?: string
          year?: Database["public"]["Enums"]["game_year"] | null
        }
        Relationships: [
          {
            foreignKeyName: "league_seasons_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_calendar"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "league_seasons_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "league_seasons_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "league_seasons_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "leagues_info"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "league_seasons_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["organizer_id"]
          },
          {
            foreignKeyName: "league_seasons_league_name_fkey"
            columns: ["league_name"]
            isOneToOne: false
            referencedRelation: "league_calendar"
            referencedColumns: ["league_name"]
          },
          {
            foreignKeyName: "league_seasons_league_name_fkey"
            columns: ["league_name"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["league_name"]
          },
          {
            foreignKeyName: "league_seasons_league_name_fkey"
            columns: ["league_name"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["league_name"]
          },
          {
            foreignKeyName: "league_seasons_league_name_fkey"
            columns: ["league_name"]
            isOneToOne: false
            referencedRelation: "leagues_info"
            referencedColumns: ["league"]
          },
          {
            foreignKeyName: "league_seasons_league_name_fkey"
            columns: ["league_name"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["organizer_name"]
          },
          {
            foreignKeyName: "league_seasons_league_name_fkey"
            columns: ["league_name"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["organizer_name"]
          },
        ]
      }
      leagues_info: {
        Row: {
          created_at: string
          id: string
          league: Database["public"]["Enums"]["leagues"] | null
          lg_discord: string | null
          lg_logo_url: string | null
          lg_url: string | null
          sponsor_info: string | null
          twitch_url: string | null
          twitter_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          league?: Database["public"]["Enums"]["leagues"] | null
          lg_discord?: string | null
          lg_logo_url?: string | null
          lg_url?: string | null
          sponsor_info?: string | null
          twitch_url?: string | null
          twitter_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          league?: Database["public"]["Enums"]["leagues"] | null
          lg_discord?: string | null
          lg_logo_url?: string | null
          lg_url?: string | null
          sponsor_info?: string | null
          twitch_url?: string | null
          twitter_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "leagues_info_sponsor_info_fkey"
            columns: ["sponsor_info"]
            isOneToOne: false
            referencedRelation: "sponsor_info"
            referencedColumns: ["sponsor_name"]
          },
        ]
      }
      lg_conf: {
        Row: {
          abbr: string | null
          conf_logo: string | null
          created_at: string
          gm_yr: Database["public"]["Enums"]["game_year"] | null
          id: string
          league: string | null
          name: string | null
          season: string | null
        }
        Insert: {
          abbr?: string | null
          conf_logo?: string | null
          created_at?: string
          gm_yr?: Database["public"]["Enums"]["game_year"] | null
          id?: string
          league?: string | null
          name?: string | null
          season?: string | null
        }
        Update: {
          abbr?: string | null
          conf_logo?: string | null
          created_at?: string
          gm_yr?: Database["public"]["Enums"]["game_year"] | null
          id?: string
          league?: string | null
          name?: string | null
          season?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lg_conf_league_fkey"
            columns: ["league"]
            isOneToOne: false
            referencedRelation: "league_calendar"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "lg_conf_league_fkey"
            columns: ["league"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "lg_conf_league_fkey"
            columns: ["league"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "lg_conf_league_fkey"
            columns: ["league"]
            isOneToOne: false
            referencedRelation: "leagues_info"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lg_conf_league_fkey"
            columns: ["league"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["organizer_id"]
          },
          {
            foreignKeyName: "lg_conf_season_fkey"
            columns: ["season"]
            isOneToOne: false
            referencedRelation: "league_calendar"
            referencedColumns: ["season_id"]
          },
          {
            foreignKeyName: "lg_conf_season_fkey"
            columns: ["season"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["season_id"]
          },
          {
            foreignKeyName: "lg_conf_season_fkey"
            columns: ["season"]
            isOneToOne: false
            referencedRelation: "league_seasons"
            referencedColumns: ["id"]
          },
        ]
      }
      match_mvp: {
        Row: {
          match_id: string
          player_id: string
        }
        Insert: {
          match_id: string
          player_id: string
        }
        Update: {
          match_id?: string
          player_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "match_mvp_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: true
            referencedRelation: "matches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "match_mvp_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["player_id"]
          },
          {
            foreignKeyName: "match_mvp_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "player_performance_by_game_year"
            referencedColumns: ["player_id"]
          },
          {
            foreignKeyName: "match_mvp_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "player_performance_by_year"
            referencedColumns: ["player_id"]
          },
          {
            foreignKeyName: "match_mvp_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "player_performance_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "match_mvp_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["id"]
          },
        ]
      }
      match_points: {
        Row: {
          created_at: string | null
          group_id: string | null
          id: string
          match_id: string
          point_type: string
          points_earned: number
          team_id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          group_id?: string | null
          id?: string
          match_id: string
          point_type: string
          points_earned: number
          team_id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          group_id?: string | null
          id?: string
          match_id?: string
          point_type?: string
          points_earned?: number
          team_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "match_points_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "tournament_groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "match_points_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: false
            referencedRelation: "matches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "match_points_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "match_points_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "match_points_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_game_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "match_points_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "match_points_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "match_points_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "match_points_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["team_id"]
          },
        ]
      }
      match_submissions: {
        Row: {
          created_at: string
          id: string
          league_id: string | null
          match_id: string | null
          payload: Json | null
          review_notes: string | null
          review_status: string | null
          reviewed_at: string | null
          reviewed_by: string | null
          status: string | null
          team_a_id: string | null
          team_a_name: string | null
          team_b_id: string | null
          team_b_name: string | null
          tournament_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          league_id?: string | null
          match_id?: string | null
          payload?: Json | null
          review_notes?: string | null
          review_status?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string | null
          team_a_id?: string | null
          team_a_name?: string | null
          team_b_id?: string | null
          team_b_name?: string | null
          tournament_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          league_id?: string | null
          match_id?: string | null
          payload?: Json | null
          review_notes?: string | null
          review_status?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string | null
          team_a_id?: string | null
          team_a_name?: string | null
          team_b_id?: string | null
          team_b_name?: string | null
          tournament_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "match_submissions_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_calendar"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "match_submissions_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "match_submissions_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "match_submissions_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "leagues_info"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "match_submissions_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["organizer_id"]
          },
          {
            foreignKeyName: "match_submissions_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: false
            referencedRelation: "matches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "match_submissions_team_a_id_fkey"
            columns: ["team_a_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "match_submissions_team_a_id_fkey"
            columns: ["team_a_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "match_submissions_team_a_id_fkey"
            columns: ["team_a_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_game_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "match_submissions_team_a_id_fkey"
            columns: ["team_a_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "match_submissions_team_a_id_fkey"
            columns: ["team_a_id"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "match_submissions_team_a_id_fkey"
            columns: ["team_a_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "match_submissions_team_a_id_fkey"
            columns: ["team_a_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "match_submissions_team_a_name_fkey"
            columns: ["team_a_name"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["team_name"]
          },
          {
            foreignKeyName: "match_submissions_team_a_name_fkey"
            columns: ["team_a_name"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["team_name"]
          },
          {
            foreignKeyName: "match_submissions_team_a_name_fkey"
            columns: ["team_a_name"]
            isOneToOne: false
            referencedRelation: "player_performance_view"
            referencedColumns: ["team_name"]
          },
          {
            foreignKeyName: "match_submissions_team_a_name_fkey"
            columns: ["team_a_name"]
            isOneToOne: false
            referencedRelation: "team_performance_by_game_year"
            referencedColumns: ["team_name"]
          },
          {
            foreignKeyName: "match_submissions_team_a_name_fkey"
            columns: ["team_a_name"]
            isOneToOne: false
            referencedRelation: "team_performance_by_year"
            referencedColumns: ["team_name"]
          },
          {
            foreignKeyName: "match_submissions_team_a_name_fkey"
            columns: ["team_a_name"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["team_name"]
          },
          {
            foreignKeyName: "match_submissions_team_a_name_fkey"
            columns: ["team_a_name"]
            isOneToOne: false
            referencedRelation: "team_roster_current"
            referencedColumns: ["team_name"]
          },
          {
            foreignKeyName: "match_submissions_team_a_name_fkey"
            columns: ["team_a_name"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "match_submissions_team_a_name_fkey"
            columns: ["team_a_name"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["champion_name"]
          },
          {
            foreignKeyName: "match_submissions_team_a_name_fkey"
            columns: ["team_a_name"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["runner_up_name"]
          },
          {
            foreignKeyName: "match_submissions_team_a_name_fkey"
            columns: ["team_a_name"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["third_place_name"]
          },
          {
            foreignKeyName: "match_submissions_team_a_name_fkey"
            columns: ["team_a_name"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["team_name"]
          },
          {
            foreignKeyName: "match_submissions_team_a_name_fkey"
            columns: ["team_a_name"]
            isOneToOne: false
            referencedRelation: "tournament_team_rosters"
            referencedColumns: ["team_name"]
          },
          {
            foreignKeyName: "match_submissions_team_b_id_fkey"
            columns: ["team_b_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "match_submissions_team_b_id_fkey"
            columns: ["team_b_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "match_submissions_team_b_id_fkey"
            columns: ["team_b_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_game_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "match_submissions_team_b_id_fkey"
            columns: ["team_b_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "match_submissions_team_b_id_fkey"
            columns: ["team_b_id"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "match_submissions_team_b_id_fkey"
            columns: ["team_b_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "match_submissions_team_b_id_fkey"
            columns: ["team_b_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "match_submissions_team_b_name_fkey"
            columns: ["team_b_name"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["team_name"]
          },
          {
            foreignKeyName: "match_submissions_team_b_name_fkey"
            columns: ["team_b_name"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["team_name"]
          },
          {
            foreignKeyName: "match_submissions_team_b_name_fkey"
            columns: ["team_b_name"]
            isOneToOne: false
            referencedRelation: "player_performance_view"
            referencedColumns: ["team_name"]
          },
          {
            foreignKeyName: "match_submissions_team_b_name_fkey"
            columns: ["team_b_name"]
            isOneToOne: false
            referencedRelation: "team_performance_by_game_year"
            referencedColumns: ["team_name"]
          },
          {
            foreignKeyName: "match_submissions_team_b_name_fkey"
            columns: ["team_b_name"]
            isOneToOne: false
            referencedRelation: "team_performance_by_year"
            referencedColumns: ["team_name"]
          },
          {
            foreignKeyName: "match_submissions_team_b_name_fkey"
            columns: ["team_b_name"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["team_name"]
          },
          {
            foreignKeyName: "match_submissions_team_b_name_fkey"
            columns: ["team_b_name"]
            isOneToOne: false
            referencedRelation: "team_roster_current"
            referencedColumns: ["team_name"]
          },
          {
            foreignKeyName: "match_submissions_team_b_name_fkey"
            columns: ["team_b_name"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "match_submissions_team_b_name_fkey"
            columns: ["team_b_name"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["champion_name"]
          },
          {
            foreignKeyName: "match_submissions_team_b_name_fkey"
            columns: ["team_b_name"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["runner_up_name"]
          },
          {
            foreignKeyName: "match_submissions_team_b_name_fkey"
            columns: ["team_b_name"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["third_place_name"]
          },
          {
            foreignKeyName: "match_submissions_team_b_name_fkey"
            columns: ["team_b_name"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["team_name"]
          },
          {
            foreignKeyName: "match_submissions_team_b_name_fkey"
            columns: ["team_b_name"]
            isOneToOne: false
            referencedRelation: "tournament_team_rosters"
            referencedColumns: ["team_name"]
          },
          {
            foreignKeyName: "match_submissions_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "match_submissions_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["tournament_id"]
          },
          {
            foreignKeyName: "match_submissions_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournaments"
            referencedColumns: ["id"]
          },
        ]
      }
      matches: {
        Row: {
          boxscore_url: string | null
          game_number: number | null
          game_year: Database["public"]["Enums"]["game_year"] | null
          id: string
          league_id: string | null
          league_season: string | null
          played_at: string | null
          score_a: number | null
          score_b: number | null
          stage: Database["public"]["Enums"]["stage"] | null
          team_a_id: string | null
          team_a_name: string | null
          team_b_id: string | null
          team_b_name: string | null
          tournament_id: string | null
          winner_id: string | null
        }
        Insert: {
          boxscore_url?: string | null
          game_number?: number | null
          game_year?: Database["public"]["Enums"]["game_year"] | null
          id?: string
          league_id?: string | null
          league_season?: string | null
          played_at?: string | null
          score_a?: number | null
          score_b?: number | null
          stage?: Database["public"]["Enums"]["stage"] | null
          team_a_id?: string | null
          team_a_name?: string | null
          team_b_id?: string | null
          team_b_name?: string | null
          tournament_id?: string | null
          winner_id?: string | null
        }
        Update: {
          boxscore_url?: string | null
          game_number?: number | null
          game_year?: Database["public"]["Enums"]["game_year"] | null
          id?: string
          league_id?: string | null
          league_season?: string | null
          played_at?: string | null
          score_a?: number | null
          score_b?: number | null
          stage?: Database["public"]["Enums"]["stage"] | null
          team_a_id?: string | null
          team_a_name?: string | null
          team_b_id?: string | null
          team_b_name?: string | null
          tournament_id?: string | null
          winner_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "matches_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_calendar"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "matches_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "matches_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "matches_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "leagues_info"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matches_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["organizer_id"]
          },
          {
            foreignKeyName: "matches_league_season_fkey"
            columns: ["league_season"]
            isOneToOne: false
            referencedRelation: "league_calendar"
            referencedColumns: ["season_id"]
          },
          {
            foreignKeyName: "matches_league_season_fkey"
            columns: ["league_season"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["season_id"]
          },
          {
            foreignKeyName: "matches_league_season_fkey"
            columns: ["league_season"]
            isOneToOne: false
            referencedRelation: "league_seasons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matches_team_a_id_fkey"
            columns: ["team_a_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "matches_team_a_id_fkey"
            columns: ["team_a_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "matches_team_a_id_fkey"
            columns: ["team_a_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_game_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "matches_team_a_id_fkey"
            columns: ["team_a_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "matches_team_a_id_fkey"
            columns: ["team_a_id"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "matches_team_a_id_fkey"
            columns: ["team_a_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matches_team_a_id_fkey"
            columns: ["team_a_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "matches_team_b_id_fkey"
            columns: ["team_b_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "matches_team_b_id_fkey"
            columns: ["team_b_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "matches_team_b_id_fkey"
            columns: ["team_b_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_game_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "matches_team_b_id_fkey"
            columns: ["team_b_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "matches_team_b_id_fkey"
            columns: ["team_b_id"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "matches_team_b_id_fkey"
            columns: ["team_b_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matches_team_b_id_fkey"
            columns: ["team_b_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "matches_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matches_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["tournament_id"]
          },
          {
            foreignKeyName: "matches_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournaments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matches_winner_id_fkey"
            columns: ["winner_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "matches_winner_id_fkey"
            columns: ["winner_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "matches_winner_id_fkey"
            columns: ["winner_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_game_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "matches_winner_id_fkey"
            columns: ["winner_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "matches_winner_id_fkey"
            columns: ["winner_id"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "matches_winner_id_fkey"
            columns: ["winner_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "matches_winner_id_fkey"
            columns: ["winner_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["team_id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string
          id: string
          message: string | null
          read: boolean
          title: string
          type: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          message?: string | null
          read?: boolean
          title: string
          type?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          message?: string | null
          read?: boolean
          title?: string
          type?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      past_champions: {
        Row: {
          champion_logo: string | null
          console: Database["public"]["Enums"]["console"] | null
          created_at: string
          event_tier: Database["public"]["Enums"]["event_tier"] | null
          id: string
          is_tournament: boolean
          league_id: string | null
          league_name: Database["public"]["Enums"]["leagues"] | null
          lg_logo: string | null
          season: number | null
          team_id: string | null
          team_name: string | null
          tournament_date: string | null
          tournament_id: string | null
          year: Database["public"]["Enums"]["game_year"] | null
        }
        Insert: {
          champion_logo?: string | null
          console?: Database["public"]["Enums"]["console"] | null
          created_at?: string
          event_tier?: Database["public"]["Enums"]["event_tier"] | null
          id?: string
          is_tournament?: boolean
          league_id?: string | null
          league_name?: Database["public"]["Enums"]["leagues"] | null
          lg_logo?: string | null
          season?: number | null
          team_id?: string | null
          team_name?: string | null
          tournament_date?: string | null
          tournament_id?: string | null
          year?: Database["public"]["Enums"]["game_year"] | null
        }
        Update: {
          champion_logo?: string | null
          console?: Database["public"]["Enums"]["console"] | null
          created_at?: string
          event_tier?: Database["public"]["Enums"]["event_tier"] | null
          id?: string
          is_tournament?: boolean
          league_id?: string | null
          league_name?: Database["public"]["Enums"]["leagues"] | null
          lg_logo?: string | null
          season?: number | null
          team_id?: string | null
          team_name?: string | null
          tournament_date?: string | null
          tournament_id?: string | null
          year?: Database["public"]["Enums"]["game_year"] | null
        }
        Relationships: [
          {
            foreignKeyName: "past_champions_champion_logo_fkey"
            columns: ["champion_logo"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["logo_url"]
          },
          {
            foreignKeyName: "past_champions_champion_logo_fkey"
            columns: ["champion_logo"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["logo_url"]
          },
          {
            foreignKeyName: "past_champions_champion_logo_fkey"
            columns: ["champion_logo"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["logo_url"]
          },
          {
            foreignKeyName: "past_champions_champion_logo_fkey"
            columns: ["champion_logo"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["champion_logo"]
          },
          {
            foreignKeyName: "past_champions_champion_logo_fkey"
            columns: ["champion_logo"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["runner_up_logo"]
          },
          {
            foreignKeyName: "past_champions_champion_logo_fkey"
            columns: ["champion_logo"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["third_place_logo"]
          },
          {
            foreignKeyName: "past_champions_champion_logo_fkey"
            columns: ["champion_logo"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["logo_url"]
          },
          {
            foreignKeyName: "past_champions_champion_logo_fkey"
            columns: ["champion_logo"]
            isOneToOne: false
            referencedRelation: "tournament_team_rosters"
            referencedColumns: ["team_logo"]
          },
          {
            foreignKeyName: "past_champions_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_calendar"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "past_champions_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "past_champions_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "past_champions_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "leagues_info"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "past_champions_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["organizer_id"]
          },
          {
            foreignKeyName: "past_champions_lg_logo_fkey"
            columns: ["lg_logo"]
            isOneToOne: false
            referencedRelation: "league_calendar"
            referencedColumns: ["league_logo"]
          },
          {
            foreignKeyName: "past_champions_lg_logo_fkey"
            columns: ["lg_logo"]
            isOneToOne: false
            referencedRelation: "leagues_info"
            referencedColumns: ["lg_logo_url"]
          },
          {
            foreignKeyName: "past_champions_lg_logo_fkey"
            columns: ["lg_logo"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["league_logo"]
          },
          {
            foreignKeyName: "past_champions_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "past_champions_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "past_champions_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_game_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "past_champions_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "past_champions_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "past_champions_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "past_champions_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "past_champions_team_name_fkey"
            columns: ["team_name"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["team_name"]
          },
          {
            foreignKeyName: "past_champions_team_name_fkey"
            columns: ["team_name"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["team_name"]
          },
          {
            foreignKeyName: "past_champions_team_name_fkey"
            columns: ["team_name"]
            isOneToOne: false
            referencedRelation: "player_performance_view"
            referencedColumns: ["team_name"]
          },
          {
            foreignKeyName: "past_champions_team_name_fkey"
            columns: ["team_name"]
            isOneToOne: false
            referencedRelation: "team_performance_by_game_year"
            referencedColumns: ["team_name"]
          },
          {
            foreignKeyName: "past_champions_team_name_fkey"
            columns: ["team_name"]
            isOneToOne: false
            referencedRelation: "team_performance_by_year"
            referencedColumns: ["team_name"]
          },
          {
            foreignKeyName: "past_champions_team_name_fkey"
            columns: ["team_name"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["team_name"]
          },
          {
            foreignKeyName: "past_champions_team_name_fkey"
            columns: ["team_name"]
            isOneToOne: false
            referencedRelation: "team_roster_current"
            referencedColumns: ["team_name"]
          },
          {
            foreignKeyName: "past_champions_team_name_fkey"
            columns: ["team_name"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "past_champions_team_name_fkey"
            columns: ["team_name"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["champion_name"]
          },
          {
            foreignKeyName: "past_champions_team_name_fkey"
            columns: ["team_name"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["runner_up_name"]
          },
          {
            foreignKeyName: "past_champions_team_name_fkey"
            columns: ["team_name"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["third_place_name"]
          },
          {
            foreignKeyName: "past_champions_team_name_fkey"
            columns: ["team_name"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["team_name"]
          },
          {
            foreignKeyName: "past_champions_team_name_fkey"
            columns: ["team_name"]
            isOneToOne: false
            referencedRelation: "tournament_team_rosters"
            referencedColumns: ["team_name"]
          },
          {
            foreignKeyName: "past_champions_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "past_champions_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["tournament_id"]
          },
          {
            foreignKeyName: "past_champions_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournaments"
            referencedColumns: ["id"]
          },
        ]
      }
      player_badges: {
        Row: {
          badge_type: string
          created_at: string
          id: string
          ipfs_uri: string | null
          league_id: string | null
          match_id: number
          player_wallet: string
          token_id: number | null
          tournament_id: string | null
          tx_hash: string | null
        }
        Insert: {
          badge_type: string
          created_at?: string
          id?: string
          ipfs_uri?: string | null
          league_id?: string | null
          match_id: number
          player_wallet: string
          token_id?: number | null
          tournament_id?: string | null
          tx_hash?: string | null
        }
        Update: {
          badge_type?: string
          created_at?: string
          id?: string
          ipfs_uri?: string | null
          league_id?: string | null
          match_id?: number
          player_wallet?: string
          token_id?: number | null
          tournament_id?: string | null
          tx_hash?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "player_badges_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_calendar"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "player_badges_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "player_badges_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "player_badges_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "leagues_info"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "player_badges_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["organizer_id"]
          },
          {
            foreignKeyName: "player_badges_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "player_badges_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["tournament_id"]
          },
          {
            foreignKeyName: "player_badges_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournaments"
            referencedColumns: ["id"]
          },
        ]
      }
      player_rp_transactions: {
        Row: {
          amount: number
          created_at: string
          description: string
          id: string
          league_id: string | null
          match_id: string | null
          player_id: string | null
          tournament_id: string | null
          type: string
          updated_at: string
        }
        Insert: {
          amount: number
          created_at?: string
          description: string
          id?: string
          league_id?: string | null
          match_id?: string | null
          player_id?: string | null
          tournament_id?: string | null
          type: string
          updated_at?: string
        }
        Update: {
          amount?: number
          created_at?: string
          description?: string
          id?: string
          league_id?: string | null
          match_id?: string | null
          player_id?: string | null
          tournament_id?: string | null
          type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "player_rp_transactions_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_calendar"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "player_rp_transactions_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "player_rp_transactions_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "player_rp_transactions_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "leagues_info"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "player_rp_transactions_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["organizer_id"]
          },
          {
            foreignKeyName: "player_rp_transactions_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: false
            referencedRelation: "matches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "player_rp_transactions_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["player_id"]
          },
          {
            foreignKeyName: "player_rp_transactions_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "player_performance_by_game_year"
            referencedColumns: ["player_id"]
          },
          {
            foreignKeyName: "player_rp_transactions_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "player_performance_by_year"
            referencedColumns: ["player_id"]
          },
          {
            foreignKeyName: "player_rp_transactions_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "player_performance_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "player_rp_transactions_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "player_rp_transactions_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "player_rp_transactions_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["tournament_id"]
          },
          {
            foreignKeyName: "player_rp_transactions_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournaments"
            referencedColumns: ["id"]
          },
        ]
      }
      player_salary_tiers: {
        Row: {
          id: number
          max_value: number | null
          min_value: number | null
          multiplier: number
          tier_name: string
        }
        Insert: {
          id?: number
          max_value?: number | null
          min_value?: number | null
          multiplier: number
          tier_name: string
        }
        Update: {
          id?: number
          max_value?: number | null
          min_value?: number | null
          multiplier?: number
          tier_name?: string
        }
        Relationships: []
      }
      player_stats: {
        Row: {
          assists: number | null
          blocks: number | null
          created_at: string | null
          fga: number | null
          fgm: number | null
          fouls: number | null
          fta: number | null
          ftm: number | null
          id: string
          match_id: string
          player_id: string
          player_name: string | null
          plus_minus: number | null
          points: number | null
          ps: number | null
          rebounds: number | null
          steals: number | null
          team_id: string
          three_points_attempted: number | null
          three_points_made: number | null
          turnovers: number | null
          updated_at: string | null
        }
        Insert: {
          assists?: number | null
          blocks?: number | null
          created_at?: string | null
          fga?: number | null
          fgm?: number | null
          fouls?: number | null
          fta?: number | null
          ftm?: number | null
          id?: string
          match_id: string
          player_id: string
          player_name?: string | null
          plus_minus?: number | null
          points?: number | null
          ps?: number | null
          rebounds?: number | null
          steals?: number | null
          team_id: string
          three_points_attempted?: number | null
          three_points_made?: number | null
          turnovers?: number | null
          updated_at?: string | null
        }
        Update: {
          assists?: number | null
          blocks?: number | null
          created_at?: string | null
          fga?: number | null
          fgm?: number | null
          fouls?: number | null
          fta?: number | null
          ftm?: number | null
          id?: string
          match_id?: string
          player_id?: string
          player_name?: string | null
          plus_minus?: number | null
          points?: number | null
          ps?: number | null
          rebounds?: number | null
          steals?: number | null
          team_id?: string
          three_points_attempted?: number | null
          three_points_made?: number | null
          turnovers?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "player_stats_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: false
            referencedRelation: "matches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "player_stats_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["player_id"]
          },
          {
            foreignKeyName: "player_stats_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "player_performance_by_game_year"
            referencedColumns: ["player_id"]
          },
          {
            foreignKeyName: "player_stats_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "player_performance_by_year"
            referencedColumns: ["player_id"]
          },
          {
            foreignKeyName: "player_stats_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "player_performance_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "player_stats_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "player_stats_player_name_fkey"
            columns: ["player_name"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["player_name"]
          },
          {
            foreignKeyName: "player_stats_player_name_fkey"
            columns: ["player_name"]
            isOneToOne: false
            referencedRelation: "player_performance_by_game_year"
            referencedColumns: ["gamertag"]
          },
          {
            foreignKeyName: "player_stats_player_name_fkey"
            columns: ["player_name"]
            isOneToOne: false
            referencedRelation: "player_performance_by_year"
            referencedColumns: ["gamertag"]
          },
          {
            foreignKeyName: "player_stats_player_name_fkey"
            columns: ["player_name"]
            isOneToOne: false
            referencedRelation: "player_performance_view"
            referencedColumns: ["gamertag"]
          },
          {
            foreignKeyName: "player_stats_player_name_fkey"
            columns: ["player_name"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["gamertag"]
          },
          {
            foreignKeyName: "player_stats_player_name_fkey"
            columns: ["player_name"]
            isOneToOne: false
            referencedRelation: "team_roster_current"
            referencedColumns: ["gamertag"]
          },
          {
            foreignKeyName: "player_stats_player_name_fkey"
            columns: ["player_name"]
            isOneToOne: false
            referencedRelation: "tournament_team_rosters"
            referencedColumns: ["gamertag"]
          },
          {
            foreignKeyName: "player_stats_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "player_stats_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "player_stats_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_game_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "player_stats_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "player_stats_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "player_stats_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "player_stats_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["team_id"]
          },
        ]
      }
      players: {
        Row: {
          alternate_gamertag: string | null
          created_at: string | null
          current_team_id: string | null
          discord_id: string | null
          gamertag: string
          id: string
          is_rookie: boolean | null
          monthly_value: number | null
          performance_score: number | null
          player_rank_score: number | null
          player_rp: number | null
          position: Database["public"]["Enums"]["player_position"] | null
          salary_tier: Database["public"]["Enums"]["salary_tier"] | null
          twitter_id: string | null
        }
        Insert: {
          alternate_gamertag?: string | null
          created_at?: string | null
          current_team_id?: string | null
          discord_id?: string | null
          gamertag: string
          id?: string
          is_rookie?: boolean | null
          monthly_value?: number | null
          performance_score?: number | null
          player_rank_score?: number | null
          player_rp?: number | null
          position?: Database["public"]["Enums"]["player_position"] | null
          salary_tier?: Database["public"]["Enums"]["salary_tier"] | null
          twitter_id?: string | null
        }
        Update: {
          alternate_gamertag?: string | null
          created_at?: string | null
          current_team_id?: string | null
          discord_id?: string | null
          gamertag?: string
          id?: string
          is_rookie?: boolean | null
          monthly_value?: number | null
          performance_score?: number | null
          player_rank_score?: number | null
          player_rp?: number | null
          position?: Database["public"]["Enums"]["player_position"] | null
          salary_tier?: Database["public"]["Enums"]["salary_tier"] | null
          twitter_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "players_current_team_id_fkey"
            columns: ["current_team_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "players_current_team_id_fkey"
            columns: ["current_team_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "players_current_team_id_fkey"
            columns: ["current_team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_game_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "players_current_team_id_fkey"
            columns: ["current_team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "players_current_team_id_fkey"
            columns: ["current_team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "players_current_team_id_fkey"
            columns: ["current_team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "players_current_team_id_fkey"
            columns: ["current_team_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["team_id"]
          },
        ]
      }
      profiles: {
        Row: {
          app_role: Database["public"]["Enums"]["app_role"] | null
          created_at: string | null
          email: string | null
          id: string
          role: string
          updated_at: string | null
        }
        Insert: {
          app_role?: Database["public"]["Enums"]["app_role"] | null
          created_at?: string | null
          email?: string | null
          id: string
          role?: string
          updated_at?: string | null
        }
        Update: {
          app_role?: Database["public"]["Enums"]["app_role"] | null
          created_at?: string | null
          email?: string | null
          id?: string
          role?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      ranking_points: {
        Row: {
          awarded_at: string | null
          expires_at: string | null
          id: string
          league_id: string | null
          points: number | null
          source: string | null
          team_id: string | null
          tournament_id: string | null
        }
        Insert: {
          awarded_at?: string | null
          expires_at?: string | null
          id?: string
          league_id?: string | null
          points?: number | null
          source?: string | null
          team_id?: string | null
          tournament_id?: string | null
        }
        Update: {
          awarded_at?: string | null
          expires_at?: string | null
          id?: string
          league_id?: string | null
          points?: number | null
          source?: string | null
          team_id?: string | null
          tournament_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ranking_points_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_calendar"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "ranking_points_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "ranking_points_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "ranking_points_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "leagues_info"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ranking_points_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["organizer_id"]
          },
          {
            foreignKeyName: "ranking_points_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "ranking_points_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "ranking_points_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_game_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "ranking_points_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "ranking_points_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "ranking_points_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ranking_points_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "ranking_points_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ranking_points_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["tournament_id"]
          },
          {
            foreignKeyName: "ranking_points_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournaments"
            referencedColumns: ["id"]
          },
        ]
      }
      regions: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
      role_permissions: {
        Row: {
          id: number
          permission: string
          role: Database["public"]["Enums"]["app_role"] | null
        }
        Insert: {
          id?: never
          permission: string
          role?: Database["public"]["Enums"]["app_role"] | null
        }
        Update: {
          id?: never
          permission?: string
          role?: Database["public"]["Enums"]["app_role"] | null
        }
        Relationships: []
      }
      rp_transactions: {
        Row: {
          amount: number
          created_at: string
          description: string | null
          id: string
          league_id: string | null
          rp_decay_start: number | null
          team_id: string | null
          tournament_id: string | null
          type: string
          updated_at: string
        }
        Insert: {
          amount: number
          created_at?: string
          description?: string | null
          id?: string
          league_id?: string | null
          rp_decay_start?: number | null
          team_id?: string | null
          tournament_id?: string | null
          type: string
          updated_at?: string
        }
        Update: {
          amount?: number
          created_at?: string
          description?: string | null
          id?: string
          league_id?: string | null
          rp_decay_start?: number | null
          team_id?: string | null
          tournament_id?: string | null
          type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "rp_transactions_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_calendar"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "rp_transactions_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "rp_transactions_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "rp_transactions_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "leagues_info"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rp_transactions_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["organizer_id"]
          },
          {
            foreignKeyName: "rp_transactions_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "rp_transactions_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "rp_transactions_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_game_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "rp_transactions_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "rp_transactions_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "rp_transactions_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rp_transactions_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "rp_transactions_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rp_transactions_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["tournament_id"]
          },
          {
            foreignKeyName: "rp_transactions_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournaments"
            referencedColumns: ["id"]
          },
        ]
      }
      salary_tiers: {
        Row: {
          description: string | null
          id: number
          label: string | null
          max_rating: number | null
          min_rating: number | null
          multiplier: number
          salary_tier: Database["public"]["Enums"]["salary_tier"]
        }
        Insert: {
          description?: string | null
          id?: never
          label?: string | null
          max_rating?: number | null
          min_rating?: number | null
          multiplier: number
          salary_tier: Database["public"]["Enums"]["salary_tier"]
        }
        Update: {
          description?: string | null
          id?: never
          label?: string | null
          max_rating?: number | null
          min_rating?: number | null
          multiplier?: number
          salary_tier?: Database["public"]["Enums"]["salary_tier"]
        }
        Relationships: []
      }
      sponsor_info: {
        Row: {
          created_at: string
          id: string
          sponsor_logo: string | null
          sponsor_name: string | null
          sponsor_url: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          sponsor_logo?: string | null
          sponsor_name?: string | null
          sponsor_url?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          sponsor_logo?: string | null
          sponsor_name?: string | null
          sponsor_url?: string | null
        }
        Relationships: []
      }
      team_match_stats: {
        Row: {
          assists: number
          blocks: number
          field_goals_attempted: number
          field_goals_made: number
          fouls: number | null
          free_throws_attempted: number
          free_throws_made: number
          id: string
          match_id: string
          plus_minus: number | null
          points: number
          rebounds: number
          steals: number
          team_id: string
          three_points_attempted: number
          three_points_made: number
          turnovers: number
        }
        Insert: {
          assists: number
          blocks: number
          field_goals_attempted: number
          field_goals_made: number
          fouls?: number | null
          free_throws_attempted: number
          free_throws_made: number
          id?: string
          match_id: string
          plus_minus?: number | null
          points: number
          rebounds: number
          steals: number
          team_id: string
          three_points_attempted: number
          three_points_made: number
          turnovers: number
        }
        Update: {
          assists?: number
          blocks?: number
          field_goals_attempted?: number
          field_goals_made?: number
          fouls?: number | null
          free_throws_attempted?: number
          free_throws_made?: number
          id?: string
          match_id?: string
          plus_minus?: number | null
          points?: number
          rebounds?: number
          steals?: number
          team_id?: string
          three_points_attempted?: number
          three_points_made?: number
          turnovers?: number
        }
        Relationships: [
          {
            foreignKeyName: "team_match_stats_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: false
            referencedRelation: "matches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_match_stats_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "team_match_stats_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "team_match_stats_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_game_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "team_match_stats_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "team_match_stats_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "team_match_stats_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_match_stats_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["team_id"]
          },
        ]
      }
      team_rosters: {
        Row: {
          id: string
          is_captain: boolean | null
          is_player_coach: boolean | null
          joined_at: string | null
          league_id: string | null
          left_at: string | null
          player_id: string | null
          team_id: string | null
          tournament_id: string | null
        }
        Insert: {
          id?: string
          is_captain?: boolean | null
          is_player_coach?: boolean | null
          joined_at?: string | null
          league_id?: string | null
          left_at?: string | null
          player_id?: string | null
          team_id?: string | null
          tournament_id?: string | null
        }
        Update: {
          id?: string
          is_captain?: boolean | null
          is_player_coach?: boolean | null
          joined_at?: string | null
          league_id?: string | null
          left_at?: string | null
          player_id?: string | null
          team_id?: string | null
          tournament_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "team_rosters_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_calendar"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "team_rosters_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "team_rosters_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "team_rosters_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "leagues_info"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_rosters_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["organizer_id"]
          },
          {
            foreignKeyName: "team_rosters_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["player_id"]
          },
          {
            foreignKeyName: "team_rosters_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "player_performance_by_game_year"
            referencedColumns: ["player_id"]
          },
          {
            foreignKeyName: "team_rosters_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "player_performance_by_year"
            referencedColumns: ["player_id"]
          },
          {
            foreignKeyName: "team_rosters_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "player_performance_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_rosters_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_rosters_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "team_rosters_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "team_rosters_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_game_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "team_rosters_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "team_rosters_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "team_rosters_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_rosters_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "team_rosters_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_rosters_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["tournament_id"]
          },
          {
            foreignKeyName: "team_rosters_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournaments"
            referencedColumns: ["id"]
          },
        ]
      }
      teams: {
        Row: {
          created_at: string | null
          current_rp: number | null
          elo_rating: number | null
          global_rank: number | null
          id: string
          leaderboard_tier: string | null
          lg_conf: string | null
          logo_url: string | null
          money_won: number | null
          name: string
          player_rank_score: number | null
        }
        Insert: {
          created_at?: string | null
          current_rp?: number | null
          elo_rating?: number | null
          global_rank?: number | null
          id?: string
          leaderboard_tier?: string | null
          lg_conf?: string | null
          logo_url?: string | null
          money_won?: number | null
          name: string
          player_rank_score?: number | null
        }
        Update: {
          created_at?: string | null
          current_rp?: number | null
          elo_rating?: number | null
          global_rank?: number | null
          id?: string
          leaderboard_tier?: string | null
          lg_conf?: string | null
          logo_url?: string | null
          money_won?: number | null
          name?: string
          player_rank_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "teams_lg_conf_fkey"
            columns: ["lg_conf"]
            isOneToOne: false
            referencedRelation: "lg_conf"
            referencedColumns: ["id"]
          },
        ]
      }
      teams_pot_tracker: {
        Row: {
          created_at: string
          id: string
          league_id: string | null
          placement: number | null
          prize_amount: number | null
          team_id: string | null
          tournament_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          league_id?: string | null
          placement?: number | null
          prize_amount?: number | null
          team_id?: string | null
          tournament_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          league_id?: string | null
          placement?: number | null
          prize_amount?: number | null
          team_id?: string | null
          tournament_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "teams_pot_tracker_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_calendar"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "teams_pot_tracker_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "teams_pot_tracker_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "teams_pot_tracker_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "leagues_info"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teams_pot_tracker_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["organizer_id"]
          },
          {
            foreignKeyName: "teams_pot_tracker_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "teams_pot_tracker_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "teams_pot_tracker_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_game_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "teams_pot_tracker_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "teams_pot_tracker_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "teams_pot_tracker_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teams_pot_tracker_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "teams_pot_tracker_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teams_pot_tracker_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["tournament_id"]
          },
          {
            foreignKeyName: "teams_pot_tracker_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournaments"
            referencedColumns: ["id"]
          },
        ]
      }
      tournament_group_members: {
        Row: {
          created_at: string | null
          group_id: string
          id: string
          seed: number | null
          team_id: string
        }
        Insert: {
          created_at?: string | null
          group_id: string
          id?: string
          seed?: number | null
          team_id: string
        }
        Update: {
          created_at?: string | null
          group_id?: string
          id?: string
          seed?: number | null
          team_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "event_group_members_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "tournament_groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_group_members_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "event_group_members_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "event_group_members_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_game_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "event_group_members_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "event_group_members_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "event_group_members_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_group_members_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["team_id"]
          },
        ]
      }
      tournament_groups: {
        Row: {
          advancement_count: number | null
          created_at: string | null
          description: string | null
          id: string
          league_season_id: string | null
          max_teams: number | null
          name: string
          sort_order: number | null
          status: string | null
          tournament_id: string | null
          updated_at: string | null
        }
        Insert: {
          advancement_count?: number | null
          created_at?: string | null
          description?: string | null
          id?: string
          league_season_id?: string | null
          max_teams?: number | null
          name: string
          sort_order?: number | null
          status?: string | null
          tournament_id?: string | null
          updated_at?: string | null
        }
        Update: {
          advancement_count?: number | null
          created_at?: string | null
          description?: string | null
          id?: string
          league_season_id?: string | null
          max_teams?: number | null
          name?: string
          sort_order?: number | null
          status?: string | null
          tournament_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_groups_league_season_id_fkey"
            columns: ["league_season_id"]
            isOneToOne: false
            referencedRelation: "league_calendar"
            referencedColumns: ["season_id"]
          },
          {
            foreignKeyName: "event_groups_league_season_id_fkey"
            columns: ["league_season_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["season_id"]
          },
          {
            foreignKeyName: "event_groups_league_season_id_fkey"
            columns: ["league_season_id"]
            isOneToOne: false
            referencedRelation: "league_seasons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_groups_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_groups_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["tournament_id"]
          },
          {
            foreignKeyName: "event_groups_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournaments"
            referencedColumns: ["id"]
          },
        ]
      }
      tournaments: {
        Row: {
          banner_url: string | null
          champion: string | null
          console: Database["public"]["Enums"]["console"] | null
          created_at: string
          decay_days: number | null
          description: string | null
          end_date: string | null
          game_year: Database["public"]["Enums"]["game_year"] | null
          id: string
          max_rp: number | null
          name: string | null
          organizer_id: string | null
          organizer_logo_url: string | null
          place: string | null
          prize_pool: number | null
          processed_at: string | null
          rules_url: string | null
          runner_up: string | null
          sponsor: string | null
          sponsor_logo: string | null
          start_date: string | null
          status: Database["public"]["Enums"]["status"] | null
          tier: Database["public"]["Enums"]["event_tier"] | null
        }
        Insert: {
          banner_url?: string | null
          champion?: string | null
          console?: Database["public"]["Enums"]["console"] | null
          created_at?: string
          decay_days?: number | null
          description?: string | null
          end_date?: string | null
          game_year?: Database["public"]["Enums"]["game_year"] | null
          id?: string
          max_rp?: number | null
          name?: string | null
          organizer_id?: string | null
          organizer_logo_url?: string | null
          place?: string | null
          prize_pool?: number | null
          processed_at?: string | null
          rules_url?: string | null
          runner_up?: string | null
          sponsor?: string | null
          sponsor_logo?: string | null
          start_date?: string | null
          status?: Database["public"]["Enums"]["status"] | null
          tier?: Database["public"]["Enums"]["event_tier"] | null
        }
        Update: {
          banner_url?: string | null
          champion?: string | null
          console?: Database["public"]["Enums"]["console"] | null
          created_at?: string
          decay_days?: number | null
          description?: string | null
          end_date?: string | null
          game_year?: Database["public"]["Enums"]["game_year"] | null
          id?: string
          max_rp?: number | null
          name?: string | null
          organizer_id?: string | null
          organizer_logo_url?: string | null
          place?: string | null
          prize_pool?: number | null
          processed_at?: string | null
          rules_url?: string | null
          runner_up?: string | null
          sponsor?: string | null
          sponsor_logo?: string | null
          start_date?: string | null
          status?: Database["public"]["Enums"]["status"] | null
          tier?: Database["public"]["Enums"]["event_tier"] | null
        }
        Relationships: [
          {
            foreignKeyName: "tournaments_champion_fkey"
            columns: ["champion"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tournaments_champion_fkey"
            columns: ["champion"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tournaments_champion_fkey"
            columns: ["champion"]
            isOneToOne: false
            referencedRelation: "team_performance_by_game_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tournaments_champion_fkey"
            columns: ["champion"]
            isOneToOne: false
            referencedRelation: "team_performance_by_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tournaments_champion_fkey"
            columns: ["champion"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tournaments_champion_fkey"
            columns: ["champion"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tournaments_champion_fkey"
            columns: ["champion"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tournaments_organizer_id_fkey"
            columns: ["organizer_id"]
            isOneToOne: false
            referencedRelation: "league_calendar"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "tournaments_organizer_id_fkey"
            columns: ["organizer_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "tournaments_organizer_id_fkey"
            columns: ["organizer_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "tournaments_organizer_id_fkey"
            columns: ["organizer_id"]
            isOneToOne: false
            referencedRelation: "leagues_info"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tournaments_organizer_id_fkey"
            columns: ["organizer_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["organizer_id"]
          },
          {
            foreignKeyName: "tournaments_organizer_logo_url_fkey"
            columns: ["organizer_logo_url"]
            isOneToOne: false
            referencedRelation: "league_calendar"
            referencedColumns: ["league_logo"]
          },
          {
            foreignKeyName: "tournaments_organizer_logo_url_fkey"
            columns: ["organizer_logo_url"]
            isOneToOne: false
            referencedRelation: "leagues_info"
            referencedColumns: ["lg_logo_url"]
          },
          {
            foreignKeyName: "tournaments_organizer_logo_url_fkey"
            columns: ["organizer_logo_url"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["league_logo"]
          },
          {
            foreignKeyName: "tournaments_place_fkey"
            columns: ["place"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tournaments_place_fkey"
            columns: ["place"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tournaments_place_fkey"
            columns: ["place"]
            isOneToOne: false
            referencedRelation: "team_performance_by_game_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tournaments_place_fkey"
            columns: ["place"]
            isOneToOne: false
            referencedRelation: "team_performance_by_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tournaments_place_fkey"
            columns: ["place"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tournaments_place_fkey"
            columns: ["place"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tournaments_place_fkey"
            columns: ["place"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tournaments_runner_up_fkey"
            columns: ["runner_up"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tournaments_runner_up_fkey"
            columns: ["runner_up"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tournaments_runner_up_fkey"
            columns: ["runner_up"]
            isOneToOne: false
            referencedRelation: "team_performance_by_game_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tournaments_runner_up_fkey"
            columns: ["runner_up"]
            isOneToOne: false
            referencedRelation: "team_performance_by_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tournaments_runner_up_fkey"
            columns: ["runner_up"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tournaments_runner_up_fkey"
            columns: ["runner_up"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tournaments_runner_up_fkey"
            columns: ["runner_up"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tournaments_sponsor_fkey"
            columns: ["sponsor"]
            isOneToOne: false
            referencedRelation: "sponsor_info"
            referencedColumns: ["sponsor_name"]
          },
          {
            foreignKeyName: "tournaments_sponsor_logo_fkey"
            columns: ["sponsor_logo"]
            isOneToOne: false
            referencedRelation: "sponsor_info"
            referencedColumns: ["sponsor_logo"]
          },
        ]
      }
      upcoming_matches: {
        Row: {
          created_at: string | null
          group_id: string | null
          id: string
          league_id: string | null
          match_number: number | null
          notes: string | null
          round: number | null
          scheduled_at: string
          status: string | null
          stream_url: string | null
          team_a_id: string | null
          team_b_id: string | null
          tournament_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          group_id?: string | null
          id?: string
          league_id?: string | null
          match_number?: number | null
          notes?: string | null
          round?: number | null
          scheduled_at: string
          status?: string | null
          stream_url?: string | null
          team_a_id?: string | null
          team_b_id?: string | null
          tournament_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          group_id?: string | null
          id?: string
          league_id?: string | null
          match_number?: number | null
          notes?: string | null
          round?: number | null
          scheduled_at?: string
          status?: string | null
          stream_url?: string | null
          team_a_id?: string | null
          team_b_id?: string | null
          tournament_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "upcoming_matches_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "tournament_groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "upcoming_matches_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_calendar"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "upcoming_matches_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "upcoming_matches_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "upcoming_matches_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "leagues_info"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "upcoming_matches_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["organizer_id"]
          },
          {
            foreignKeyName: "upcoming_matches_team_a_id_fkey"
            columns: ["team_a_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "upcoming_matches_team_a_id_fkey"
            columns: ["team_a_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "upcoming_matches_team_a_id_fkey"
            columns: ["team_a_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_game_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "upcoming_matches_team_a_id_fkey"
            columns: ["team_a_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "upcoming_matches_team_a_id_fkey"
            columns: ["team_a_id"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "upcoming_matches_team_a_id_fkey"
            columns: ["team_a_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "upcoming_matches_team_a_id_fkey"
            columns: ["team_a_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "upcoming_matches_team_b_id_fkey"
            columns: ["team_b_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "upcoming_matches_team_b_id_fkey"
            columns: ["team_b_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "upcoming_matches_team_b_id_fkey"
            columns: ["team_b_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_game_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "upcoming_matches_team_b_id_fkey"
            columns: ["team_b_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "upcoming_matches_team_b_id_fkey"
            columns: ["team_b_id"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "upcoming_matches_team_b_id_fkey"
            columns: ["team_b_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "upcoming_matches_team_b_id_fkey"
            columns: ["team_b_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "upcoming_matches_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "upcoming_matches_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["tournament_id"]
          },
          {
            foreignKeyName: "upcoming_matches_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournaments"
            referencedColumns: ["id"]
          },
        ]
      }
      update_race: {
        Row: {
          id: number
          new_rank: number | null
          previous_rank: number | null
          race_id: string | null
          update_details: Json | null
          update_type: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          id?: never
          new_rank?: number | null
          previous_rank?: number | null
          race_id?: string | null
          update_details?: Json | null
          update_type: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          id?: never
          new_rank?: number | null
          previous_rank?: number | null
          race_id?: string | null
          update_details?: Json | null
          update_type?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "update_race_race_id_fkey"
            columns: ["race_id"]
            isOneToOne: false
            referencedRelation: "awards_race"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: number
          role: Database["public"]["Enums"]["app_role"] | null
          role_name: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: never
          role?: Database["public"]["Enums"]["app_role"] | null
          role_name?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: never
          role?: Database["public"]["Enums"]["app_role"] | null
          role_name?: string | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      league_calendar: {
        Row: {
          champion_id: string | null
          champion_logo: string | null
          champion_name: string | null
          championship_date: string | null
          discord_link: string | null
          end_date: string | null
          game_year: Database["public"]["Enums"]["game_year"] | null
          is_active: boolean | null
          last_match_date: string | null
          league_id: string | null
          league_logo: string | null
          league_name: Database["public"]["Enums"]["leagues"] | null
          league_status: string | null
          league_website: string | null
          next_match_time: string | null
          season_id: string | null
          season_number: number | null
          sort_order: number | null
          start_date: string | null
          total_matches: number | null
          tournament_count: number | null
          twitch_url: string | null
          twitter_id: string | null
          upcoming_matches_count: number | null
        }
        Relationships: [
          {
            foreignKeyName: "past_champions_champion_logo_fkey"
            columns: ["champion_logo"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["logo_url"]
          },
          {
            foreignKeyName: "past_champions_champion_logo_fkey"
            columns: ["champion_logo"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["logo_url"]
          },
          {
            foreignKeyName: "past_champions_champion_logo_fkey"
            columns: ["champion_logo"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["logo_url"]
          },
          {
            foreignKeyName: "past_champions_champion_logo_fkey"
            columns: ["champion_logo"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["champion_logo"]
          },
          {
            foreignKeyName: "past_champions_champion_logo_fkey"
            columns: ["champion_logo"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["runner_up_logo"]
          },
          {
            foreignKeyName: "past_champions_champion_logo_fkey"
            columns: ["champion_logo"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["third_place_logo"]
          },
          {
            foreignKeyName: "past_champions_champion_logo_fkey"
            columns: ["champion_logo"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["logo_url"]
          },
          {
            foreignKeyName: "past_champions_champion_logo_fkey"
            columns: ["champion_logo"]
            isOneToOne: false
            referencedRelation: "tournament_team_rosters"
            referencedColumns: ["team_logo"]
          },
          {
            foreignKeyName: "past_champions_team_id_fkey"
            columns: ["champion_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "past_champions_team_id_fkey"
            columns: ["champion_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "past_champions_team_id_fkey"
            columns: ["champion_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_game_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "past_champions_team_id_fkey"
            columns: ["champion_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "past_champions_team_id_fkey"
            columns: ["champion_id"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "past_champions_team_id_fkey"
            columns: ["champion_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "past_champions_team_id_fkey"
            columns: ["champion_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "past_champions_team_name_fkey"
            columns: ["champion_name"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["team_name"]
          },
          {
            foreignKeyName: "past_champions_team_name_fkey"
            columns: ["champion_name"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["team_name"]
          },
          {
            foreignKeyName: "past_champions_team_name_fkey"
            columns: ["champion_name"]
            isOneToOne: false
            referencedRelation: "player_performance_view"
            referencedColumns: ["team_name"]
          },
          {
            foreignKeyName: "past_champions_team_name_fkey"
            columns: ["champion_name"]
            isOneToOne: false
            referencedRelation: "team_performance_by_game_year"
            referencedColumns: ["team_name"]
          },
          {
            foreignKeyName: "past_champions_team_name_fkey"
            columns: ["champion_name"]
            isOneToOne: false
            referencedRelation: "team_performance_by_year"
            referencedColumns: ["team_name"]
          },
          {
            foreignKeyName: "past_champions_team_name_fkey"
            columns: ["champion_name"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["team_name"]
          },
          {
            foreignKeyName: "past_champions_team_name_fkey"
            columns: ["champion_name"]
            isOneToOne: false
            referencedRelation: "team_roster_current"
            referencedColumns: ["team_name"]
          },
          {
            foreignKeyName: "past_champions_team_name_fkey"
            columns: ["champion_name"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "past_champions_team_name_fkey"
            columns: ["champion_name"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["champion_name"]
          },
          {
            foreignKeyName: "past_champions_team_name_fkey"
            columns: ["champion_name"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["runner_up_name"]
          },
          {
            foreignKeyName: "past_champions_team_name_fkey"
            columns: ["champion_name"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["third_place_name"]
          },
          {
            foreignKeyName: "past_champions_team_name_fkey"
            columns: ["champion_name"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["team_name"]
          },
          {
            foreignKeyName: "past_champions_team_name_fkey"
            columns: ["champion_name"]
            isOneToOne: false
            referencedRelation: "tournament_team_rosters"
            referencedColumns: ["team_name"]
          },
        ]
      }
      league_results: {
        Row: {
          avg_assists: number | null
          avg_blocks: number | null
          avg_points: number | null
          avg_rebounds: number | null
          avg_steals: number | null
          avg_turnovers: number | null
          conference_name: string | null
          current_rp: number | null
          elo_rating: number | null
          fg_percentage: number | null
          league_id: string | null
          league_name: Database["public"]["Enums"]["leagues"] | null
          logo_url: string | null
          losses: number | null
          point_differential: number | null
          points_against: number | null
          points_for: number | null
          roster: Json | null
          season_id: string | null
          season_number: number | null
          stat_leaders: Json | null
          team_id: string | null
          team_name: string | null
          team_rankings: Json | null
          three_pt_percentage: number | null
          win_percentage: number | null
          wins: number | null
          year: Database["public"]["Enums"]["game_year"] | null
        }
        Relationships: []
      }
      league_team_rosters: {
        Row: {
          id: string | null
          is_captain: boolean | null
          is_player_coach: boolean | null
          joined_at: string | null
          league_id: string | null
          league_name: Database["public"]["Enums"]["leagues"] | null
          left_at: string | null
          player_id: string | null
          player_name: string | null
          player_position: Database["public"]["Enums"]["player_position"] | null
          team_id: string | null
          team_name: string | null
        }
        Relationships: []
      }
      past_champions_by_league: {
        Row: {
          champion_teams: string[] | null
          championship_count: number | null
          consoles: Database["public"]["Enums"]["console"][] | null
          event_tiers: Database["public"]["Enums"]["event_tier"][] | null
          league_id: string | null
          league_name: Database["public"]["Enums"]["leagues"] | null
          years: Database["public"]["Enums"]["game_year"][] | null
        }
        Relationships: [
          {
            foreignKeyName: "past_champions_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_calendar"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "past_champions_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "past_champions_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "past_champions_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "leagues_info"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "past_champions_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["organizer_id"]
          },
        ]
      }
      past_champions_by_year: {
        Row: {
          champion_teams: string[] | null
          championship_count: number | null
          consoles: Database["public"]["Enums"]["console"][] | null
          event_tiers: Database["public"]["Enums"]["event_tier"][] | null
          leagues: Database["public"]["Enums"]["leagues"][] | null
          year: Database["public"]["Enums"]["game_year"] | null
        }
        Relationships: []
      }
      player_performance_by_game_year: {
        Row: {
          avg_assists: number | null
          avg_blocks: number | null
          avg_performance_score: number | null
          avg_plus_minus: number | null
          avg_points: number | null
          avg_rebounds: number | null
          avg_steals: number | null
          avg_turnovers: number | null
          game_year: Database["public"]["Enums"]["game_year"] | null
          gamertag: string | null
          games_20plus_points: number | null
          matches_played: number | null
          mvp_count: number | null
          player_id: string | null
          position: Database["public"]["Enums"]["player_position"] | null
          total_assists: number | null
          total_blocks: number | null
          total_points: number | null
          total_rebounds: number | null
          total_steals: number | null
        }
        Relationships: []
      }
      player_performance_by_year: {
        Row: {
          avg_assists: number | null
          avg_blocks: number | null
          avg_performance_score: number | null
          avg_plus_minus: number | null
          avg_points: number | null
          avg_rebounds: number | null
          avg_steals: number | null
          avg_turnovers: number | null
          fg_percentage: number | null
          game_year: Database["public"]["Enums"]["game_year"] | null
          gamertag: string | null
          games_played: number | null
          losses: number | null
          player_id: string | null
          position: Database["public"]["Enums"]["player_position"] | null
          three_pt_percentage: number | null
          total_assists: number | null
          total_blocks: number | null
          total_points: number | null
          total_rebounds: number | null
          total_steals: number | null
          total_turnovers: number | null
          wins: number | null
        }
        Relationships: []
      }
      player_performance_view: {
        Row: {
          avg_assists: number | null
          avg_blocks: number | null
          avg_performance_score: number | null
          avg_points: number | null
          avg_rebounds: number | null
          avg_steals: number | null
          current_team_id: string | null
          gamertag: string | null
          games_played: number | null
          id: string | null
          monthly_value: number | null
          player_rank_score: number | null
          player_rp: number | null
          position: Database["public"]["Enums"]["player_position"] | null
          salary_tier: Database["public"]["Enums"]["salary_tier"] | null
          team_name: string | null
        }
        Relationships: [
          {
            foreignKeyName: "players_current_team_id_fkey"
            columns: ["current_team_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "players_current_team_id_fkey"
            columns: ["current_team_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "players_current_team_id_fkey"
            columns: ["current_team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_game_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "players_current_team_id_fkey"
            columns: ["current_team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "players_current_team_id_fkey"
            columns: ["current_team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "players_current_team_id_fkey"
            columns: ["current_team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "players_current_team_id_fkey"
            columns: ["current_team_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["team_id"]
          },
        ]
      }
      team_performance_by_game_year: {
        Row: {
          avg_points_allowed: number | null
          avg_points_scored: number | null
          best_placement: number | null
          current_elo: number | null
          current_ranking_points: number | null
          game_year: Database["public"]["Enums"]["game_year"] | null
          matches_lost: number | null
          matches_won: number | null
          points_allowed: number | null
          points_scored: number | null
          team_id: string | null
          team_name: string | null
          total_matches: number | null
          total_prize_amount: number | null
          tournament_placements: number | null
          win_percentage: number | null
        }
        Relationships: []
      }
      team_performance_by_year: {
        Row: {
          avg_point_differential: number | null
          avg_points_allowed: number | null
          avg_points_scored: number | null
          avg_tournament_placement: number | null
          game_year: Database["public"]["Enums"]["game_year"] | null
          losses: number | null
          matches_played: number | null
          points_allowed: number | null
          points_scored: number | null
          team_id: string | null
          team_name: string | null
          total_prize_money: number | null
          tournament_wins: number | null
          tournaments_participated: number | null
          win_percentage: number | null
          wins: number | null
        }
        Relationships: []
      }
      team_performance_view: {
        Row: {
          avg_assists: number | null
          avg_blocks: number | null
          avg_field_goals_attempted: number | null
          avg_field_goals_made: number | null
          avg_points_per_match: number | null
          avg_rebounds: number | null
          avg_steals: number | null
          avg_three_points_attempted: number | null
          avg_three_points_made: number | null
          avg_turnovers: number | null
          championship_count: number | null
          current_roster_count: number | null
          current_rp: number | null
          elo_rating: number | null
          field_goal_percentage: number | null
          global_rank: number | null
          leaderboard_tier: string | null
          logo_url: string | null
          matches_lost: number | null
          matches_won: number | null
          money_won: number | null
          roster_last_changed: string | null
          team_id: string | null
          team_name: string | null
          three_point_percentage: number | null
          total_matches_played: number | null
          total_prize_earnings: number | null
          tournament_appearances: number | null
          tournament_wins: number | null
          win_percentage: number | null
        }
        Relationships: []
      }
      team_roster_current: {
        Row: {
          gamertag: string | null
          is_captain: boolean | null
          is_player_coach: boolean | null
          joined_at: string | null
          monthly_value: number | null
          player_id: string | null
          position: Database["public"]["Enums"]["player_position"] | null
          salary_tier: Database["public"]["Enums"]["salary_tier"] | null
          team_id: string | null
          team_name: string | null
        }
        Relationships: [
          {
            foreignKeyName: "team_rosters_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["player_id"]
          },
          {
            foreignKeyName: "team_rosters_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "player_performance_by_game_year"
            referencedColumns: ["player_id"]
          },
          {
            foreignKeyName: "team_rosters_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "player_performance_by_year"
            referencedColumns: ["player_id"]
          },
          {
            foreignKeyName: "team_rosters_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "player_performance_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_rosters_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_rosters_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "team_rosters_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "team_rosters_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_game_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "team_rosters_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "team_rosters_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "team_rosters_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_rosters_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["team_id"]
          },
        ]
      }
      tournament_calendar: {
        Row: {
          banner_url: string | null
          champion: string | null
          champion_logo: string | null
          champion_name: string | null
          description: string | null
          end_date: string | null
          id: string | null
          league_logo: string | null
          next_match_time: string | null
          organizer_logo_url: string | null
          organizer_name: Database["public"]["Enums"]["leagues"] | null
          prize_pool: number | null
          runner_up: string | null
          runner_up_logo: string | null
          runner_up_name: string | null
          sort_order: number | null
          start_date: string | null
          status: Database["public"]["Enums"]["status"] | null
          third_place_id: string | null
          third_place_logo: string | null
          third_place_name: string | null
          tier: Database["public"]["Enums"]["event_tier"] | null
          tournament_name: string | null
          tournament_status: string | null
          upcoming_matches_count: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tournaments_champion_fkey"
            columns: ["champion"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tournaments_champion_fkey"
            columns: ["champion"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tournaments_champion_fkey"
            columns: ["champion"]
            isOneToOne: false
            referencedRelation: "team_performance_by_game_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tournaments_champion_fkey"
            columns: ["champion"]
            isOneToOne: false
            referencedRelation: "team_performance_by_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tournaments_champion_fkey"
            columns: ["champion"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tournaments_champion_fkey"
            columns: ["champion"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tournaments_champion_fkey"
            columns: ["champion"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tournaments_organizer_logo_url_fkey"
            columns: ["organizer_logo_url"]
            isOneToOne: false
            referencedRelation: "league_calendar"
            referencedColumns: ["league_logo"]
          },
          {
            foreignKeyName: "tournaments_organizer_logo_url_fkey"
            columns: ["organizer_logo_url"]
            isOneToOne: false
            referencedRelation: "leagues_info"
            referencedColumns: ["lg_logo_url"]
          },
          {
            foreignKeyName: "tournaments_organizer_logo_url_fkey"
            columns: ["organizer_logo_url"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["league_logo"]
          },
          {
            foreignKeyName: "tournaments_place_fkey"
            columns: ["third_place_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tournaments_place_fkey"
            columns: ["third_place_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tournaments_place_fkey"
            columns: ["third_place_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_game_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tournaments_place_fkey"
            columns: ["third_place_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tournaments_place_fkey"
            columns: ["third_place_id"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tournaments_place_fkey"
            columns: ["third_place_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tournaments_place_fkey"
            columns: ["third_place_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tournaments_runner_up_fkey"
            columns: ["runner_up"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tournaments_runner_up_fkey"
            columns: ["runner_up"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tournaments_runner_up_fkey"
            columns: ["runner_up"]
            isOneToOne: false
            referencedRelation: "team_performance_by_game_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tournaments_runner_up_fkey"
            columns: ["runner_up"]
            isOneToOne: false
            referencedRelation: "team_performance_by_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tournaments_runner_up_fkey"
            columns: ["runner_up"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "tournaments_runner_up_fkey"
            columns: ["runner_up"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tournaments_runner_up_fkey"
            columns: ["runner_up"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["team_id"]
          },
        ]
      }
      tournament_results: {
        Row: {
          avg_assists: number | null
          avg_blocks: number | null
          avg_points: number | null
          avg_rebounds: number | null
          avg_steals: number | null
          avg_turnovers: number | null
          awards: Json | null
          current_rp: number | null
          elo_rating: number | null
          end_date: string | null
          fg_percentage: number | null
          final_placement: number | null
          game_year: Database["public"]["Enums"]["game_year"] | null
          group_standings: Json | null
          groups: string | null
          logo_url: string | null
          losses: number | null
          organizer_id: string | null
          organizer_name: Database["public"]["Enums"]["leagues"] | null
          point_differential: number | null
          points_against: number | null
          points_for: number | null
          prize_pool: number | null
          prize_won: number | null
          roster: Json | null
          start_date: string | null
          stat_leaders: Json | null
          team_id: string | null
          team_name: string | null
          team_rankings: Json | null
          three_pt_percentage: number | null
          tournament_id: string | null
          tournament_name: string | null
          tournament_status: Database["public"]["Enums"]["status"] | null
          tournament_tier: Database["public"]["Enums"]["event_tier"] | null
          win_percentage: number | null
          wins: number | null
        }
        Relationships: []
      }
      tournament_team_rosters: {
        Row: {
          discord_id: string | null
          end_date: string | null
          gamertag: string | null
          id: string | null
          is_captain: boolean | null
          is_player_coach: boolean | null
          joined_at: string | null
          league_id: string | null
          left_at: string | null
          player_id: string | null
          player_rank_score: number | null
          position: Database["public"]["Enums"]["player_position"] | null
          salary_tier: Database["public"]["Enums"]["salary_tier"] | null
          start_date: string | null
          status: Database["public"]["Enums"]["status"] | null
          team_id: string | null
          team_logo: string | null
          team_name: string | null
          tournament_id: string | null
          tournament_name: string | null
          twitter_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "team_rosters_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_calendar"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "team_rosters_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "team_rosters_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["league_id"]
          },
          {
            foreignKeyName: "team_rosters_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "leagues_info"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_rosters_league_id_fkey"
            columns: ["league_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["organizer_id"]
          },
          {
            foreignKeyName: "team_rosters_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["player_id"]
          },
          {
            foreignKeyName: "team_rosters_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "player_performance_by_game_year"
            referencedColumns: ["player_id"]
          },
          {
            foreignKeyName: "team_rosters_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "player_performance_by_year"
            referencedColumns: ["player_id"]
          },
          {
            foreignKeyName: "team_rosters_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "player_performance_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_rosters_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_rosters_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "league_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "team_rosters_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "league_team_rosters"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "team_rosters_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_game_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "team_rosters_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_by_year"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "team_rosters_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "team_performance_view"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "team_rosters_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_rosters_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "team_rosters_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournament_calendar"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_rosters_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournament_results"
            referencedColumns: ["tournament_id"]
          },
          {
            foreignKeyName: "team_rosters_tournament_id_fkey"
            columns: ["tournament_id"]
            isOneToOne: false
            referencedRelation: "tournaments"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      analyze_elo_distribution: {
        Args: Record<PropertyKey, never>
        Returns: {
          elo_range: string
          percentage: number
          team_count: number
        }[]
      }
      apply_rp_decay: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      assign_role: {
        Args: { role_to_assign: string; target_user_id: string }
        Returns: boolean
      }
      assign_role_to_user: {
        Args: {
          p_role: Database["public"]["Enums"]["app_role"]
          p_user_id: string
        }
        Returns: boolean
      }
      calculate_all_player_salaries: {
        Args: Record<PropertyKey, never>
        Returns: {
          monthly_value: number
          player_name: string
          player_uuid: string
          raw_score: number
          tier_name: string
        }[]
      }
      calculate_hybrid_score: {
        Args: { team_id_param: string }
        Returns: number
      }
      calculate_normalized_elo: {
        Args: { team_id_param: string }
        Returns: number
      }
      calculate_normalized_rp: {
        Args: { team_id_param: string }
        Returns: number
      }
      calculate_player_salary: {
        Args: { player_uuid: string }
        Returns: {
          monthly_value: number
          player_name: string
          raw_score: number
          tier_name: string
        }[]
      }
      calculate_team_total_money_won: {
        Args: { team_uuid: string }
        Returns: number
      }
      complete_upcoming_match: {
        Args: {
          p_score_a: number
          p_score_b: number
          p_upcoming_match_id: string
          p_winner_id?: string
        }
        Returns: string
      }
      custom_jwt: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      get_elo_bounds: {
        Args: Record<PropertyKey, never>
        Returns: {
          max_bound: number
          min_bound: number
          normalized_starting: number
          starting_elo: number
        }[]
      }
      get_my_permissions: {
        Args: Record<PropertyKey, never>
        Returns: {
          permission: string
        }[]
      }
      get_team_performance: {
        Args: { team_id_param: string }
        Returns: {
          metric_name: string
          metric_value: string
        }[]
      }
      get_user_roles: {
        Args: { user_id_param?: string }
        Returns: {
          role: string
        }[]
      }
      has_permission: {
        Args: { required_permission: string }
        Returns: boolean
      }
      has_role: {
        Args: { required_role: string }
        Returns: boolean
      }
      initialize_new_season: {
        Args: { season_name: string }
        Returns: undefined
      }
      initialize_user_roles: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      is_league_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      promote_to_league_admin: {
        Args: { target_user_id: string }
        Returns: boolean
      }
      recalculate_all_rankings: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      recent_games_for_player: {
        Args: { player_id_param: string }
        Returns: {
          assists: number
          blocks: number
          fg_pct: number
          fga: number
          fgm: number
          ft_pct: number
          fta: number
          ftm: number
          location: string
          match_id: string
          opponent_logo: string
          opponent_name: string
          opponent_team_id: string
          pf: number
          played_at: string
          points: number
          rebounds: number
          result: string
          score_a: number
          score_b: number
          steals: number
          three_points_attempted: number
          three_points_made: number
          three_pt_pct: number
          turnovers: number
        }[]
      }
      record_match_forfeit: {
        Args: { p_forfeiting_team_id: string; p_match_id: string }
        Returns: undefined
      }
      remove_role: {
        Args: { role_to_remove: string; target_user_id: string }
        Returns: boolean
      }
      remove_role_from_user: {
        Args: {
          p_role: Database["public"]["Enums"]["app_role"]
          p_user_id: string
        }
        Returns: boolean
      }
      schedule_rp_decay: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      sync_user_roles_for_user: {
        Args: { p_user_id: string }
        Returns: undefined
      }
      update_all_teams_money_won: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      update_elo_after_match: {
        Args: {
          k_factor?: number
          loser_id_param: string
          winner_id_param: string
        }
        Returns: undefined
      }
      update_existing_draft_pool_records: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      update_group_standings: {
        Args: { p_group_id: string }
        Returns: undefined
      }
      update_player_ps: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      update_player_rank_score: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      update_player_rankings: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      update_team_money_won: {
        Args: { team_uuid: string }
        Returns: undefined
      }
      update_team_rankings: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      update_user_claims: {
        Args: { p_user_id: string }
        Returns: boolean
      }
    }
    Enums: {
      app_role:
        | "admin"
        | "league_staff"
        | "user"
        | "editor"
        | "analyst"
        | "team_staff"
        | "player"
      award_types: "Offensive MVP" | "Defensive MVP" | "Rookie of Tournament"
      console: "Cross Play" | "Playstation" | "Xbox"
      event_tier: "T1" | "T2" | "T3" | "T4" | "T5"
      event_type: "League" | "Tournament"
      game_year:
        | "2K16"
        | "2K17"
        | "2K18"
        | "2K19"
        | "2K20"
        | "2K21"
        | "2K22"
        | "2K23"
        | "2K24"
        | "2K25"
        | "2K26"
      leaderboard_tier: "S" | "A" | "B" | "C" | "D"
      leagues:
        | "Unified Pro Am Association"
        | "UPA College"
        | "WR"
        | "MPBA"
        | "Rising Stars"
        | "Staten Island Basketball Association"
        | "Hall Of Fame League"
        | "Dunk League"
        | "Road to 25K"
      player_position:
        | "Point Guard"
        | "Shooting Guard"
        | "Lock"
        | "Power Forward"
        | "Center"
      salary_tier: "S" | "A" | "B" | "C" | "D"
      stage:
        | "Regular Season"
        | "Group Play"
        | "Round 1"
        | "Round 2"
        | "Round 3"
        | "Round 4"
        | "Semi Finals"
        | "Finals"
        | "Grand Finals"
        | "L1"
        | "L2"
        | "L3"
        | "L4"
        | "L5"
        | "W1"
        | "W2"
        | "W3"
        | "W4"
        | "LF"
        | "WF"
        | "Playoffs"
      status:
        | "scheduled"
        | "in progress"
        | "completed"
        | "under review"
        | "reviewed"
        | "approved"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {
      app_role: [
        "admin",
        "league_staff",
        "user",
        "editor",
        "analyst",
        "team_staff",
        "player",
      ],
      award_types: ["Offensive MVP", "Defensive MVP", "Rookie of Tournament"],
      console: ["Cross Play", "Playstation", "Xbox"],
      event_tier: ["T1", "T2", "T3", "T4", "T5"],
      event_type: ["League", "Tournament"],
      game_year: [
        "2K16",
        "2K17",
        "2K18",
        "2K19",
        "2K20",
        "2K21",
        "2K22",
        "2K23",
        "2K24",
        "2K25",
        "2K26",
      ],
      leaderboard_tier: ["S", "A", "B", "C", "D"],
      leagues: [
        "Unified Pro Am Association",
        "UPA College",
        "WR",
        "MPBA",
        "Rising Stars",
        "Staten Island Basketball Association",
        "Hall Of Fame League",
        "Dunk League",
        "Road to 25K",
      ],
      player_position: [
        "Point Guard",
        "Shooting Guard",
        "Lock",
        "Power Forward",
        "Center",
      ],
      salary_tier: ["S", "A", "B", "C", "D"],
      stage: [
        "Regular Season",
        "Group Play",
        "Round 1",
        "Round 2",
        "Round 3",
        "Round 4",
        "Semi Finals",
        "Finals",
        "Grand Finals",
        "L1",
        "L2",
        "L3",
        "L4",
        "L5",
        "W1",
        "W2",
        "W3",
        "W4",
        "LF",
        "WF",
        "Playoffs",
      ],
      status: [
        "scheduled",
        "in progress",
        "completed",
        "under review",
        "reviewed",
        "approved",
      ],
    },
  },
} as const
