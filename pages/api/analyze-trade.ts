import type { NextApiRequest, NextApiResponse } from 'next'

interface TradeAnalysis {
  player1: string
  player2: string
  verdict: string
  analysis: string
  recommendation: string
}

const playerStats: { [key: string]: { rank: number; trend: string; position: string } } = {
  'Patrick Mahomes': { rank: 1, trend: 'up', position: 'QB' },
  'Josh Allen': { rank: 2, trend: 'up', position: 'QB' },
  'Christian McCaffrey': { rank: 3, trend: 'down', position: 'RB' },
  'Travis Kelce': { rank: 4, trend: 'stable', position: 'TE' },
  'Ja\'Marr Chase': { rank: 5, trend: 'up', position: 'WR' },
  'Tyreek Hill': { rank: 6, trend: 'stable', position: 'WR' },
  'Justin Jefferson': { rank: 7, trend: 'down', position: 'WR' },
  'Saquon Barkley': { rank: 8, trend: 'up', position: 'RB' },
  'CeeDee Lamb': { rank: 9, trend: 'stable', position: 'WR' },
  'Lamar Jackson': { rank: 10, trend: 'up', position: 'QB' },
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TradeAnalysis | { error: string }>
) {
  if (req.method === 'POST') {
    const { player1, player2 } = req.body

    const stats1 = playerStats[player1]
    const stats2 = playerStats[player2]

    if (!stats1 || !stats2) {
      return res.status(400).json({ error: 'Player not found in database' })
    }

    const rankDiff = stats1.rank - stats2.rank
    let verdict = 'HOLD'
    let analysis = ''
    let recommendation = ''

    if (rankDiff > 2) {
      verdict = 'REJECT'
      analysis = `${player1} (Rank #${stats1.rank}) is significantly ranked higher than ${player2} (Rank #${stats2.rank}). You would be losing value in this trade.`
      recommendation = 'Decline this trade. You can get a better player for your asset.'
    } else if (rankDiff < -2) {
      verdict = 'ACCEPT'
      analysis = `${player2} (Rank #${stats2.rank}) is ranked higher than ${player1} (Rank #${stats1.rank}). This trade improves your roster.`
      recommendation = 'Accept this trade. You are gaining value.'
    } else {
      verdict = 'CONSIDER'
      analysis = `Both players are similarly ranked. ${player1} is Rank #${stats1.rank} with ${stats1.trend} trend. ${player2} is Rank #${stats2.rank} with ${stats2.trend} trend.`
      recommendation = 'This is a lateral trade. Consider positional needs and recent trends.'
    }

    res.status(200).json({
      player1,
      player2,
      verdict,
      analysis,
      recommendation,
    })
  } else {
    res.status(405).end()
  }
}
