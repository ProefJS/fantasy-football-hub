interface PlayerCardProps {
  name: string
  position: string
  team: string
  rank: number
  avgRank: number
  trend: 'up' | 'down' | 'stable'
  onClick?: () => void
}

export default function PlayerCard({
  name,
  position,
  team,
  rank,
  avgRank,
  trend,
  onClick,
}: PlayerCardProps) {
  const trendIcon = trend === 'up' ? '📈' : trend === 'down' ? '📉' : '➡️'
  const trendColor = trend === 'up' ? 'text-green-400' : trend === 'down' ? 'text-red-400' : 'text-slate-400'

  return (
    <div
      onClick={onClick}
      className="bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 rounded-lg p-6 hover:border-blue-400 transition cursor-pointer transform hover:scale-105"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-white">{name}</h3>
          <p className="text-sm text-slate-400">{team}</p>
        </div>
        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          #{rank}
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-slate-400">Position:</span>
          <span className="font-semibold text-white bg-slate-600 px-2 py-1 rounded">
            {position}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-slate-400">Avg Rank:</span>
          <span className="font-semibold text-white">{avgRank.toFixed(1)}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-slate-400">Trend:</span>
          <span className={`text-2xl ${trendColor}`}>{trendIcon}</span>
        </div>
      </div>
    </div>
  )
}
