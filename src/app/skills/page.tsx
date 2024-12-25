"use client";
import { motion } from "framer-motion";

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
     
      <h2 className="!bg-white pt-11 font-bold text-8xl mt-16 -mb-4 w-full flex items-center justify-center text-black ">
        Skills
      </h2>
      <div className="!bg-white z-0 ">
        <div className=" w-full h-[85vh] relative flex items-center justify-center rounded-full bg-circularLight -mb-1">
          {/* Additional content */}
          <motion.div
            className="flex items-center justify-center rounded-full font-semibold bg-black text-white p-5 cursor-pointer shadow-gray-600"
            whileHover={{ scale: 1.05 }}
          >
            Web
          </motion.div>
          <Skill name="CSS" x="8vw" y="-16vw" />
          <Skill name="HTML" x="-29vw" y="10vw" />
          <Skill name="JS" x="-43vw" y="-5vw" />
          <Skill name="TS" x="7vw" y="12vw" />
          <Skill name="REACT.JS" x="32vw" y="-13vw" />
          <Skill name="Tailwind CSS" x="33vw" y="12vw" />
          <Skill name="NEXT.JS" x="-22vw" y="-16vw" />
          <Skill name='Word press' x='-25vw' y='-1vw'/>
          <Skill name='web designing' x='11vw' y='-7vw'/>
          <Skill name='SEO' x='-15vw' y='17vw'/>
          <Skill name='sanity' x='-6vw' y='11vw'/>
          <Skill name='prompt engineering' x='-13vw' y='-12vw'/>
          <Skill name='Ai Chatbot' x='-32vw' y='-10vw'/>
        </div>
      </div>
    </>
  );
};

export default Skills;