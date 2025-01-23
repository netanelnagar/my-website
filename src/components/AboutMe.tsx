import { Twitter, Linkedin, Github } from "lucide-react";

const AboutMe = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">About Me</span>{" "}
          {/* <span className="text-secondary"></span> */}
        </h2>

        <h3 className="text-2xl md:text-3xl text-gray-700 font-medium mb-8">
          My name is Netanel Nagar and I help brands grow.
        </h3>

        <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
          I'm a Full Stack developer who helps brands grow their online presence and drive conversions. I specialize in building scalable and efficient web applications, with a proven track record of delivering high-quality projects on time and within budget. My expertise includes React, Node.js, AWS etc. I'm passionate about leveraging technology to solve complex business challenges and create exceptional user experiences. I'm looking for a challenging development role where I can contribute to a company's success and continue to expand my skills.
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
            href="https://www.linkedin.com/in/netanel-n"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-primary hover:text-secondary transition-colors"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="https://github.com/netanelnagar"
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