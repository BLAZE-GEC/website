import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import projects from "./projectsData"; // Import project data

const CompletedProjects = () => {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-[80vh] w-screen flex flex-col justify-center xl:px-0">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-primary"></h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link key={project.id} href={`/Projects/${project.id}`} passHref>
              <motion.div className="cursor-pointer bg-[#f5f5f5] border border-primary rounded-lg shadow-lg overflow-hidden transition-all transform hover:scale-105 p-4" whileHover={{ scale: 1.05 }}>
                <div className="relative w-full h-56 flex justify-center items-center">
                  <Image src={project.img} layout="fill" objectFit="cover" className="rounded-lg" alt={project.title} />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-extrabold text-primary">{project.title}</h3>
                  <p className="text-base font-medium text-base1 mt-2">{project.des}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CompletedProjects;
