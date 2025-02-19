"use client"; // ✅ Required for Next.js

import { useParams } from "next/navigation";
import Image from "next/image";
import ReactMarkdown from "react-markdown"; // ✅ Import react-markdown

// Example project data (this can be fetched from a database/API)
const projects = [
  { id: "13", img: "/assests/talker1.jpeg", title: "Speech Aid Device - Phase 1", des: "A speech aid device prototype developed for assisting individuals with speech impairments." },
  { id: "2", img: "/assests/completed/speech_aid_phase2.jpg", title: "Speech Aid Device - Phase 2", des: "An improved version of the speech aid device with advanced features for better communication." },
  {
     id: "11",
      img: "/assests/fertilizer1.jpeg",
       title: "MULTI FUNCTIONAL ECO-FRIENDLY FERTILIZER  ",
        des:`
This project addresses the dual challenges of poultry feather waste management and the 
environmental impact of synthetic fertilizers by developing a Multifunctional Eco-Friendly 
Fertilizer (MEF) from chicken feathers. Chicken feathers, a significant byproduct of the poultry 
industry, are rich in keratin, a protein resistant to degradation. Current disposal methods like 
incineration and landfilling contribute to pollution and underutilize this valuable resource. This 
research utilizes microwave-alkali hydrolysis to efficiently break down keratin into bioavailable 
peptides and amino acids, creating a nutrient-rich base for the MEF. This process is more 
efficient and environmentally friendly than traditional enzymatic or acid hydrolysis methods, 
preserving essential amino acids and minimizing waste. 


&nbsp;&nbsp;\n\n
The MEF is formulated by integrating hydrolyzed feather keratin with essential macro- and 
micronutrients, incorporating a dual-layer coating for controlled nutrient release and improved 
soil moisture retention. This controlled-release mechanism enhances fertilizer efficiency, 
reduces nutrient runoff, and promotes sustainable nutrient cycling. Unlike conventional 
fertilizers, MEF acts as a biostimulant, improving plant growth and soil health while minimizing 
reliance on synthetic chemicals. 

&nbsp;&nbsp;\n\n
The project encompasses research, formulation, and field trials to optimize MEF performance. 
Physicochemical properties of the keratin hydrolysate are characterized, nutrient release 
kinetics are evaluated, and plant growth responses are assessed. Greenhouse and field trials 
compare MEF performance against commercial fertilizers, measuring parameters like nitrogen 
use efficiency, crop yield, and soil health indicators. The impact on soil microbial diversity and 
enzymatic activity is also investigated.  \n\n
The MEF offers significant socio-economic benefits, including reduced input costs for farmers, 
sustainable waste management for the poultry industry, and a reduced environmental footprint. 
It promotes a circular economy, creates employment opportunities, and contributes to food 
security and environmental conservation. The target beneficiaries include farmers, poultry 
industries, environmental sectors, research communities, and consumers. This project 
demonstrates the feasibility of transforming chicken feather waste into a valuable, eco-friendly 
fertilizer, offering a sustainable alternative to conventional practices and addressing the 
growing need for environmentally responsible agricultural solutions. 

&nbsp;&nbsp;\n\n
Currently we are in a developing stage regarding the formulation of this fertilizer. &nbsp;&nbsp;\n\n
Project Head: Anjana Sunilkumar \n\n
Project mentor:Prof. Shyja \n\n
Project funded by Dr. Nishant Gopinath 

&nbsp;&nbsp;&nbsp;&nbsp;\n\n
Members:\n\n
1. Gouri K S &nbsp;
2. Aswathy R &nbsp;
3. Maryam Ashraf K &nbsp;
4. Amrith &nbsp;
5. Augustine Abraham  &nbsp;
6. Gokul H &nbsp;
7. Harinanda V &nbsp;
8. Maria John Kennedy  &nbsp;
9. Purnima S &nbsp;
10. Akshay S &nbsp;
11. Maria Teresa  &nbsp;
12. Arunima K A &nbsp;
13. Sajin Kumar S S &nbsp;
14. Joe Joseph Antony  &nbsp;
15. Diya D &nbsp;
16.Anamika CS &nbsp;
17. Naveen venugopal &nbsp;` },
  
  { id: "10", img: "/assests/completed/keratin_extraction.jpg", title: "Keratin Extraction Project", des: "A research project focused on extracting keratin from natural sources for biomedical applications." },
  
  { 
    id: "9", img: "/assests/robowar2.png",
    title: "Gaming Bots",
    des: `

Robowar is an exciting event where two robots battle each other in an arena, scoring points based on performance and tactics.  

These bots can vary in several parameters such as:  
- Weight  
- Control type (wired or wireless)  
- Size
- Circuit complexity  
- Arena specifications  
&nbsp;

The Ideator team designs and builds these bots for competitive events.  

&nbsp;  
---  
&nbsp;  

### **Current Developments**  
Currently, five different types of bots are under development:  

- Wired Bot  
- 200g Bot  
- Line Follower Bot  
- Robosoccer Bot  
- 8kg Battle Bot  

&nbsp;  
---  
&nbsp;  

### **IMPACT**  
These robotic designs can be further enhanced and adapted for practical applications.  

By integrating specialized mechanisms, these bots can evolve into functional machines, such as:  
- Fire extinguishing robots  
- Floor cleaning robots  
- Other automated assistive technologies  

This initiative serves as a foundation for developing robots that can contribute to everyday life and industrial use.  

&nbsp;  
---  
&nbsp;  

### **CURRENT STAGE**  
At present, we have successfully completed the development of two bots:  

- Line Follower Bot 
- 200g Bot

The remaining bots are in various stages of design and manufacturing, with continuous improvements being made to enhance their efficiency and functionality.  

&nbsp;  
---  
&nbsp;  

### **SUPPORT & COLLABORATION**  
As of now, we lack funding support for building our bots, but we are actively looking for supporters and collaborators.  

If you're interested in supporting or collaborating, feel free to reach out:  

📧 **redpheonix24052000@gmail.com**  
📧 **rishikesan314@gmail.com**  


`

    
  },
 
  { 
    id: "8", img: "/assests/firerc.jpg",
   title: "RC Fire Fighting Bot", 
   des: `**Rc controlled fire fighting bot**\n\n\n\n
This innovative, rc  device is specifically designed for domestic use and firefighting applications to prevent initial fires and minimize exposure to fire accidents. Equipped with advanced thermal sensors, moisture sensors, and a thermal-resistant camera, it detects potential fire hazards efficiently.

Designed for versatility, the device operates effectively on non-leveled, rough terrain, ensuring comprehensive coverage. Its 360° water supply system enables rapid fire suppression.

 \n\n **Purpose and Impact** 

An RC-controlled fire extinguisher bot can help save lives and property in emergency situations. This technology reduces the risk of injury or death to firefighters and emergency responders. Key benefits include initial fire suppression, avoiding direct contact with flames, and path clearance. The bot is user-friendly, allowing household members to extinguish fires effectively. This provides a quick response to fires, minimizing damage and disruption to communities.


 \n\n **Current status** \n\n
Research and development on materials( Designing stage)


Rc controlled fire fighting bot This innovative, rc  device is specifically designed for domestic use and firefighting applications to prevent initial fires and minimize exposure to fire accidents. Equipped with advanced thermal sensors, moisture sensors, and a thermal-resistant camera, it detects potential fire hazards efficiently.

Designed for versatility, the device operates effectively on non-leveled, rough terrain, ensuring comprehensive coverage. Its 360° water supply system enables rapid fire suppression.

 
 **Mentor** \n\n
Prof Samil
Assistant Professor 
Department of Production Engineering, GEC, TCR
\n\n **Project Head**:Nandana Das\n\n
**Circut Head**:Nibin bin Ubaid\n\n
**Design Head**: Karthik sathyanath` },
 
 
 
  { 
    id: "7", 
    img: "/assests/hycanth2.jpeg", 
    title: "Water Hyacinth Project", 
    des: `
**Water Hyacinths and Solar Dryer**  
Water hyacinths (Eichhornia crassipes) are an invasive aquatic plant that can be used to produce paper.

**Sustainable and eco-friendly:** Water hyacinths are an invasive species that can harm aquatic ecosystems. Using them for paper production helps control their growth and reduces environmental harm.

**Renewable resource:** Water hyacinths are a rapidly growing plant that can be harvested in as little as 2-3 weeks.

**Low-cost raw material:** Water hyacinths are often considered a nuisance, making them a low-cost or even free raw material.

Overall, using water hyacinths for paper production offers a sustainable and innovative solution for managing invasive aquatic plants while creating a unique and eco-friendly paper product.

Currently, the project is in the design and research phase of different types of solar dryers and efficient ways of extracting water hyacinths. We are planning to add different types of additives to improve its properties. Also designing a solar dryer for even drying and to market its scope.
`

  },
  
  { 
    id: "6"
    , img: "/assests/Greenink.jpg",
     title: "Green Bio Ink",
      des: `
This project explores the innovative use of processed and powdered waste animal bones as a composite material for 3D printing. By refining bone particles and integrating them into a suitable polymer matrix, the research aims to develop a sustainable, bio-based printing material or green bio ink with potential applications in various industries, including biomedical, architectural, and artistic fields.
Purpose & Impact 

&nbsp;&nbsp;\n\n
•	Advanced Waste Sorting Technology \n\n
•	Sustainability in Healthcare \n\n
•	Community-Driven Impact \n\n

&nbsp;&nbsp;\n\n

Support & Contact\n\n
This project is funded by the provider.

&nbsp;&nbsp;\n\n

For inquiries, reach out to us at:\n\n
📧 rishikesan314@gmail.com\n\n
📧 naveenpsuresh39@gmail.com\n\n
` },
  
  { 
    id: "5", img: "/assests/jetengine.jpg", 
    title: "Jet Engine Simulation",
    des: `**Turbofan engine**,
We are making a mini turbofan engine for using in mini Unmanned Aerial Vehicle.\n\n
**Purpose and Impact**- Currently we design a mini Turbofan engine for Unmanned aerial vehicles and as jet are complex and expensive but our plan is to build it for at minimal cost 
\n\n**Current Progress**- Combustor basic design has been done, challenges are identified , solutions are yet to be decide.
Turbine and compressor designs are on going and materials team is  researching on heat resistant matetial suitable for this application
Design team is work to prepare a basic design
Combustor design have been completed but some new challenges are identified and solutions are under discussion
\n\n**Supporters**- As of now we are lacking supporters but we are actively searching for supporters.` },
  
     { id: "4", img: "/assests/completed/adaptive_cruise_control.jpg", title: "Adaptive Cruise Control", des: "An AI-powered cruise control system ensuring safe and efficient driving." },
  
  {
     id: "3", 
     img: "/assests/hycnth.jpeg", 
     title: "CELESTIAL ROVER",
     des: `**AIM :**
    The Celestial Rover Project is designed to develop an autonomous rover capable of navigating extraterrestrial terrains while performing scientific tasks such as image capture, sample collection, and soil analysis. The project is divided into two phases. In Phase 1, the focus is on building a robust suspension system for diverse terrains, programming autonomous navigation, designing a robotic arm, and integrating scientific instruments. Key challenges include developing terrain mapping software without GPS and analyzing atmospheric variations for hazard detection. Phase 2 introduces a drone to enhance surface mapping and reconnaissance, along with establishing a charging environment for extended operations. This phase also presents challenges such as designing airfoils for low-pressure atmospheres and developing a magnetic charging system. By combining robotics, AI, and scientific exploration, this project aims to advance planetary research and navigation in extreme environments. \n\n
  **SPONSOR NAME**: NISHANTH GOPINATHAN\n\n
**PROJECT HEAD**: NAVEEN P SURESH  
**CURRENT STATUS**: We have completed 80% of the rover's design and have sent several parts for 3D printing.`,
  },
  { 
    
    id: "12",
     img: "/assests/supertalker.jpeg",
      title: "Super Talker: Speech Aid Device for the Differently Abled ",
       des: `
The Super Talker is an innovative solution designed to assist differently abled individuals with 
communication challenges. This device is an 8-channel audio playback system, enabling users 
to record and playback audio directly on the device. By incorporating user-friendly features, 
including a feather touch mechanism for seamless audio playback, the project aims to create an 
intuitive tool for those who face difficulties in verbal communication. \n\n
**Purpose & Impact**: \n\n
●**Purpose**: The primary purpose of this project is to empower individuals with speech 
disabilities, enabling them to communicate effectively with their surroundings. The ability 
to record and playback custom audio phrases tailored to the user’s needs adds a layer 
of personalization and autonomy. \n\n
● **Impact**: By offering a portable, user-centric solution, this device can significantly improve 
the quality of life for the differently abled. The collaboration with the National Institute of 
Physical Medicine and Rehabilitation ensures the project aligns with real-world needs 
and provides maximum utility to its target audience. \n\n
Current Progress Stage: \n\n
● **Stage**: Development The team has finalized the conceptual design and is currently 
working on the circuitry and firmware development for the 8-channel audio playback 
mechanism. Components have been procured, and the prototype assembly is underway. \n\n
Supporters: \n\n
● **Funding**: Financial support from alumni of Government Engineering College Thrissur. \n\n
● **Alumni Contributions**: Alumni from Government Engineering College Thrissur have 
provided technical guidance and feedback during the initial stages.` 
 },
  { id: "1", img: "/assests/completed/acc_jetson_nano.jpg", title: "ACC with Jetson Nano", des: "An Adaptive Cruise Control (ACC) system developed on Jetson Nano with radar and IMU integration." },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <h1 className="text-center text-red-500">Project Not Found</h1>;

  // ✅ Set dynamic image size for ID 7
  const imgWidth = id === "7" ? 500 : 800; // Smaller width for ID 7
  const imgHeight = id === "7" ? 300 : 500; // Smaller height for ID 7

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-4">{project.title}</h1>

      {/* ✅ Apply dynamic width and height */}
      <div className="flex justify-center">
        <Image 
          src={project.img} 
          width={imgWidth} 
          height={imgHeight} 
          objectFit="cover" 
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
