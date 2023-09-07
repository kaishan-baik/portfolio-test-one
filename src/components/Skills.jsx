import React from "react";
import html from "./../assets/html.png";
import css from "./../assets/css.png";
import javascript from "./../assets/javascript.png";
import reactImg from "./../assets/react.png";
import github from "./../assets/github.png";
import tailwind from "./../assets/tailwind.png";
import typescript from "./../assets/typescript.png";
import bootstrap from "./../assets/bootstrap.png";
import d3 from "./../assets/d3.png";

const Skills = () => {
  const skills = [
    {
      id: 301,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 302,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 303,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 304,
      src: reactImg,
      title: "React",
      style: "shadow-cyan-500",
    },
    {
      id: 305,
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-700",
    },
    {
      id: 306,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-cyan-700",
    },
    {
      id: 307,
      src: d3,
      title: "D3",
      style: "shadow-orange-500",
    },
    {
      id: 308,
      src: github,
      title: "Github",
      style: "shadow-gray-300",
    },
    {
      id: 309,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full md:h-screen flex items-center justify-center pt-10"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white ">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">
            Skills
          </p>
          <p className="py-5 text-xl">
            These are the tech stacks that I've worked with!
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-5 px-12 sm:px-1 h-auto">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                "shadow-lg hover:scale-110 duration-500 py-2 rounded-lg" +
                " " +
                style
              }
            >
              <img src={src} alt="skills" className="w-20 mx-auto" />
              <p className="py-3">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
