import { useEffect, useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { useAppContext } from "./context/context";
import { storage } from "@/lib/firebase";
import { FaGithub } from "react-icons/fa6";


async function getUrl(imgName: string): Promise<string> {
    const storageRef = ref(storage, imgName);
    return await getDownloadURL(storageRef);
}


const Projects = () => {
    const { data } = useAppContext();
    const [experiences, setExperiences] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        document.title = "Projects";
    }, []);

    useEffect(() => {

        async function loadUrl() {
            if (data) {
                for (const cell of data.projects) {
                    if (cell.imgName) {
                        const url = await getUrl(cell.imgName);
                        setExperiences((prev) => [...prev, { ...cell, url }]);
                    } else {
                        setExperiences((prev) => [...prev, { ...cell }]);
                    }
                }
                setIsLoading(false);
            }
        }
        loadUrl();
    }, [data]);


    if (!experiences.length || isLoading) return <div className="loader m-auto h-6 w-6 "></div>;

    return (
        <section className="py-24 flex-grow bg-slate-100/50">
            <div className="max-w-[800px] mx-auto px-4 md:px-8">
                <div className="flex justify-center h-24">
                    <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-center">
                        Projects
                    </h1>
                </div>
                <div className="space-y-8 mt-4">
                    {experiences.map((experience, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border flex flex-col sm:flex-row-reverse"
                        >
                            <div className="w-full md:w-1/3 p-4 flex justify-center items-center">
                                <img loading="lazy" src={experience.url} className="w-full h-auto max-w-[250px] max-h-[250px] rounded-xl object-contain" />
                            </div>
                            <div className="w-full md:w-2/3 text-gray-600 leading-relaxed p-6 grid place-items-center max-h-[450px] overflow-y-auto gap-3">
                                <div className={`flex ${experience?.gitHubLink ? 'justify-between': 'justify-center md:justify-start'} w-full text-primary font-bold`}>
                                    <span>{experience?.title}</span> 
                                    {experience?.gitHubLink && <a href={experience.gitHubLink} target="_blank"><FaGithub className="h-7 w-7"/> </a>}
                                </div>
                                {Array.isArray(experience.tech) && <div className="text-primary font-bold w-full max-h-32 overflow-auto bg-gray-100/70 p-2 rounded-lg">
                                    {experience.tech.join(" | ")}
                                </div>}
                                {experience.description.replace(/\\n/g, '\n').
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