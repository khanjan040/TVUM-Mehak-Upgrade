import { ArrowRight, Check } from 'lucide-react';

const bullets = [
  'Small-group classes with personal attention',
  'Strength, mobility & pain relief focused',
  'Suitable for beginners',
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/DSC4582.JPG.jpeg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      <nav className="relative z-10 px-8 md:px-12 lg:px-16 pt-8">
        <img
          src="/logo-removebg-preview.png"
          alt="TVUM Yoga & Wellness Studio"
          className="w-28 md:w-32 object-contain"
        />
      </nav>

      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full px-8 md:px-12 lg:px-16 pb-16 pt-8">
          <div className="max-w-[520px]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] mb-8 tracking-tight">
              Yoga That Heals,<br />
              <span className="text-[#C4A882]">Strength That Lasts.</span>
            </h1>

            <ul className="space-y-3 mb-10">
              {bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-white/85 text-base md:text-lg">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#8B7355] flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>

            <p className="text-[#C4A882] text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-5">
              Baner, Pune
            </p>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-3 bg-[#8B7355] hover:bg-[#7A6347] text-white px-8 py-4 rounded-md text-base md:text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:translate-y-[-1px]"
            >
              Reserve Your Spot
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <div className="w-[1px] h-12 bg-white/30 animate-pulse" />
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
}
