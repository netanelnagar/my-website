import { useEffect, useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { useAppContext } from "./context/context";
import { storage } from "@/lib/firebase";


async function getUrl(imgName: string): Promise<string> {
    const storageRef = ref(storage, imgName);
    return await getDownloadURL(storageRef);
}


const Projects = () => {
    const { data, isLoading } = useAppContext();
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        document.title = "Projects";
    }, []);

    useEffect(() => {
        if (data) {
            data.projects.forEach(async (cell) => {
                if (cell.imgName) {
                    const url = await getUrl(cell.imgName);
                    setExperiences((prev) => [...prev, { ...cell, url }]);
                }else{
                    setExperiences((prev) => [...prev, { ...cell }]);
                }
            });
        }
    }, [data]);


    if (!experiences.length) return <div className="loader m-auto h-6 w-6 "></div>;

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
                            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border flex flex-col sm:flex-row-reverse gap-4"
                        >
                            <img src={experience.url} alt="" className="max-h-[300px] w-full sm:w-[400px] m-auto rounded-t-xl  sm:rounded-xl sm:pr-5 sm:p-2" />
                            <p className="text-gray-600 leading-relaxed p-6 grid place-items-center max-h-52 md:max-h-72 overflow-y-auto">
                                {experience.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


export default Projects;