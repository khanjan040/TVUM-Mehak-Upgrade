export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/DSC4582.JPG.jpeg)' }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <img
          src="/logo-removebg-preview.png"
          alt="TVUM Yoga & Wellness Studio"
          className="mx-auto mb-8 w-48 md:w-56 lg:w-64 object-contain"
        />

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
          Feel stronger, lighter & pain-free — with yoga that's tailored to your body.
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl font-light mb-12 max-w-4xl mx-auto leading-relaxed">
          Small-group yoga classes in Baner, Pune focused on strength, mobility, and deep relaxation — suitable for beginners, those dealing with pain, and prenatal students.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-[#8B7355] px-8 py-4 rounded-md text-lg font-medium hover:bg-[#F5F1ED] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Reserve Your Spot
          </button>
          <a
            href="https://wa.me/919561852500"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-white/10 transition-all duration-300"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
