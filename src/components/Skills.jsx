import React from "react";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { SiMysql } from "react-icons/si"
import { SiTailwindcss } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Skills = () => {
  return (
    <>
      <div class="container mx-auto mt-0 bg-slate-">
        <h1 className="text-center text-3xl font bold p-10">Skills</h1>
        <div className="flex justify-between pt-5 pb-10">
          <IoLogoJavascript size="50px" />
          <SiTypescript size="50px" />
          <FaReact size="50px"/>
          <TbBrandNextjs size="50px" />
          <SiRedux size="50px"/>
          <SiMysql size="50px"/>
          <SiTailwindcss size="50px" />
          <FaDocker size="50px" />
          <IoLogoGithub size="50px" />

        </div>
      </div>
    </>
  );
};

export default Skills;
