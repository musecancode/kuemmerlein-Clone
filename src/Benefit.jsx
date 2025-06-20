export default function Benefit() {
  return (
    <section className="w-full bg-white text-black py-32 px-6 md:px-16 lg:px-32 flex flex-col md:flex-row justify-between items-start gap-12 font-sans">
      {/* Left Text */}
      <div className="md:w-1/2">
        <h2 className="text-[3.0rem] md:text-[3.2rem] font-serif font-light leading-[1.2]">
          Your benefit:
          <br />
          Simplicity that counts.
        </h2>
      </div>

      {/* Right Text + Button */}
      <div className="md:w-1/2 flex flex-col gap-4">
        <p className="text-[1.15rem] font-normal leading-7 max-w-[560px]">
          We transform complex issues into simple, clearly understandable and
          inspiring solutions that make a value-enhancing difference for you.
        </p>

        <div className="flex items-center gap-2 mt-2">
          <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
          <a
            href="#"
            className="text-xs font-light underline tracking-wide hover:text-gray-800 transition"
          >
            DISCOVER YOUR ADVANTAGES
          </a>
        </div>
      </div>
    </section>
  );
}
