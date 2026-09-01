// Gallery photo list, grouped by category for the filter buttons.
// All images already exist in public/assests — nothing new to upload.

const galleryPhotos = [
  { id: 1, src: "/assests/ideate.jpg", title: "Active Prototyping Space", category: "lab" },
  { id: 2, src: "/assests/ideathon.jpg", title: "Ideathon Session", category: "lab" },
  { id: 3, src: "/assests/inaugration.jpg", title: "Club Inauguration", category: "lab" },
  { id: 4, src: "/assests/3dprinting.jpeg", title: "3D Printing Facility", category: "lab" },

  { id: 5, src: "/assests/events1/dwsim.jpeg", title: "DWSIM Workshop", category: "workshops" },
  { id: 6, src: "/assests/events1/Ros.jpeg", title: "ROS Software Workshop", category: "workshops" },
  { id: 7, src: "/assests/events1/robotics.jpeg", title: "Introduction to Robotics", category: "workshops" },
  { id: 8, src: "/assests/events1/javascript.jpeg", title: "JavaScript Workshop", category: "workshops" },
  { id: 9, src: "/assests/thinkercad.jpg", title: "TinkerCad Circuit Workshop", category: "workshops" },
  { id: 10, src: "/assests/powerpoint.jpg", title: "PowerPoint Workshop", category: "workshops" },

  { id: 11, src: "/assests/completed/Bigmaclite.jpg", title: "Bigmac Lite Robot", category: "prototypes" },
  { id: 12, src: "/assests/completed/robowar.jpg", title: "Robowar Battle Bot", category: "prototypes" },
  { id: 13, src: "/assests/firerc.jpg", title: "RC Fire Fighting Bot", category: "prototypes" },
  { id: 14, src: "/assests/jetengine.jpg", title: "Jet Engine Simulation", category: "prototypes" },
  { id: 15, src: "/assests/completed/multi_purpose_robo_arm.jpeg", title: "Multi-Purpose Robo Arm", category: "prototypes" },

  // --- TEAM MEETINGS (Brand New Year first, followed by others) ---
  
  // COMBINED AUTO-SWIPING TILE (Now placed first in the team section)
  { 
    id: 16, 
    src: "/assests/events1/brand-new-year.jpg", 
    slides: [
      "/assests/events1/brand-new-year.jpg", // Frame 1: Spiderman Cover
      "/assests/freshers1.jpg",              // Frame 2
      "/assests/freshers2.jpg"               // Frame 3
    ],
    title: "Brand New Year Fresher's Event", 
    category: "team" // <- Restored the category so it shows up in the filter!
  },
  { id: 17, src: "/assests/salvete.jpg", title: "Salvete - Fresher Session", category: "team" },
  { id: 18, src: "/assests/placementpgm.jpg", title: "Coding Camp Session", category: "team" },
  { id: 19, src: "/assests/ideathon.jpg", title: "Ideathon Session", category: "team" },
];

export default galleryPhotos;