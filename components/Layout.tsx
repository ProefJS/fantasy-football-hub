import Link from 'next/link'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
  currentPage?: string
}

export default function Layout({ children, currentPage }: LayoutProps) {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/bigboard', label: 'Big Board' },
    { href: '/simulator', label: 'Simulator' },
    { href: '/analyzer', label: 'Analyzer' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Navigation */}
      <nav className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <h1 className="text-2xl font-bold text-blue-400 cursor-pointer hover:text-blue-300 transition">
                🏈 Fantasy Football Hub
              </h1>
            </Link>
            <div className="flex gap-6">
              {navItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-semibold transition ${
                    currentPage === item.href
                      ? 'text-blue-400'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">About</h3>
              <p className="text-slate-400">
                Fantasy Football Hub is your ultimate tool for dominating your fantasy league with data-driven insights.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Features</h3>
              <ul className="text-slate-400 space-y-2">
                <li><Link href="/bigboard" className="hover:text-white transition">Big Board</Link></li>
                <li><Link href="/simulator" className="hover:text-white transition">Draft Simulator</Link></li>
                <li><Link href="/analyzer" className="hover:text-white transition">Trade Analyzer</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Resources</h3>
              <ul className="text-slate-400 space-y-2">
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
            <p>© 2026 Fantasy Football Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
