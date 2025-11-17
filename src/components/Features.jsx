import { Sparkles, Mic, Wand2, Video, Layers } from 'lucide-react'

const features = [
  {
    icon: Wand2,
    title: 'Prompt to Video',
    desc: 'Describe your product and target audience. We generate scripts, storyboards, and full videos.',
  },
  {
    icon: Mic,
    title: 'AI Voiceovers',
    desc: 'Crisp, natural-sounding voices with brand tone control and multi-language support.',
  },
  {
    icon: Layers,
    title: 'Brand Kit',
    desc: 'Drop in your fonts, colors, and logo. We keep every creative perfectly on-brand.',
  },
  {
    icon: Video,
    title: 'Variants & Sizes',
    desc: 'Auto-generate multiple cuts for TikTok, Reels, YouTube, and display with smart reframing.',
  },
]

export default function Features() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-white/60">
            <Sparkles className="w-4 h-4" /> Capabilities
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-white">Everything you need to ship performance creatives</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-all">
              <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center text-white">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
