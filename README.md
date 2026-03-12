# 🏈 Fantasy Football Hub

A comprehensive fantasy football analysis and management platform built with Next.js, React, and Tailwind CSS.

## Features

### 📊 Big Board
- Aggregated player rankings from top fantasy analysts
- Filter by position (QB, RB, WR, TE, K, DEF)
- Trend analysis (up, down, stable)
- Real-time ranking updates

### 🎲 Draft Simulator
- Simulate your draft strategy
- Track draft picks by round and position
- Test different draft scenarios
- Easy-to-use interface for planning

### 🔄 Trade Analyzer
- Evaluate trade proposals with AI-powered insights
- Get accept/reject/consider recommendations
- Data-driven trade analysis
- Position-specific trade evaluation

## Tech Stack

- **Frontend:** Next.js 14, React 18, TypeScript
- **Styling:** Tailwind CSS, PostCSS
- **Backend:** Next.js API Routes
- **Database:** SQLite (optional)
- **Deployment:** Vercel

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ProefJS/fantasy-football-hub.git
cd fantasy-football-hub
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
fantasy-football-hub/
├── pages/
│   ├── api/
│   │   ├── players.ts        # Get player rankings
│   │   ├── analyze-trade.ts  # Trade analysis endpoint
│   │   └── health.ts         # Health check endpoint
│   ├── _app.tsx              # App wrapper
│   ├── _document.tsx         # Document structure
│   ├── index.tsx             # Home page
│   ├── bigboard.tsx          # Rankings page
│   ├── simulator.tsx         # Draft simulator
│   └── analyzer.tsx          # Trade analyzer
├── styles/
│   └── globals.css           # Global styles
├── public/                   # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## API Endpoints

### GET /api/players
Returns list of all players with rankings and trends.

**Response:**
```json
[
  {
    "id": "1",
    "name": "Patrick Mahomes",
    "position": "QB",
    "team": "KC",
    "rank": 1,
    "avgRank": 1.2,
    "trend": "up"
  }
]
```

### POST /api/analyze-trade
Analyzes a trade proposal between two players.

**Request Body:**
```json
{
  "player1": "Patrick Mahomes",
  "player2": "Josh Allen"
}
```

**Response:**
```json
{
  "player1": "Patrick Mahomes",
  "player2": "Josh Allen",
  "verdict": "REJECT",
  "analysis": "Patrick Mahomes is ranked higher...",
  "recommendation": "Decline this trade..."
}
```

### GET /api/health
Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2026-03-12T10:00:00Z",
  "message": "Fantasy Football Hub API is running"
}
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Click "Deploy"
5. Your app will be live in minutes!

## Future Enhancements

- [ ] Player stats database integration
- [ ] Real-time ranking updates from ESPN/Yahoo
- [ ] User authentication and saved leagues
- [ ] Advanced trade calculator
- [ ] Mobile app version
- [ ] Waiver wire analyzer
- [ ] Bye week planner
- [ ] Auction draft simulator

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Contact

For questions or feedback, please open an issue on GitHub.

---

**Made with ❤️ for fantasy football enthusiasts**
