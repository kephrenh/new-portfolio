"use client";
import { ProjectCard } from "@/components/project-card";
import { WorkType } from "@/models/work.model";
import { getProjects } from "@/queries";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const ProjectsPage = () => {
  const queryClient = useQueryClient();
  queryClient.invalidateQueries({ queryKey: ["projects"] });

  const query = useQuery({ queryKey: ["projects"], queryFn: getProjects });

  const { isLoading, isError, isSuccess, error, data: projects } = query;

  return (
    <section id="projets" className="w-full mx-auto py-32 p-4 min-h-[80vh]">
      <div className="max-w-[1240px] mx-auto px-2">
        <h1 className="tracking-widest uppercase text-[#5651e5]">Projets</h1>
        <h2 className="py-4">Mes projets récents</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mx-auto mt-16">
          {isLoading && <p>Chargement...</p>}

          {isError && (
            <p className="text-red-600">
              {"Une erreur s'est produite"}: {error?.message}
            </p>
          )}

          {isSuccess && (
            <>
              {projects.map((project: WorkType) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};
export default ProjectsPage;
