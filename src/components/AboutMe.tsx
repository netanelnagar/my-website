import { Twitter, Linkedin, Github } from "lucide-react";

const AboutMe = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-[#4F46E5]">About</span>{" "}
          <span className="text-[#D946EF]">Me</span>
        </h2>
        
        <h3 className="text-2xl md:text-3xl text-gray-700 font-medium mb-8">
          My name is Start Bootstrap and I help brands grow.
        </h3>
        
        <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolorum itaque qui unde quisquam
          consequatur autem. Eveniet quasi nobis aliquid cumque officiis sed rem iure ipsa! Praesentium ratione
          atque dolorem?
        </p>
        
        <div className="flex justify-center gap-8">
          <a 
            href="#twitter" 
            className="text-[#4F46E5] hover:text-[#D946EF] transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={32} />
          </a>
          <a 
            href="#linkedin" 
            className="text-[#4F46E5] hover:text-[#D946EF] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={32} />
          </a>
          <a 
            href="#github" 
            className="text-[#4F46E5] hover:text-[#D946EF] transition-colors"
            aria-label="GitHub"
          >
            <Github size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;