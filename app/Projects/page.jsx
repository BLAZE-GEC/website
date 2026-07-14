'use client'
import CompletedProjects from "./CompletedProjects"
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs"
import UpcomingProjects from "./UpcomingProjects"
import ProjectCall from "./ProjectCall"

const Projects = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center md:py-12 py-6 xl:py-0">
      <div className="flex w-full">
        <div className="mx-auto text-center">
          <Tabs defaultValue="upcomingprojects" className="gap-[10px]">
            <TabsList className="mx-auto">
              <TabsTrigger value="upcomingprojects">Ongoing Projects</TabsTrigger>
              <TabsTrigger value="completedprojects">Completed Projects</TabsTrigger>
            </TabsList>

            {/* "Got an Idea" CTA Button */}
            <div className="mt-6 mb-8 flex justify-center">
              <button
                onClick={() => window.open("https://wa.me/919846851957?text=I%20got%20an%20Idea%20new%20Project%20Idea%20(Ideator)", "_blank")}
                className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg active:scale-95 transition-all duration-200 text-sm tracking-wide flex items-center gap-2"
              >
                💡 Got an Idea?
              </button>
            </div>

            <TabsContent className="w-full" value="completedprojects">
              <CompletedProjects />
            </TabsContent>
            <TabsContent className="w-full" value="projectcall">
              <ProjectCall />
            </TabsContent>
            <TabsContent className="w-full" value="upcomingprojects">
              <UpcomingProjects />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Projects