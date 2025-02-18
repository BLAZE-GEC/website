"use client"; // ✅ Add this at the top

import { useParams } from "next/navigation";
import Image from "next/image";

// Example project data (this can be fetched from a database/API)
const projects = [
  { id: "13", img: "/assests/completed/speech_aid_phase1.jpg", title: "Speech Aid Device - Phase 1", des: "A speech aid device prototype developed for assisting individuals with speech impairments." },
  { id: "12", img: "/assests/completed/speech_aid_phase2.jpg", title: "Speech Aid Device - Phase 2", des: "An improved version of the speech aid device with advanced features for better communication." },
  { id: "11", img: "/assests/completed/space_rover.jpg", title: "Space Rover", des: "A rover designed to navigate space terrains and collect scientific data from various planetary surfaces." },
  { id: "10", img: "/assests/completed/keratin_extraction.jpg", title: "Keratin Extraction Project", des: "A research project focused on extracting keratin from natural sources for biomedical applications." },
  { id: "9", img: "/assests/completed/gaming_bots.jpg", title: "Gaming Bots", des: "A series of autonomous gaming robots developed for different competitive challenges." },
  { id: "8", img: "/assests/completed/rc_fire_fighting_bot.jpg", title: "RC Fire Fighting Bot", des: "A remotely controlled fire-fighting robot designed for hazardous environments." },
  { id: "7", img: "/assests/completed/water_hyacinth_project.jpg", title: "Water Hyacinth Project", des: "An environmental project aimed at controlling and repurposing invasive water hyacinth plants." },
  { id: "6", img: "/assests/completed/sajith_sir_project.jpg", title: "Sajith Sir Project", des: "A collaborative project under the guidance of Prof. Sajith, exploring new technological solutions." },
  { id: "5", img: "/assests/completed/jet_engine_simulation.jpg", title: "Jet Engine Simulation", des: "A detailed simulation of jet engine performance under various flight conditions." },
  { id: "4", img: "/assests/completed/adaptive_cruise_control.jpg", title: "Adaptive Cruise Control", des: "An AI-powered cruise control system ensuring safe and efficient driving." },
  { id: "3", img: "/assests/completed/drone_fire_detection.jpg", title: "Drone Fire Detection", des: "A drone-based fire detection system using Intel RealSense and thermal imaging." },
  { id: "2", img: "/assests/completed/roadrunner_can.jpg", title: "RoadRunner CAN Simulation", des: "A CAN bus simulation project implemented in RoadRunner for vehicle communication testing." },
  { id: "1", img: "/assests/completed/acc_jetson_nano.jpg", title: "ACC with Jetson Nano", des: "An Adaptive Cruise Control (ACC) system developed on Jetson Nano with radar and IMU integration." },
];

const ProjectDetails = () => {
  const { id } = useParams(); // ✅ Get the dynamic project ID from URL
  const project = projects.find((p) => p.id === id);

  if (!project) return <h1 className="text-center text-red-500">Project Not Found</h1>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-4">{project.title}</h1>
      <div className="relative w-full h-64">
        <Image src={project.img} layout="fill" objectFit="cover" className="rounded-lg" alt={project.title} />
      </div>
      <p className="mt-4 text-lg text-gray-600">{project.des}</p>
    </div>
  );
};

export default ProjectDetails;
