"use client"; // Required for Next.js

import { useParams } from "next/navigation";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import projects from "../ProjectsData"; // Shared data — same list used by the Projects page

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => String(p.id) === String(id));

  if (!project) return <h1 className="text-center text-red-500">Project Not Found</h1>;

  // Slightly smaller image for a couple of projects with tall/narrow source photos
  const imgWidth = id === "7" ? 500 : 800;
  const imgHeight = id === "7" ? 300 : 500;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-4">{project.title}</h1>

      <div className="flex justify-center">
        <Image
          src={project.img}
          width={imgWidth}
          height={imgHeight}
          style={{ objectFit: "cover" }}
          className="rounded-lg"
          alt={project.title}
        />
      </div>
      <div className="mt-4 text-lg text-gray-600 prose prose-lg text-justify">
        <ReactMarkdown>{project.des}</ReactMarkdown>
      </div>
    </div>
  );
};

export default ProjectDetails;