import { useEffect } from "react";
import { useAppContext } from "./context/context";
import { FaGithub } from "react-icons/fa6";
import ImageChecker from "./ImageChecker";





const Projects = () => {
    const context = useAppContext();

    useEffect(() => {
        document.title = "Projects | Netanel Nagar";
    }, []);  
    
    if (!context || !context.data) return <div className="loader m-auto h-6 w-6 "></div>;
    
    const { data: { projects } } = context;

    return (
        <section className="py-24 flex-grow bg-slate-100/50">
            <div className="max-w-[800px] mx-auto px-4 md:px-8">
                <div className="flex justify-center h-24">
                    <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-center">
                        Projects
                    </h1>
                </div>
                <div className="space-y-8 mt-4">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border flex flex-col sm:flex-row-reverse "
                        >
                            <div className="w-full md:w-1/3 p-4 flex justify-center items-center">
                                {/* <img loading="lazy" src={project?.url} className="w-full h-auto max-w-[250px] max-h-[250px] rounded-xl object-contain" /> */}
                                <p>{projects.imgName}</p>
                                <ImageChecker errValue="can't find Img" imageClass="w-full h-auto max-w-[250px] max-h-[250px] rounded-xl object-cover" imageName={project.imgName} pClass=""/>
                            </div>
                            <div className="w-full md:w-2/3 text-gray-600 leading-relaxed p-6 grid place-items-center  overflow-y-auto space-y-6 ">
                                <div className={`flex ${project?.gitHubLink ? 'justify-between' : 'justify-center md:justify-start'} w-full text-primary font-bold`}>
                                    <span>{project?.title}</span>
                                    {project?.gitHubLink && <a href={project.gitHubLink} target="_blank"><FaGithub className="h-7 w-7" /> </a>}
                                </div>
                                {Array.isArray(project.tech) && <div className="text-primary font-bold w-full max-h-32 overflow-auto bg-gray-100/70 p-2 rounded-lg">
                                    {project.tech.join(" | ")}
                                </div>}
                                {project.description.replace(/\\n/g, '\n').
                                    split('\n').map((line, index) => (
                                        <span key={index}>
                                            {line}
                                            <br />
                                        </span>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


export default Projects;