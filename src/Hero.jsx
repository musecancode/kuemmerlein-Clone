function Hero() {
  return (
    <section id="hero-section" className="relative w-full h-[calc(100vh-1rem)]">
      {/* Hero background with rounded corners except bottom-right */}
      <div
        className="w-full h-full relative overflow-hidden rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl bg-cover bg-center flex items-center justify-start px-6 md:px-12 lg:px-24"
        style={{
          backgroundImage:
            "url('https://www.kuemmerlein.de/wp-content/uploads/2025/05/Kuemmerlein_RechtsanwaelteNotare_3600x1800_4-2560x1280.jpg')",
        }}
      >
        {/* Text content */}
        <div className="max-w-2xl text-left text-[#f7f788] z-10 font-serif">
          <p className="uppercase text-sm tracking-wider mb-3">
            Our promise to you
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight font-serif">
            Make it simple, <br /> but significant
          </h1>
          <p className="text-base mt-4 font-medium text-yellow-200">
            While others complicate things, we make legal advice simple
          </p>
        </div>
      </div>

      {/* Rounded white cutout in bottom-right corner */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-tl-3xl z-20 flex items-center justify-center">
        <div className="w-20 h-20 bg-[#f7f788] rounded-full"></div>
      </div>
    </section>
  );
}

export default Hero;
