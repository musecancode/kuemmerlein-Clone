export default function Enquiry() {
  return (
    <div className="flex justify-center items-center my-24">
      <div className="relative group cursor-pointer w-[700px] max-w-full">
        {/* Button */}
        <div className="bg-[#f7f788] text-black text-2xl font-serif px-10 py-6 rounded-full transition-all duration-500 group-hover:-translate-x-4 w-full text-left">
          Get to know us without <br /> obligation
        </div>

        {/* Hover Circle */}
        <div className="absolute top-1/2 -right-20 transform -translate-y-1/2 w-20 h-20 bg-[#f7f788] rounded-full opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500"></div>
      </div>
    </div>
  );
}
