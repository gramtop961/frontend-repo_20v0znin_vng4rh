import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function CTA() {
  const [form, setForm] = useState({ name: '', email: '', company: '', use_case: '', budget: '' })
  const [status, setStatus] = useState({ loading: false, ok: null, msg: '' })

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, ok: null, msg: '' })
    try {
      const res = await fetch(`${BACKEND}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error((await res.json()).detail || 'Failed to submit')
      setStatus({ loading: false, ok: true, msg: 'Thanks! We will reach out shortly.' })
      setForm({ name: '', email: '', company: '', use_case: '', budget: '' })
    } catch (err) {
      setStatus({ loading: false, ok: false, msg: err.message })
    }
  }

  return (
    <section className="relative py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-white text-center">Get early access</h3>
          <p className="mt-2 text-white/70 text-center">Tell us about your goals and we’ll set you up for a tailored demo.</p>

          <form onSubmit={submit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="w-full rounded-lg bg-white/10 text-white placeholder-white/60 px-4 py-3 outline-none border border-white/10 focus:border-white/30" placeholder="Your name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
            <input className="w-full rounded-lg bg-white/10 text-white placeholder-white/60 px-4 py-3 outline-none border border-white/10 focus:border-white/30" placeholder="Work email" type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
            <input className="w-full rounded-lg bg-white/10 text-white placeholder-white/60 px-4 py-3 outline-none border border-white/10 focus:border-white/30 md:col-span-2" placeholder="Company / brand" value={form.company} onChange={e=>setForm({...form, company:e.target.value})} />
            <input className="w-full rounded-lg bg-white/10 text-white placeholder-white/60 px-4 py-3 outline-none border border-white/10 focus:border-white/30 md:col-span-2" placeholder="What do you want to create?" value={form.use_case} onChange={e=>setForm({...form, use_case:e.target.value})} />
            <select className="w-full rounded-lg bg-white/10 text-white placeholder-white/60 px-4 py-3 outline-none border border-white/10 focus:border-white/30" value={form.budget} onChange={e=>setForm({...form, budget:e.target.value})}>
              <option value="" className="bg-slate-900">Budget range</option>
              <option className="bg-slate-900" value="<$1k">Below $1k</option>
              <option className="bg-slate-900" value="$1k-$5k">$1k - $5k</option>
              <option className="bg-slate-900" value="$5k-$20k">$5k - $20k</option>
              <option className="bg-slate-900" value=">$20k">Above $20k</option>
            </select>
            <button disabled={status.loading} className="md:col-span-2 inline-flex items-center justify-center gap-2 rounded-lg bg-white text-slate-900 font-medium px-5 py-3 hover:bg-white/90 transition">
              {status.loading ? 'Submitting...' : 'Request a demo'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
          {status.msg && (
            <p className={`mt-4 text-center ${status.ok ? 'text-green-300' : 'text-red-300'}`}>{status.msg}</p>
          )}
        </div>
      </div>
    </section>
  )
}
