import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fantasy Football Hub</title>
        <meta name="description" content="Your fantasy football analysis tool" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        {/* Navigation */}
        <nav className="bg-slate-900 border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-blue-400">🏈 Fantasy Football Hub</h1>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-white mb-6">
              Master Your Fantasy League
            </h2>
            <p className="text-xl text-slate-300 mb-12">
              Advanced analytics and tools to dominate your fantasy football competition
            </p>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {/* Card 1 */}
              <Link href="/bigboard">
                <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 hover:border-blue-400 transition cursor-pointer">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-bold text-white mb-3">Big Board</h3>
                  <p className="text-slate-400">
                    Aggregated player rankings from top fantasy analysts
                  </p>
                </div>
              </Link>

              {/* Card 2 */}
              <Link href="/simulator">
                <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 hover:border-blue-400 transition cursor-pointer">
                  <div className="text-4xl mb-4">🎲</div>
                  <h3 className="text-xl font-bold text-white mb-3">Draft Simulator</h3>
                  <p className="text-slate-400">
                    Simulate draft scenarios and test different strategies
                  </p>
                </div>
              </Link>

              {/* Card 3 */}
              <Link href="/analyzer">
                <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 hover:border-blue-400 transition cursor-pointer">
                  <div className="text-4xl mb-4">🔄</div>
                  <h3 className="text-xl font-bold text-white mb-3">Trade Analyzer</h3>
                  <p className="text-slate-400">
                    Evaluate and optimize trade proposals with data-driven insights
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-slate-900 border-t border-slate-700 mt-20 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400">
            <p>Fantasy Football Hub © 2026 - Your competitive edge</p>
          </div>
        </footer>
      </div>
    </>
  )
}
