import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import footwear from '../assets/footwear.png';
import coffeeshop from '../assets/coffeeshop.png';
import Todolist from '../assets/Todolist.png';

const projectDetails = [
  {
    title: "Footwear E-Commerce website",
    tools: "React.JS",
    description:
      "A responsive e-commerce website built with React.js, allowing users to browse footwear categories, view product details, add items to the cart, and manage orders. Demonstrates dynamic filtering, state management, and adaptive design for an optimized shopping experience",
    image:footwear,
    link: "https://noorjahan-786.github.io/footwear-ecommerce-website/",
    gradient: "from-white to-green-300",
  },
  {
    title: "Coffee Shop",
    tools: "HTML, CSS, and JavaScript",
    description:
    "A responsive Coffee Shop website built with HTML, CSS, and JavaScript, featuring an interactive menu, product browsing, and smooth UI animations. Demonstrates dynamic content updates, DOM manipulation, and an engaging user experience across all devices.",
    image:coffeeshop,
    link: "https://noorjahan-786.github.io/responsive-coffee-shop/",
    gradient: "from-white to-green-300",
  },
  {
    title: "To-Do-List",
    tools: "HTML, CSS, and JavaScript",
    description:
      "A responsive to-do list application built with HTML, CSS, and JavaScript, featuring dynamic task management, real-time updates, and seamless adaptability across all devices.",
    image:Todolist,
    link: "https://noorjahan-786.github.io/To-do-App/",
    gradient: "from-white to-green-900",
  },
];

function Projects() {
  return (
    <motion.section name="Projects"
      className="max-w-screen-2xl container mx-auto p-5 md:px-20 md:pb-18 bg-gradient-to-b from-[#111132] to-[#0c0c1d] text-[#d3d3d3]"
    >
    <motion.h1 className="pb-4 text-[35px] font-bold tracking-[1.75px] uppercase">
        Projects
    </motion.h1>
    <motion.div className="flex sm:flex-col flex-row items-center gap-12 w-full max-w-[1200px]">

        <motion.div className="flex gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory">
          {projectDetails.map((project, idx) => (
            <motion.div
              key={idx}
              className="relative flex-shrink-0 w-[300px] md:w-[350px] h-[400px] md:h-[450px] rounded-3xl overflow-hidden group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-b ${project.gradient} bg-blend-multiply`}
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  
                  backgroundPosition: "center",
                }}
              ></div>

              <motion.div
                className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#19193b]/90 to-transparent p-6 flex flex-row sm:flex-col justify-start gap-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                <h3 className="text-orange-500 text-xl md:text-2xl font-semibold text-center">
                  {project.title}
                </h3>
                <p className="text-gray-200 text-sm md:text-base">
                  <span className="font-light text-orange-400">{project.tools}</span>
                  <br />
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-purple-700 self-center mt-auto"
                >
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
export default Projects
