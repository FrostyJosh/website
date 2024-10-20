import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-gray-900 text-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="font-bold text-xl">My Website</div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about" className="hover:underline">About</Link>
          </li>
          <li>
            <Link href="/projects" className="hover:underline">Projects</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
