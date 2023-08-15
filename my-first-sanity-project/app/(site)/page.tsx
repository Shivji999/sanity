import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="max-w-5xl mx-auto py-20 font-taliwand">
      <h1 className="text-5xl font-extrabold text-purple-700 leading-tight animate-fadeInUp">
        🚀 Unleash Your Creative Powers<br />
        <span className="block text-blue-500">Sanity.io</span>
      </h1>
      <p className="mt-3 text-lg text-gray-600 animate-fadeIn">
        Embark on an Exciting Journey through{" "}
        <span className="text-yellow-500">Taliwand CSS</span>
      </p>
      <p className="mt-3 text-7xl text-gray-600 animate-fadeIn">
        My <span className="text-blue-500 animate-bounce">Blogs</span>
      </p>
      <div className="mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link key={project._id} href={`/projects/${project.slug}`}>
            <div className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-xl transform transition duration-300 hover:scale-105 bg-current">
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  width={250}
                  height={150}
                  className="object-cover w-full h-40 rounded-t-lg"
                />
              )}
              <div className="p-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-b-lg">
                <h2 className="text-white font-bold text-2xl md:text-xl lg:text-2xl xl:text-sm font-sans hover:font-serif">
                  {project.name}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
