import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
    document.title = "Netanel Nagar";
  }, []);
  return (
    <main className="min-h-dvh bg-white">
      <Hero />
      <AboutMe />
    </main>
  );
};

export default Home;