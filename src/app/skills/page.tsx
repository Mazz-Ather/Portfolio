"use client";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const Skill = ({ name, x, y }: { name: string; x: string; y: string }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-black text-white px-5 
     py-5 cursor-pointer shadow-gray-600 absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y }}
      transition={{ duration: 4.1 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <div className="!bg-gray-500 text-red-500">
        <Navbar />
      </div>
      <h2 className="!bg-white font-bold text-8xl -mb-4 w-full flex items-center justify-center text-black ">
        Skills
      </h2>
      <div className="!bg-white">
        <div className=" w-full h-[85vh] relative flex items-center justify-center rounded-full bg-circularLight -mb-1">
          {/* Additional content */}
          <motion.div
            className="flex items-center justify-center rounded-full font-semibold bg-black text-white p-5 cursor-pointer shadow-gray-600"
            whileHover={{ scale: 1.05 }}
          >
            Web
          </motion.div>
          <Skill name="CSS" x="6vw" y="-15vw" />
          <Skill name="HTML" x="-36vw" y="14vw" />
          <Skill name="JS" x="-43vw" y="-0vw" />
          <Skill name="TS" x="7vw" y="14vw" />
          <Skill name="REACT.JS" x="29vw" y="-13vw" />
          <Skill name="Tailwind CSS" x="33vw" y="11vw" />
          <Skill name="NEXT.JS" x="-17vw" y="-16vw" />
          {/* <Skill name='NEXT.JS' x='-28vw' y='-17vw'/> */}
          {/* <Skill name='NEXT.JS' x='-28vw' y='-17vw'/> */}
        </div>
      </div>
    </>
  );
};

export default Skills;
