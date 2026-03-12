import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

interface Player {
  id: string
  name: string
  position: string
  team: string
  rank: number
  avgRank: number
  trend: string
}

export default function BigBoard() {
  const [players, setPlayers] = useState<Player[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('ALL')

  useEffect(() => {
    fetchPlayers()
  }, [])

  const fetchPlayers = async () => {
    try {
      const response = await fetch('/api/players')
      const data = await response.json()
      setPlayers(data)
    } catch (error) {
      console.error('Error fetching players:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredPlayers = filter === 'ALL' 
    ? players 
    : players.filter(p => p.position === filter)

  const positions = ['ALL', 'QB', 'RB', 'WR', 'TE', 'K', 'DEF']

  return (
    <>
      <Head>
        <title>Big Board - Fantasy Football Hub</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        {/* Navigation */}
        <nav className="bg-slate-900 border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/">
                <h1 className="text-2xl font-bold text-blue-400 cursor-pointer">🏈 Fantasy Football Hub</h1>
              </Link>
              <div className="flex gap-6">
                <Link href="/bigboard" className="text-blue-400 font-semibold">Big Board</Link>
                <Link href="/simulator" className="text-slate-400 hover:text-white">Simulator</Link>
                <Link href="/analyzer" className="text-slate-400 hover:text-white">Analyzer</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-4xl font-bold text-white mb-8">Big Board Rankings</h2>

          {/* Position Filter */}
          <div className="flex gap-3 mb-8 flex-wrap">
            {positions.map(pos => (
              <button
                key={pos}
                onClick={() => setFilter(pos)}
                className={`px-4 py-2 rounded font-semibold transition ${
                  filter === pos
                    ? 'bg-blue-500 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {pos}
              </button>
            ))}
          </div>

          {/* Players Table */}
          {loading ? (
            <div className="text-center py-12">
              <p className="text-slate-400 text-lg">Loading players...</p>
            </div>
          ) : (
            <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-slate-900 border-b border-slate-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Rank</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Player</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Position</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Team</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Avg Rank</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPlayers.map((player, idx) => (
                    <tr key={player.id} className="border-b border-slate-700 hover:bg-slate-700 transition">
                      <td className="px-6 py-4 text-sm font-bold text-blue-400">{idx + 1}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-white">{player.name}</td>
                      <td className="px-6 py-4 text-sm text-slate-300">{player.position}</td>
                      <td className="px-6 py-4 text-sm text-slate-300">{player.team}</td>
                      <td className="px-6 py-4 text-sm text-slate-300">{player.avgRank.toFixed(1)}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className={player.trend === 'up' ? 'text-green-400' : player.trend === 'down' ? 'text-red-400' : 'text-slate-400'}>
                          {player.trend === 'up' ? '📈' : player.trend === 'down' ? '📉' : '➡️'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
