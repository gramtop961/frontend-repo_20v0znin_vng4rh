import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Animated gradient glow backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.25),rgba(59,130,246,0.15)_35%,rgba(251,146,60,0.12)_60%,transparent_75%)]" />

      {/* Spline 3D animation */}
      <div className="relative z-10 h-[60vh] md:h-[70vh] lg:h-[75vh]">
        <Spline 
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Headline */}
      <div className="relative z-20 -mt-10 md:-mt-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
            AI video ads, generated from a single prompt
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            Turn ideas into polished, on-brand video creatives in minutes. Voiceover, visuals, captions, and variants—automated.
          </p>
        </div>
      </div>
    </section>
  );
}
