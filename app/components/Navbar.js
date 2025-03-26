import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center">
          <Image
            src="/icons/transparent-home-icon.png" // Path to the home icon
            alt="Home"
            width={75} // Adjust the size as needed
            height={75} // Adjust the size as needed
          />
        </a>

        <ul className="flex gap-6">
          <li>
            <a href="#">
              <button className="relative group opacity-90 bg-[#002366] text-white font-semibold py-2 px-4 rounded transition-opacity duration-300 ease-in-out hover:opacity-100">
                About
                <span className="loading-bar"></span>
              </button>
            </a>
          </li>
          <li>
            <a href="#">
              <button className="relative group opacity-90 bg-[#002366] text-white font-semibold py-2 px-4 rounded transition-opacity duration-300 ease-in-out hover:opacity-100">
                Projects
                <span className="loading-bar"></span>
              </button>
            </a>
          </li>
          <li>
            <a href="#">
              <button className="relative group opacity-90 bg-[#002366] text-white font-semibold py-2 px-4 rounded transition-opacity duration-300 ease-in-out hover:opacity-100">
                Contact
                <span className="loading-bar"></span>
              </button>
            </a>
          </li>
        </ul>
      </div> {/* This is the missing closing div */}
    </nav>
  );
}
