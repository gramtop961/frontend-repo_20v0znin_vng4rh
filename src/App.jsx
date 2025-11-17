import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 relative">
      {/* Gradient aura background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15),rgba(59,130,246,0.12)_35%,rgba(251,146,60,0.1)_60%,transparent_75%)]" />

      <Navbar />
      <main className="relative z-20">
        <Hero />
        <Features />
        <CTA />
      </main>

      <footer className="relative z-20 border-t border-white/10 py-8 text-center text-white/60">
        © {new Date().getFullYear()} Auralens — AI video ads
      </footer>
    </div>
  )
}

export default App
