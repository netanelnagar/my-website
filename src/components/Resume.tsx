import { Download, Code, Scissors } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect } from "react";

const Resume = () => {

  useEffect(() => {
    document.title = "Resume";
  }, []);
  const professionalSkills = [
    { title: "SEO/SEM Marketing", id: 1 },
    { title: "Statistical Analysis", id: 2 },
    { title: "Web Development", id: 3 },
    { title: "Network Security", id: 4 },
    { title: "Adobe Software Suite", id: 5 },
    { title: "User Interface Design", id: 6 },
  ];

  const languages = [
    { title: "HTML", id: 1 },
    { title: "CSS", id: 2 },
    { title: "JavaScript", id: 3 },
    { title: "Python", id: 4 },
    { title: "Ruby", id: 5 },
    { title: "Node.js", id: 6 },
  ];

  const experiences = [
    {
      period: "2019 - Present",
      title: "Web Developer",
      company: "Stark Industries",
      location: "Los Angeles, CA",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.",
    },
    {
      period: "2017 - 2019",
      title: "Web Developer",
      company: "Wayne Enterprises",
      location: "Gotham City, NY",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis.",
    },
  ];

  return (
    <section className="py-24 bg-slate-100/50">
      <div className="max-w-[800px] mx-auto px-4 md:px-8">
        <div className="flex justify-center">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-center">
            Resume
          </h1>
        </div>
        <div className="flex justify-between items-center mt-16">
          <h2 className="text-3xl font-bold text-primary ">
            Experience
          </h2>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            <Download className="mr-2" />
            Download Resume
          </Button>
        </div>
        <div>
          <div className="space-y-8 mt-5">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow border grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                <div className="flex flex-col items-center md:justify-between bg-gray-100/70  p-3 rounded-lg">
                  <span className="text-primary font-bold">
                    {experience.period}
                  </span>
                  <h3 className="text-xl font-bold mt-2">{experience.title}</h3>
                  <p className="text-gray-600">
                    {experience.company} | {experience.location}
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed md:col-span-2">
                  {experience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 space-y-8 shadow-md border p-10 rounded-lg bg-white">
          <div >
            <div className="flex items-center gap-3 mb-8">
              <Scissors className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                Professional Skills
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {professionalSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="p-4 bg-gray-50 rounded-lg "
                >
                  {skill.title}
                </div>
              ))}
            </div>
          </div>

          <div >
            <div className="flex items-center gap-3 mb-8">
              <Code className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                Languages
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {languages.map((language) => (
                <div
                  key={language.id}
                  className="p-4 bg-gray-50 rounded-lg "
                >
                  {language.title}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resume;