import React from "react";

const teamMembers = [
  {
    name: "Dr. Christian Löhr",
    role: "Partner",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Dr. Markus Schewe",
    role: "Partner",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Dr. Stefan Wiesendahl",
    role: "Partner",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Dr. Katharina Dorth",
    role: "Partner",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Dr. Johannes Schulte",
    role: "Partner",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Dr. Jana Benzel",
    role: "Partner",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Jan-Felix Wicke",
    role: "Partner",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Eva Sandkühler",
    role: "Partner",
    img: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

const Team = () => {
  const duplicated = [...teamMembers, ...teamMembers]; // double for smooth loop

  return (
    <section className="bg-[#e1e1d5] py-20 px-6 md:px-16 rounded-3xl mx-2 my-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-serif text-black">
            A team that counts.
            <br />
            Simplicity that works.
          </h2>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 text-black flex flex-col gap-4">
          <p>
            Get to know our collaborative team. Each and every one of them is
            committed to making results easier for you to use so that you can
            make the best decision with confidence. Always under the promise: To
            make it simple, but significant.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <a
              href="#"
              className="text-sm font-medium text-black hover:text-gray-500 hover:no-underline"
            >
              GET TO KNOW YOUR TEAM
            </a>
          </div>
        </div>
      </div>

      {/* Animated Rows */}
      <div className="mt-10 space-y-6 overflow-hidden">
        {/* Row 1 */}
        <div className="whitespace-nowrap animate-slide-left">
          {duplicated.map((member, index) => (
            <div
              key={index}
              className="inline-flex items-center bg-white hover:bg-[#fdfd84] transition-colors duration-300 rounded-full px-4 py-2 mx-3"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-12 h-12 rounded-full mr-3 object-cover"
              />
              <div>
                <p className="text-sm font-semibold">{member.name}</p>
                <p className="text-xs text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 (opposite direction) */}
        <div className="whitespace-nowrap animate-slide-right">
          {duplicated.map((member, index) => (
            <div
              key={index}
              className="inline-flex items-center bg-white hover:bg-[#fdfd84] transition-colors duration-300 rounded-full px-4 py-2 mx-3"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-12 h-12 rounded-full mr-3 object-cover"
              />
              <div>
                <p className="text-sm font-semibold">{member.name}</p>
                <p className="text-xs text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 3 */}
        <div className="whitespace-nowrap animate-slide-left">
          {duplicated.map((member, index) => (
            <div
              key={index}
              className="inline-flex items-center bg-white hover:bg-[#fdfd84] transition-colors duration-300 rounded-full px-4 py-2 mx-3"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-12 h-12 rounded-full mr-3 object-cover"
              />
              <div>
                <p className="text-sm font-semibold">{member.name}</p>
                <p className="text-xs text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
