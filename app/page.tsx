import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-lg mb-6">
          Hi! I'm [Joshua-Jaye Chan], a Computer Science major passionate about game development!
          I'm currently learning HTML, CSS, React, Next.js, and other web technologies.
        </p>
        <p className="text-lg">
          Check out my projects and feel free to reach out through the contact page!
        </p>
      </main>
      <Footer />
    </div>
  );
}
