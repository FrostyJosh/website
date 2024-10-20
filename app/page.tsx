import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-grow p-6">
        <section className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Website</h1>
          <p className="text-lg mb-6">
            Hi! I&#39;m Joshua-Jaye Chan, a Computer Science major passionate about game development! 
            I&#39;m currently learning HTML, CSS, React, Next.js, and other web development languages and frameworks.
          </p>
          <p>Check out my projects and feel free to reach out through the contact page!</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
