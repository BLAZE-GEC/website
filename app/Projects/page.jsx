'use client'
import CompletedProjects from "./CompletedProjects"
import { motion } from "framer-motion"
import { Tabs,TabsContent,TabsTrigger,TabsList } from "@/components/ui/tabs"
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@radix-ui/react-tooltip"
import UpcomingProjects from "./UpcomingProjects"
import ProjectCall from "./ProjectCall"



const Projects = () => {
  return (
    <motion.div initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },}} className="min-h-[80vh] flex items-center justify-center md:py-12 py-6  xl:py-0">
<div className="  flex w-full ">
<div className="mx-auto text-center ">
<Tabs defaultValue="upcomingprojects"   className="gap-[10px]">
    <TabsList className="mx-auto" >
      <TabsTrigger value="upcomingprojects">Upcoming Projects</TabsTrigger>
      <TabsTrigger value="projectcall">Project Call</TabsTrigger>
      <TabsTrigger value="completedprojects">Completed Projects</TabsTrigger>
      
    </TabsList>

    <TabsContent className="w-full" value="completedprojects">
      <CompletedProjects/>
    </TabsContent>
    <TabsContent className="w-full" value="projectcall">
      <ProjectCall/>
    </TabsContent>
    <TabsContent className="w-full" value="upcomingprojects">
    <UpcomingProjects/>
    </TabsContent>
  </Tabs>
</div>
</div>
    </motion.div>
  )
}

export default Projects