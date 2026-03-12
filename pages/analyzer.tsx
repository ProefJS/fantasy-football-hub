import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

interface TradeAnalysis {
  player1: string
  player2: string
  verdict: string
  analysis: string
  recommendation: string
}

export default function Analyzer() {
  const [player1, setPlayer1] = useState('')
  const [player2, setPlayer2] = useState('')
  const [analysis, setAnalysis] = useState<TradeAnalysis | null>(null)
  const [loading, setLoading] = useState(false)

  const analyzeTrade = async () => {
    if (!player1.trim() || !player2.trim()) return

    setLoading(true)
    try {
      const response = await fetch('/api/analyze-trade', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ player1, player2 }),
      })
      const data = await response.json()
      setAnalysis(data)
    } catch (error) {
      console.error('Error analyzing trade:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Trade Analyzer - Fantasy Football Hub</title>
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
                <Link href="/simulator" className="text-slate-400 hover:text-white">Simulator</Link>
                <Link href="/analyzer" className="text-blue-400 font-semibold">Analyzer</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-4xl font-bold text-white mb-8">Trade Analyzer</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Compare Trade</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    You Give
                  </label>
                  <input
                    type="text"
                    value={player1}
                    onChange={(e) => setPlayer1(e.target.value)}
                    placeholder="Enter player name"
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
                  />
                </div>

                <div className="text-center">
                  <span className="text-2xl text-slate-400">⬌</span>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    You Get
                  </label>
                  <input
                    type="text"
                    value={player2}
                    onChange={(e) => setPlayer2(e.target.value)}
                    placeholder="Enter player name"
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
                  />
                </div>

                <button
                  onClick={analyzeTrade}
                  disabled={loading}
                  className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-slate-600 text-white font-bold py-2 px-4 rounded transition"
                >
                  {loading ? 'Analyzing...' : 'Analyze Trade'}
                </button>
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Analysis Results</h3>
              
              {analysis ? (
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-slate-400">Trade Verdict</p>
                    <p className={`text-2xl font-bold ${
                      analysis.verdict === 'ACCEPT' ? 'text-green-400' : 
                      analysis.verdict === 'REJECT' ? 'text-red-400' : 
                      'text-yellow-400'
                    }`}>
                      {analysis.verdict}
                    </p>
                  </div>

                  <div className="border-t border-slate-600 pt-4">
                    <p className="text-sm text-slate-400 mb-2">Analysis</p>
                    <p className="text-slate-200">{analysis.analysis}</p>
                  </div>

                  <div className="border-t border-slate-600 pt-4">
                    <p className="text-sm text-slate-400 mb-2">Recommendation</p>
                    <p className="text-slate-200">{analysis.recommendation}</p>
                  </div>
                </div>
              ) : (
                <p className="text-slate-400">Enter two players to analyze a trade</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
