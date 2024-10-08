import Image from "next/image";
import { Badge } from "./ui/badge";
import { CustomLink } from "./custom-link";
import { WorkType } from "@/models/work.model";

export const ProjectCard = ({ project }: { project: WorkType }) => {
  return (
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
          <div className="flex gap-4 items-center">
            <h3 className="text-2xl font-bold text-[#222]">{project.title}</h3>
            <div className="flex gap-2 items-center">
              <Badge>
                <CustomLink href={project.demo.url} text="Demo" />
              </Badge>
              <Badge>
                <CustomLink href={project.github.url} text="GitHub" />
              </Badge>
            </div>
          </div>
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
  );
};
