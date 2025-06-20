import React from "react";

export default function Footer() {
  return (
    <footer className="bg-yellow-200 py-12 px-6 md:px-16 ">
      <div className="flex flex-wrap justify-between items-start gap-12">
        {/* Logo */}
        <div>
          <a href="/" aria-label="Home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 111 71"
              className="w-28 h-auto"
            >
              <path
                d="M87.28,71l-28.1-37.59c-.59-.79-.59-1.88,0-2.68L82.14,0h-27.23l-29.12,39.41c-.68.93-2.16.44-2.16-.71V0H0v71h28.97l14.53-19.37c.61-.82,1.85-.79,2.43.06l13.14,19.31h28.22Z"
                fill="#000000"
              ></path>
              <path
                d="M91.7,51.53c10.66,0,19.3-8.61,19.3-19.24s-8.64-19.24-19.3-19.24-19.3,8.61-19.3,19.24,8.64,19.24,19.3,19.24Z"
                fill="#000000"
              ></path>
            </svg>
          </a>
        </div>

        {/* Link Columns */}
        <div className="flex flex-wrap gap-12 text-black">
          {/* Column 1 */}
          <div>
            <h4 className="font-bold mb-4">Kümmerlein</h4>
            <ul className="space-y-2">
              <li>Lawyers</li>
              <li>Notaries</li>
              <li>About us</li>
              <li>Career</li>
              <li>News</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-bold mb-4">Information</h4>
            <ul className="space-y-2">
              <li>Imprint</li>
              <li>Data protection</li>
              <li>Cookie Consent</li>
              <li>Whistleblower</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-bold mb-4">Social Media</h4>
            <ul className="space-y-2">
              <li>Linkedin</li>
              <li>Instagram</li>
              <li>Xing</li>
              <li>Facebook</li>
              <li>X (Twitter)</li>
            </ul>
          </div>
        </div>

        {/* Brand Name */}
        <div className="text-black text-2xl font-semibold">KÜMMERLEIN</div>
      </div>
    </footer>
  );
}
