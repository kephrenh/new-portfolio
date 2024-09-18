import { Badge } from "@/components/ui/badge";
import { projectsData } from "@/lib/data/data";
import Image from "next/image";

const ProjectsPage = () => {
  return (
    <section id="projets" className="w-full mx-auto py-32 p-4 min-h-[80vh]">
      <div className="max-w-[1240px] mx-auto px-2">
        <h1 className="tracking-widest uppercase text-[#5651e5]">Projets</h1>
        <h2 className="py-4">Mes projets récents</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mx-auto mt-16">
          {/* <ProjectCardVer1 projects={projects} /> */}

          {projectsData.map((project) => (
            <article
              key={project.title}
              className="grid grid-cols-1 bg-white group rounded-md shadow-md shadow-gray-300 hover:shadow-lg hover:shadow-gray-500 transition-shadow duration-300">
              <div className="p-6">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  width={300}
                  height={200}
                  className=" w-full mx-auto max-w-[30rem] rounded-lg"
                />
              </div>
              <section className="flex flex-col gap-4 px-4 pb-8 rounded-b-xl">
                <div className="">
                  <h3 className="text-2xl font-bold text-[#222]">{project.title}</h3>
                  <p className="text-sm text-[#888]">{project.description}</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 rounded-b-lg">
                  {project.stack.map((tech) => (
                    <Badge
                      variant="custom"
                      key={tech}
                      className="min-w-fit flex justify-center items-center">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </section>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectsPage;
