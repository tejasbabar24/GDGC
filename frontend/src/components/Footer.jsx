import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  Facebook,
} from "lucide-react";
import logo from "../assets/image 1.png";

function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-gray-300">
      {/* Top slant effect */}
      <div className="w-full h-24 mt-10 bg-white rotate-[-2deg] origin-top-left"></div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-6 gap-8">
        {/* Logo & College */}
        <div className="col-span-2 flex flex-col items-start">
          <img src={logo} alt="GDSC Logo" className="w-20 mb-3" />
          <h2 className="text-lg font-semibold">
            Google Developer Student Clubs
          </h2>
          <p className="text-sm text-gray-400">
            D. Y. Patil College of Engineering-Pune
          </p>
        </div>

        {/* Contribute */}
        <div>
          <h3 className="font-semibold text-white mb-3">Contribute</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                File a Bug
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                View Source
              </a>
            </li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="font-semibold text-white mb-3">Programs</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Women Techmakers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Google Developer Experts
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Google Developer Groups
              </a>
            </li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="font-semibold text-white mb-3">Important Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Firebase Console
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Google Cloud Platform
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Action on Google
              </a>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div className="col-span-1">
          <h3 className="font-semibold text-white mb-3">Connect</h3>
          <div className="grid grid-cols-2 gap-y-4 ">
            {/* Column 1 */}
            <a href="#" className="hover:opacity-80">
              <Github size={24} className="text-white" />
            </a>
            <a href="#" className="hover:opacity-80">
              <Linkedin size={24} className="text-blue-600" />
            </a>
            <a href="#" className="hover:opacity-80">
              <Instagram size={24} className="text-pink-500" />
            </a>

            {/* Column 2 */}
            <a href="#" className="hover:opacity-80">
              <Twitter size={24} className="text-sky-500" />
            </a>
            <a href="#" className="hover:opacity-80">
              <Youtube size={24} className="text-red-600" />
            </a>
            <a href="#" className="hover:opacity-80">
              <Facebook size={24} className="text-blue-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
