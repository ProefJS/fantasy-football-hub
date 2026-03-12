import type { NextApiRequest, NextApiResponse } from 'next'

interface Player {
  id: string
  name: string
  position: string
  team: string
  rank: number
  avgRank: number
  trend: string
}

const mockPlayers: Player[] = [
  { id: '1', name: 'Patrick Mahomes', position: 'QB', team: 'KC', rank: 1, avgRank: 1.2, trend: 'up' },
  { id: '2', name: 'Josh Allen', position: 'QB', team: 'BUF', rank: 2, avgRank: 2.1, trend: 'up' },
  { id: '3', name: 'Christian McCaffrey', position: 'RB', team: 'SF', rank: 3, avgRank: 3.3, trend: 'down' },
  { id: '4', name: 'Travis Kelce', position: 'TE', team: 'KC', rank: 4, avgRank: 4.5, trend: 'stable' },
  { id: '5', name: 'Ja\'Marr Chase', position: 'WR', team: 'CIN', rank: 5, avgRank: 5.2, trend: 'up' },
  { id: '6', name: 'Tyreek Hill', position: 'WR', team: 'MIA', rank: 6, avgRank: 6.1, trend: 'stable' },
  { id: '7', name: 'Justin Jefferson', position: 'WR', team: 'MIN', rank: 7, avgRank: 7.4, trend: 'down' },
  { id: '8', name: 'Saquon Barkley', position: 'RB', team: 'PHI', rank: 8, avgRank: 8.2, trend: 'up' },
  { id: '9', name: 'CeeDee Lamb', position: 'WR', team: 'DAL', rank: 9, avgRank: 9.3, trend: 'stable' },
  { id: '10', name: 'Lamar Jackson', position: 'QB', team: 'BAL', rank: 10, avgRank: 10.1, trend: 'up' },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Player[]>
) {
  if (req.method === 'GET') {
    res.status(200).json(mockPlayers)
  } else {
    res.status(405).end()
  }
}
