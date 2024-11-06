"use client";
import { motion } from "framer-motion";
import { useState, useLayoutEffect } from "react";

const Skill = ({ name, x, y }: { name: string; x: string; y: string }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-white text-black px-5 py-5 cursor-pointer shadow-lg absolute skill"
      whileHover={{ scale: 2.05 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y }}
      transition={{ duration: 4.1 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  const [positions, setPositions] = useState<any[]>([]);

  // Use useLayoutEffect to ensure positions are calculated after layout
  // useLayoutEffect(() => {
  //   setTimeout(() => {
  //     const elements = document.querySelectorAll(".skill");
  //     const pos: any[] = [];
  //     elements.forEach((el: any) => {
  //       const rect = el.getBoundingClientRect();
  //       pos.push({ x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 });
  //     });
  //     setPositions(pos);
  //   }, 100); // Added delay to ensure elements are rendered
  // }, []); // Only run once on initial mount

  return (
    <div className="bg-black min-h-screen">
      <h2 className="text-white font-bold text-8xl mb-8 w-full flex items-center justify-center">
        Skills
      </h2>

      <div className="!bg-black relative w-full h-[100vh] flex items-center justify-center rounded-full bg-transparent">
        {/* Web skill positioned at the center */}
        {/* <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-white text-black p-5 cursor-pointer shadow-lg"
          whileHover={{ scale: 2.05 }}
        >
          Web
        </motion.div> */}

        {/* SVG Lines for galaxy effect */}
        {/* {positions.length > 10 && (
          <svg className="absolute inset-0 w-full h-full z-0">
            {positions.map((pos, idx) => {
              return positions
                .filter((_, i) => i > idx)
                .map((nextPos, nextIdx) => (
                  <line
                    key={`line-${idx}-${nextIdx}`}
                    x1={pos.x}
                    y1={pos.y}
                    x2={nextPos.x}
                    y2={nextPos.y}
                    stroke="white"
                    strokeWidth="5"  // Increased stroke width to make lines thicker
                    strokeLinecap="round"
                    className="line-animation"
                  />
                ));
            })}
          </svg>
        )} */}

        {/* Individual Skills - Keeping the same positions */}
        {/* <Skill name="CSS" x="6vw" y="-15vw" />
        <Skill name="HTML" x="-36vw" y="14vw" />
        <Skill name="JS" x="-43vw" y="0vw" />
        <Skill name="TS" x="7vw" y="14vw" />
        <Skill name="REACT.JS" x="29vw" y="-13vw" />
        <Skill name="Tailwind CSS" x="33vw" y="11vw" />
        <Skill name="NEXT.JS" x="-17vw" y="-16vw" /> */}
      </div>
    </div>
  );
};

export default Skills;
