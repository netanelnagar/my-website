
import { Twitter, Linkedin, Github } from "lucide-react";
import { useAppContext } from "./context/context";

const AboutMe = () => {
 const {data} = useAppContext();

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">About Me</span>
        </h2>

        <h3 className="text-2xl md:text-3xl text-gray-700 font-medium mb-8">
          {data?.aboutMe.header}
        </h3>

        <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
          {data?.aboutMe.body}
        </p>

        <div className="flex justify-center gap-8">
          {/* <a
            href="#twitter"
            className="text-[#4F46E5] hover:text-[#D946EF] transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={32} />
          </a> */}
          <a
            href={data?.aboutMe.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-primary hover:text-secondary transition-colors"
          >
            <Linkedin size={32} />
          </a>
          <a
            href={data?.aboutMe.gitHub}
            target="_blank"
            className="text-primary hover:text-secondary transition-colors"
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