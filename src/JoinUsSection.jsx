export default function JoinUsSection() {
  return (
    <section className="w-full bg-white py-32 px-6 md:px-20">
      {/* Top Heading + Subtext */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-24">
        <h2 className="text-5xl md:text-6xl font-serif font-normal leading-tight text-black">
          Simplicity meets excellence:
          <br />
          become part of our team.
        </h2>

        <p className="text-base md:text-lg font-sans text-black mt-6 md:mt-0 md:ml-10 max-w-md">
          K. – The condensation of our promise: Kümmerlein to the point!
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Image */}
        <div>
          <img
            src="https://www.kuemmerlein.de/wp-content/uploads/2025/03/K._Gruppenbild2-1640x820.jpg"
            alt="Team discussion"
            className="rounded-3xl w-full h-[550px] object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <p className="text-2xl md:text-3xl font-serif text-black leading-snug mb-10">
            Join us in changing the way legal advice is often unnecessarily
            complex so that it becomes easier and quicker for our clients to
            implement. Help us to develop a new standard in our industry that
            can change many things.
          </p>

          <div className="flex items-center space-x-3 cursor-pointer">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <span className="uppercase text-sm tracking-wider underline font-sans">
              Learn More
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
