import { useInView } from "react-intersection-observer";
import { useState } from "react";
import KoLogo from "./KoLogo";

function Navbar() {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.3 });
  const [hoverItem, setHoverItem] = useState(null);

  const handleMouseEnter = (item) => setHoverItem(item);
  const handleMouseLeave = () => setHoverItem(null);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-14 lg:px-20 font-sans bg-transparent">
        <div className="flex items-start pt-4">
          {/* Logo */}
          <div className="mr-4">
            <KoLogo fill={heroInView ? "#f7f788" : "#000"} />
          </div>

          {/* Nav Content */}
          <div className="flex justify-end w-full">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md py-4 px-6 flex items-center w-full max-w-[calc(100%-160px)]">
              <ul className="flex space-x-8 text-base font-normal text-gray-900 relative">
                {[
                  "Expertise",
                  "Lawyers",
                  "Notaries",
                  "About us",
                  "Career",
                  "News",
                ].map((item) => (
                  <li
                    key={item}
                    className="cursor-pointer whitespace-nowrap px-3 py-1 rounded-lg transition duration-200 hover:bg-gray-100 relative"
                    onMouseEnter={() => handleMouseEnter(item)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item}

                    {/* Expertise Dropdown */}
                    {item === "Expertise" && hoverItem === "Expertise" && (
                      <div className="absolute left-0 top-full mt-2 bg-white/60 backdrop-blur-2xl p-6 rounded-xl shadow-lg w-[600px] flex text-sm text-black z-50">
                        <div className="w-1/2 pr-6">
                          <p className="uppercase font-bold text-xs mb-2">
                            All Legal Fields →
                          </p>
                          <ul className="space-y-1">
                            {[
                              "Plant engineering",
                              "Labor law",
                              "Building and architectural law",
                              "Compliance",
                              "Data protection",
                              "Inheritance law",
                              "Corporate Law",
                              "Commercial law and contract law",
                              "Real estate law",
                              "Insolvency law",
                              "IP and competition law",
                              "IT law",
                              "Antitrust law",
                              "M&A",
                              "Litigation and arbitration",
                              "Foundation law",
                              "Environmental and planning law",
                              "Public commercial law and regulation",
                            ].map((field) => (
                              <li key={field}>{field}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="w-1/2 pl-6 border-l border-gray-300">
                          <p className="uppercase font-bold text-xs mb-2">
                            All Fields of Activity →
                          </p>
                          <ul className="space-y-1">
                            {[
                              "Automotive",
                              "Chemistry",
                              "Data, digitalization & AI",
                              "Energy industry and hydrogen",
                              "Healthcare",
                              "Trade & Logistics",
                              "Real estate, construction & housing industry",
                              "Infrastructure & network expansion",
                              "International",
                              "Circular economy",
                              "Sustainability",
                              "Private Clients & Family Offices",
                              "Private Equity & Venture Capital",
                              "Raw material extraction & mining",
                              "Sport & Events",
                            ].map((activity) => (
                              <li key={activity}>{activity}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Career Dropdown */}
                    {item === "Career" && hoverItem === "Career" && (
                      <div className="absolute left-0 top-full mt-2 bg-white/60 backdrop-blur-2xl p-6 rounded-xl shadow-lg w-[300px] text-sm text-black z-50">
                        <p className="uppercase font-bold text-xs mb-2">
                          Apply now
                        </p>
                        <ul className="space-y-1">
                          {[
                            "Why Kümmerlein?",
                            "Lawyers",
                            "Specialists",
                            "Legal clerkship",
                            "Research assistants",
                            "Education",
                          ].map((role) => (
                            <li key={role}>{role}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* News Dropdown */}
                    {item === "News" && hoverItem === "News" && (
                      <div className="absolute left-0 top-full mt-2 bg-white/60 backdrop-blur-2xl p-6 rounded-xl shadow-lg w-[250px] text-sm text-black z-50">
                        <p className="uppercase font-bold text-xs mb-2">
                          Stay up to date
                        </p>
                        <ul className="space-y-1">
                          {["Insights", "Events"].map((newsItem) => (
                            <li key={newsItem}>{newsItem}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              {/* DE and Company Name */}
              <div className="flex items-center space-x-8 ml-6">
                <button className="border border-black px-4 py-1 rounded-full text-xs font-medium">
                  DE
                </button>
                <span className="text-[28px] font-semibold whitespace-nowrap">
                  KÜMMERLEIN
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero ref */}
      <div ref={heroRef} className="h-[1px] w-full absolute top-[90px]"></div>
    </>
  );
}

export default Navbar;
