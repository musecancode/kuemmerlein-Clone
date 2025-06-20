function Solution() {
  return (
    <section
      className="relative w-full h-[calc(100vh-1rem)] mt-44 mb-44 rounded-3xl overflow-hidden bg-cover bg-center px-6 sm:px-10 lg:px-24 py-20 flex flex-col justify-between"
      style={{
        backgroundImage:
          "url('https://www.kuemmerlein.de/wp-content/uploads/2025/03/K._Gruppenbild3-2560x1280.jpg')",
      }}
    >
      {/* Top content */}
      <div className="max-w-3xl text-left text-[#f7f788] mb-12">
        <h2 className="text-6xl font-serif leading-tight mb-4">
          Our solutions
        </h2>
        <p className="text-base sm:text-lg font-medium text-yellow-200 max-w-2xl">
          Seemingly simple solutions often prove to be the most difficult to
          implement. It is precisely this combination that makes you a winner
          with us.
        </p>

        {/* Learn more button */}
        <div className="mt-6">
          <button className="flex items-center bg-white text-black px-6 py-2 rounded-full font-medium shadow-md hover:bg-black/80 hover:text-white transition-all ">
            <span className="w-3 h-3 bg-black rounded-full mr-3"></span>
            Learn more
          </button>
        </div>
      </div>

      {/* Bottom buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 w-full mt-16">
        <button className="bg-[#b8b567] text-black text-3xl font-serif font-medium px-24 py-8 rounded-3xl shadow-md flex items-center justify-center gap-6 hover:bg-black/80 hover:text-white transition-all w-full sm:w-[40%] text-center">
          <span className="w-4 h-4 bg-black rounded-full"></span>
          Legal Fields
        </button>
        <button className="bg-[#b8b567] text-black text-3xl font-serif font-medium px-24 py-8 rounded-3xl shadow-md flex items-center justify-center gap-6 hover:bg-black/80 hover:text-white transition-all w-full sm:w-[40%] text-center">
          <span className="w-4 h-4 bg-black rounded-full"></span>
          Fields of activity
        </button>
      </div>
    </section>
  );
}

export default Solution;
