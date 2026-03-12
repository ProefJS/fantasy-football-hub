import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

interface DraftPick {
  round: number
  pick: number
  playerName: string
  position: string
}

export default function Simulator() {
  const [draftPicks, setDraftPicks] = useState<DraftPick[]>([])
  const [round, setRound] = useState(1)
  const [pick, setPick] = useState(1)
  const [playerName, setPlayerName] = useState('')
  const [position, setPosition] = useState('QB')

  const addPick = () => {
    if (!playerName.trim()) return
    
    const newPick: DraftPick = {
      round,
      pick,
      playerName,
      position,
    }
    
    setDraftPicks([...draftPicks, newPick])
    setPlayerName('')
    setPick(pick + 1)
    if (pick >= 12) {
      setRound(round + 1)
      setPick(1)
    }
  }

  const removePick = (index: number) => {
    const newPicks = draftPicks.filter((_, i) => i !== index)
    setDraftPicks(newPicks)
  }

  const resetDraft = () => {
    setDraftPicks([])
    setRound(1)
    setPick(1)
  }

  const positions = ['QB', 'RB', 'WR', 'TE', 'K', 'DEF']

  return (
    <>
      <Head>
        <title>Draft Simulator - Fantasy Football Hub</title>
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
                <Link href="/bigboard" className="text-slate-400 hover:text-white">Big Board</Link>
                <Link href="/simulator" className="text-blue-400 font-semibold">Simulator</Link>
                <Link href="/analyzer" className="text-slate-400 hover:text-white">Analyzer</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-4xl font-bold text-white mb-8">Draft Simulator</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Draft Input */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Add Draft Pick</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Round: {round} | Pick: {pick}
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Player Name</label>
                  <input
                    type="text"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addPick()}
                    placeholder="Enter player name"
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Position</label>
                  <select
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white focus:outline-none focus:border-blue-400"
                  >
                    {positions.map(pos => (
                      <option key={pos} value={pos}>{pos}</option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={addPick}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition"
                >
                  Add Pick
                </button>

                <button
                  onClick={resetDraft}
                  className="w-full bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded transition"
                >
                  Reset Draft
                </button>
              </div>
            </div>

            {/* Draft Picks List */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Your Draft ({draftPicks.length} picks)</h3>
              
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {draftPicks.length === 0 ? (
                  <p className="text-slate-400">No picks yet. Start drafting!</p>
                ) : (
                  draftPicks.map((pick, idx) => (
                    <div key={idx} className="bg-slate-700 rounded p-4 flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-white">
                          R{pick.round}P{pick.pick}: {pick.playerName}
                        </p>
                        <p className="text-sm text-slate-400">{pick.position}</p>
                      </div>
                      <button
                        onClick={() => removePick(idx)}
                        className="text-red-400 hover:text-red-300 font-bold"
                      >
                        ✕
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
