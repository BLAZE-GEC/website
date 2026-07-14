// Single source of truth for "Ongoing / Upcoming" projects.
// Used by BOTH the Projects listing page (UpcomingProjects.jsx)
// AND the project detail page (Projects/[id]/page.jsx).
// Editing a project here updates it everywhere — no more duplicate lists.

const projects = [
  {
    id: 13,
    img: "/assests/talker1.jpeg",
    title: "Speech Aid Device - Phase 1",
    des: "A speech aid device prototype developed for assisting individuals with speech impairments.",
  },
  {
    id: 12,
    img: "/assests/supertalker.jpeg",
    title: "Super Talker: Speech Aid Device for the Differently Abled",
    des: `The Super Talker is an innovative solution designed to assist differently abled individuals with
communication challenges. This device is an 8-channel audio playback system, enabling users
to record and playback audio directly on the device. By incorporating user-friendly features,
including a feather touch mechanism for seamless audio playback, the project aims to create an
intuitive tool for those who face difficulties in verbal communication.

**Purpose & Impact:**

**Purpose**: The primary purpose of this project is to empower individuals with speech
disabilities, enabling them to communicate effectively with their surroundings.

**Impact**: By offering a portable, user-centric solution, this device can significantly improve
the quality of life for the differently abled, in collaboration with the National Institute of
Physical Medicine and Rehabilitation.

**Current Progress Stage:** Development — the team has finalized the conceptual design and is
currently working on the circuitry and firmware for the 8-channel audio playback mechanism.

**Supporters:** Financial support and technical guidance from alumni of Government Engineering
College Thrissur.`,
  },
  {
    id: 11,
    img: "/assests/fertilizer1.jpeg",
    title: "Multi Functional Eco-Friendly Fertilizer",
    des: `This project addresses poultry feather waste management and the environmental impact of
synthetic fertilizers by developing a Multifunctional Eco-Friendly Fertilizer (MEF) from chicken
feathers, using microwave-alkali hydrolysis to break down keratin into bioavailable peptides and
amino acids.

The MEF integrates hydrolyzed feather keratin with essential nutrients, using a dual-layer coating
for controlled nutrient release and improved soil moisture retention — acting as a biostimulant
while reducing reliance on synthetic chemicals.

**Current status:** In the formulation development stage.

**Project Head:** Anjana Sunilkumar
**Project Mentor:** Prof. Shyja
**Funded by:** Dr. Nishant Gopinath`,
  },
  {
    id: 9,
    img: "/assests/robowar2.png",
    title: "Gaming Bots",
    des: `Robowar is an exciting event where two robots battle each other in an arena, scoring points
based on performance and tactics. Bots vary by weight, control type (wired/wireless), size,
circuit complexity, and arena specs.

**Current Developments:** Five bot types are under development — Wired Bot, 200g Bot, Line
Follower Bot, Robosoccer Bot, and 8kg Battle Bot.

**Current Stage:** Line Follower Bot and 200g Bot are complete; the rest are in design/manufacturing.

**Impact:** These designs can evolve into practical machines — fire extinguishing robots, floor
cleaning robots, and other automated assistive technology.

Interested in collaborating? Reach out: redpheonix24052000@gmail.com / rishikesan314@gmail.com`,
  },
  {
    id: 8,
    img: "/assests/firerc.jpg",
    title: "RC Fire Fighting Bot",
    des: `An RC-controlled device designed for domestic firefighting use, to prevent initial fires and
minimize exposure risk. Equipped with thermal sensors, moisture sensors, and a thermal-resistant
camera to detect fire hazards, with a 360° water supply system for rapid suppression.

**Purpose & Impact:** Helps save lives and property, reducing risk to firefighters and emergency
responders, with user-friendly operation for household use.

**Current status:** Research and development on materials (design stage).

**Mentor:** Prof. Samil, Dept. of Production Engineering, GEC Thrissur
**Project Head:** Nandana Das
**Circuit Head:** Nibin Bin Ubaid
**Design Head:** Karthik Sathyanath`,
  },
  {
    id: 7,
    img: "/assests/hycanth2.jpeg",
    title: "Water Hyacinth Project",
    des: `Water hyacinths (Eichhornia crassipes) are an invasive aquatic plant that can be repurposed to
produce paper — a sustainable, low-cost, renewable alternative that also helps control an invasive
species harming aquatic ecosystems.

**Current status:** Design and research phase — testing solar dryer types and extraction methods,
with plans to test additives that improve material properties.

**Project Heads:** Akhil Roy, Amalchandran
**Mentor:** Dr. L Rekha`,
  },
  {
    id: 6,
    img: "/assests/greenink.jpg", // fixed: file is lowercase "greenink.jpg" — the capitalized version breaks on Vercel
    title: "Green Bio Ink",
    des: `This project explores using processed, powdered waste animal bones as a composite material for
3D printing — refining bone particles into a suitable polymer matrix to create a sustainable,
bio-based printing material with potential biomedical, architectural, and artistic applications.

**Purpose & Impact:** Advanced waste-sorting technology, sustainability in healthcare, and
community-driven impact.

For inquiries: rishikesan314@gmail.com / naveenpsuresh39@gmail.com`,
  },
  {
    id: 5,
    img: "/assests/jetengine.jpg",
    title: "Jet Engine Simulation",
    des: `A mini turbofan engine designed for use in a mini Unmanned Aerial Vehicle, aiming to build a
functional jet engine at minimal cost compared to typical commercial options.

**Current Progress:** Combustor basic design complete (some new challenges under discussion);
turbine and compressor designs ongoing; materials team researching heat-resistant materials.

**Supporters:** Currently searching for supporters and collaborators.`,
  },
  {
    id: 3,
    img: "/assests/hycnth.jpeg",
    title: "Celestial Rover",
    des: `**Aim:** Develop an autonomous rover capable of navigating extraterrestrial terrains while
performing scientific tasks — image capture, sample collection, and soil analysis.

**Phase 1:** Robust suspension system for diverse terrains, autonomous navigation, robotic arm
design, and integration of scientific instruments. Key challenges: terrain mapping without GPS
and atmospheric hazard detection.

**Phase 2:** Adds a drone for surface mapping/reconnaissance and a charging environment for
extended operations — including airfoil design for low-pressure atmospheres and a magnetic
charging system.

**Sponsor:** Nishanth Gopinathan
**Project Head:** Naveen P Suresh
**Current Status:** Design of the basic rover technology demonstrator completed; fabrication of some parts in progress, final assembly ~75% completed`,
  },
];

export default projects;