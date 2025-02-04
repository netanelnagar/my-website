import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-screen pt-16 relative overflow-hidden ">
      {/* <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-10  pointer-events-none"/> */}
      
      {/* Decorative Dots */}
      <div className="absolute top-20 right-10 grid grid-cols-3 gap-2">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-primary rounded-full opacity-60" />
        ))}
      </div>
      <div className="absolute bottom-20 left-10 grid grid-cols-3 gap-2">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-secondary rounded-full opacity-60" />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between z-20">
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            DESIGN · DEVELOPMENT · MARKETING
          </div>
          
          <h2 className="text-gray-600 text-xl md:text-2xl font-medium">
            I can help your business to
          </h2>
          
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">Get online and
            grow fast</span> 
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
            <Link
              to="/resume"
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              onClick={() => console.log("first click")}
            >
              Resume
            </Link>
            <Link
              to="/projects"
              className="px-8 py-3 border-2 border-gray-200 text-gray-600 rounded-lg hover:border-primary hover:text-primary transition-colors"
            >
              Projects
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-[2rem] transform rotate-6 opacity-20" />
            <img
              src="/my-img.png"
              alt="Professional portrait"
              className="relative rounded-[2rem] w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;