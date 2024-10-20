import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCarousel from "./components/Carousel"; // Adjust based on file structure

export default function Home() {
  return (
    <div className="h-screen flex flex-col text-white">
      <Navbar />
      <main className="flex-grow p-6">
        <section className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Website</h1>
          <p className="text-lg mb-6">
            Hi! I'm Joshua-Jaye Chan, a Computer Science major passionate about game development! I'm currently learning HTML, CSS, React, Next.js, and other web development languages and frameworks.
          </p>
          <p>Check out my projects and feel free to reach out through the contact page!</p>

          {/* Add Carousel Component here */}
          <CustomCarousel />
        </section>
      </main>
      <Footer />
    </div>
  );
}
