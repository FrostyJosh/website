export default function Navbar() {
  return (
    <nav className="bg-[#8CCCCC] p-4 text-[#002366]">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">My Website</h1>
        <ul className="flex gap-6">
          <li>
            <a href="#" className="hover:text-gray-300 font-semibold">About</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 font-semibold">Projects</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 font-semibold">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
