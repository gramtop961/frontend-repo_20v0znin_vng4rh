import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="relative z-30">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400" />
          <span className="text-white font-semibold tracking-tight">Auralens</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-white/80">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#cta" className="hover:text-white">Request demo</a>
        </nav>
        <button className="md:hidden text-white/80" aria-label="Menu">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  )
}
