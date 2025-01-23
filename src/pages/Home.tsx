import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";

const Home = () => {
  return (
    <main className="min-h-dvh bg-white">
      <Navbar />
      <Hero />
      <AboutMe />
    </main>
  );
};

export default Home;