import React from "react";

const awardsImages = [
  "https://www.kuemmerlein.de/wp-content/uploads/2025/04/Kuemmerlein_azur100.svg",
  "https://www.kuemmerlein.de/wp-content/uploads/2025/04/Kuemmerlein_Legal500.svg",
  "https://www.kuemmerlein.de/wp-content/uploads/2025/04/Kuemmerlein_Talenrocket.svg",
];

export default function AwardsShowcase() {
  return (
    <section className="bg-gray-50 py-24 px-6 md:px-16 lg:px-32 rounded-3xl mt-32">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 space-y-6 md:space-y-0">
        <h2 className="text-5xl font-serif font-normal leading-snug">
          A new principle
        </h2>
        <div className="max-w-xl">
          <p className="text-lg font-light leading-relaxed mb-6">
            Trust the voices of our clients. They will tell you most clearly how
            we can simplify complexity for you.
          </p>
          <a
            href="#"
            className="flex items-center text-base font-medium underline hover:text-gray-700 transition"
          >
            <span className="inline-block w-2 h-2 bg-black rounded-full mr-2"></span>
            GET TO KNOW YOUR TEAM
          </a>
        </div>
      </div>

      <div className="overflow-hidden relative">
        <div className="flex animate-scroll gap-6">
          {[...Array(4)].map((_, repeatIdx) =>
            awardsImages.map((src, idx) => (
              <img
                key={`${repeatIdx}-${idx}`}
                src={src}
                alt="Award"
                className="w-28 h-auto object-contain"
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
