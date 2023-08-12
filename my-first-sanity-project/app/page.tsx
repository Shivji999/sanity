import { getProjects } from "@/sanity/sanity-utils"
// import project from "@/sanity/schemas/project-schema";


export default async function Home() {

  const projects = await getProjects();

  return (
    <div className="bg-red-600">

      {projects.map((project) => (

        <div key={project._id}> {project.name}</div>
      ))}

    </div>

  )
}



