import { useEffect } from "react";

const Projects = () => {

    useEffect(() => {
        document.title = "Projects";
    },[]);
    const experiences = [
        {
           url: 'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.",
        },
        {
            url: 'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis.",
        },
    ];
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
                            <img src={experience.url} alt="" className="max-h-[200px] w-full sm:w-[400px] m-auto rounded-t-xl  sm:rounded-xl sm:pr-5"/>
                            <p className="text-gray-600 leading-relaxed p-6 grid place-items-center max-h-52 md:max-h-72 overflow-y-auto">
                                {experience.description}
                                {experience.description}
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