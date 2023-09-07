import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500 ">
            About
          </p>
        </div>
        <div>
          <p className="text-xl mt-10">
            Hi, I'm Baik, a versatile professional who transitioned from the
            world of civil engineering to become a passionate front-end web
            developer in March 2023. With a solid foundation in problem-solving
            and an eye for detail, I bring a unique perspective to crafting
            visually appealing and user-friendly digital experiences.
          </p>
          <br />
          <p className="text-xl">
            Whether it's crafting intuitive user interfaces, optimizing website
            performance, or staying up-to-date with the ever-evolving web
            technologies, I'm committed to delivering exceptional digital
            solutions that make a positive impact. I'm excited to contribute my
            diverse skills to create meaningful online experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
