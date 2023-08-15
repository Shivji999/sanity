import { Project } from "@/types/Project";
import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
    params: { project: string }
};


export default async function Project({ params }: Props) {
    const slug = params.project;

    const project = await getProject(slug);

    return <div className="max-w-3xl mx-auto py-10 md:py-20">
        <header className="grid grid-cols-1 md:grid-cols-1 items-center gap-8">
            <div className="md:col-span-1">
                <h1 className="text-1xl md:text-5xl font-bold tracking-tighter font-serif bg-gradient-to-r from-cyan-500 to-blue-500  bg-clip-text text-transparent">

                    {project.name}
                </h1>
            </div>
            <div className="md:col-span-1 flex justify-center md:justify-start">
                <a
                    href={project.url}
                    title="View Project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 md:px-8 py-3 md:py-4 text-white font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 hover:rotate-2 transition-transform transition-all duration-300 ease-in-out"
                >
                    View Project
                </a>
            </div>
        </header>

        <div className="text-lg text-gray-500 mt-5">
            <PortableText value={project.content} />

        </div>
<Image className="mt-4 border-2 border-gray-700 object-cover rounded-xl"  src={project.image} width={1920} height={1080} alt="project image" />
    
    </div>



}

