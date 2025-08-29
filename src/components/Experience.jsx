import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import javascript from "../assets/javascript.png";
import mysql from "../assets/mysql.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import node from "../assets/node.png";


function Experience() {
  const cardItem = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: javascript, name: "JavaScript" },
    { id: 4, logo: react, name: "React" },
    { id: 5, logo: node, name: "Node.js" },
    { id: 6, logo: express, name: "Express" },
    { id: 7, logo: mongodb, name: "MongoDB" },
    { id: 8, logo: mysql, name: "MySQL" }
  ];

  return (
    <section
      name="Experience"
      className="max-w-screen-2xl container mx-auto p-5 md:px-20 md:pb-18 bg-gradient-to-b from-[#111132] to-[#0c0c1d] text-[#d3d3d3]"
    >
      {/* Title */}
      <h2 className="text-[35px] font-bold tracking-[1.75px] uppercase">
        Experience
      </h2>

      {/* Content */}
      <div className="flex flex-row justify-evenly mt-4 gap-6 flex-wrap md:flex-nowrap max-[830px]:flex-col max-[830px]:items-center">
        {/* Skills */}
        <div className="w-full md:w-[45%] flex flex-wrap justify-center gap-9">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              className="flex flex-col items-center gap-3 cursor-pointer hover:scale-110 transition duration-300"
            >
              <div className="bg-[#19376d] rounded-full flex items-center justify-center w-[120px] h-[120px]">
                <img src={logo} alt={name} className="w-[75px]" />
              </div>
              <p className="text-[25px] font-medium">{name}</p>
            </div>
          ))}
        </div>

        {/* History */}
        <ul className="w-full md:w-[45%] flex flex-col gap-10 mt-6 md:mt-0">
          {/* Project 1 */}
          <li className="flex items-center gap-4 rounded-lg p-6 bg-gradient-to-r from-[#19376d] to-transparent">
            <div>
              <h3 className="text-[21px] font-medium">
                Frontend Developer, Energize Express LLP
              </h3>
              <p className="text-[17px] font-light">Jan 2024 - Present</p>
              <ul className="mt-2 list-disc list-inside text-[15px] ml-4">
                <li>Developed responsive UI using React.js & Tailwind</li>
                <li>Worked with REST APIs</li>
                <li>Improved website performance by 30%</li>
              </ul>
            </div>
          </li>

          {/* Project 2 */}
          <li className="flex items-center gap-4 rounded-lg p-6 bg-gradient-to-r from-[#19376d] to-transparent">
            <div>
              <h3 className="text-[21px] font-medium">
                Fullstack Developer Intern, CETPA infotech
              </h3>
              <p className="text-[17px] font-light">Aug 2024 - Jan 2025</p>
              <ul className="mt-2 list-disc list-inside text-[15px] ml-4">
                <li>Developed responsive web pages with HTML, CSS, JavaScript</li>
                <li>Assisted in frontend-backend integration</li>
                {/* <li>Improved UI/UX and website functionality</li> */}
              </ul>
            </div>
          </li>

          {/* Project 3 */}
          <li className="flex items-center gap-4 rounded-lg p-6 bg-gradient-to-r from-[#19376d] to-transparent">
            <div>
              <h3 className="text-[21px] font-medium">
                SQL Developer, Vailiance technology
              </h3>
              <p className="text-[17px] font-light">Jun 2023 - Jul 2024</p>
              <ul className="mt-2 list-disc list-inside text-[15px] ml-4">
                <li>Wrote and optimized SQL queries</li>
                <li>Supported database management & reporting</li>
                {/* <li>Collaborated with senior developers to integrate SQL queries into backend systems.</li> */}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;

