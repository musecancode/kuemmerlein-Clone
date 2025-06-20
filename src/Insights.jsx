import React from "react";

const insightsData = [
  {
    date: "18. JUNE 2025",
    category: "ENVIRONMENTAL AND PLANNING LAW",
    title:
      "Kümmerlein unterstützt bei der Beschleunigung der Zulassung von Netzausbauvorhaben im Freistaat Thüringen",
    author: "Dr. Johannes Schulte",
    imageUrl:
      "https://www.kuemmerlein.de/wp-content/uploads/2025/04/kuemmerlein_lottie__umwelt__und_planungsrecht-828x476.png",
  },
  {
    date: "13. JUNE 2025",
    category: "ENVIRONMENTAL AND PLANNING LAW",
    title: "Klimaschutz ist wichtig – aber kein Fall für die Zivilgerichte",
    author: "Dr. Michael Neupert",
    imageUrl:
      "https://www.kuemmerlein.de/wp-content/uploads/2025/04/kuemmerlein_lottie__umwelt__und_planungsrecht-828x476.png",
  },
  {
    date: "12. JUNE 2025",
    category: "KÜMMERLEIN",
    title: "Handelsblatt/BestLawyers zeichnet 19 Kümmerleins aus",
    author: "Dr. Jens Nebel LL.M. (Wellington)",
    imageUrl:
      "https://www.kuemmerlein.de/wp-content/uploads/2025/04/kuemmerlein_lottie__kuemmerlein-828x476.png",
  },
];

export default function Insights() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-16 lg:px-32 mt-24 rounded-3xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
        <h2 className="text-5xl font-serif font-medium leading-tight">
          Impulses to make things easier for you
        </h2>
        <a
          href="#"
          className="flex items-center mt-6 md:mt-0 text-base font-medium underline hover:text-gray-700 transition"
        >
          <span className="inline-block w-2 h-2 bg-black rounded-full mr-2"></span>
          VIEW ALL INSIGHTS
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {insightsData.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-100 relative flex flex-col h-full overflow-hidden rounded-3xl"
            style={{
              borderBottomRightRadius: "1.5rem", // curved instead of flat
            }}
          >
            {/* Static Image Block */}
            <div
              className="h-52 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            />

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow pb-20">
              <div className="text-xs text-gray-400 mb-1">{item.date}</div>
              <span className="inline-block bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
                {item.category}
              </span>
              <h3 className="text-lg font-semibold leading-snug mb-4 flex-grow">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.author}</p>
            </div>

            {/* Circle cutout */}
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-tl-[1.5rem] z-10 flex items-center justify-center shadow-inner">
              <div className="w-20 h-20 bg-[#f7f788] rounded-full flex items-center justify-center hover:scale-105 transition">
                <span className="text-xl">↗</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
