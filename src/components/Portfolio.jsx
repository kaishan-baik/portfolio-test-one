import React from "react";
import typingTest from "../assets/portfolio/typingTest.png";
import jsCalculator from "../assets/portfolio/jsCalculator.png";
import note from "../assets/portfolio/note.png";
import janken from "../assets/portfolio/janken.png";
import qrifyMe from "../assets/portfolio/qrifyMe.png";
import weather360 from "../assets/portfolio/weather360.png";

const Portfolio = () => {
  const projects = [
    {
      id: 201,
      src: typingTest,
      name: "KeySprint - TS",
      desc: "This is a typing speed & accuracy test app that was build via TypeScript and React. This is also my first attempt with using TypeScript.",
      codeUrl: "https://github.com/kaishan-baik/ts-typing-test",
      demoUrl: "https://ts-typing-test.netlify.app/",
    },

    {
      id: 202,
      src: weather360,
      name: "Weather 360",
      desc: "This project is a weather forecast app that was created using mainly React and Tailwind CSS. This app fetches the data from the OpenWeatherMap API and displays the current weather for each location, including the forecast weather details.",
      codeUrl: "https://github.com/kaishan-baik/weather-forecast",
      demoUrl: "https://weather360-forecast-app.netlify.app/",
    },

    {
      id: 203,
      src: qrifyMe,
      name: "QRify-Me",
      desc: "This is a QR code generator created using mainly React. You can feed it with any link that you want and it can create a working QR code for you!",
      codeUrl: "https://github.com/kaishan-baik/react-qr-generator",
      demoUrl: "https://qrify-me.netlify.app",
    },
    {
      id: 204,
      src: jsCalculator,
      name: "GottaCalcThemAll",
      desc: "This is a Javascript Calculator with the theme that was inspired by Great Wave of Kanagawa",
      codeUrl: "https://github.com/kaishan-baik/js-calculator-app",
      demoUrl: "https://poke-calculator-app.netlify.app/",
    },
    {
      id: 205,
      src: note,
      name: "MemoMe",
      desc: "This is a mini note app project that was created via JavaScript and React. It is a simple note app to test my Javascript and React skills.",
      codeUrl: "https://github.com/kaishan-baik/mini-note-app",
      demoUrl: "https://mini-note-app.netlify.app/",
    },
    {
      id: 206,
      src: janken,
      name: "Janken!",
      desc: "This is a simple Rock-Paper-Scissors App that was created using the knowledge of HTML, CSS, JavaScript. This was one of the first few projects that I've created.",
      codeUrl: "https://github.com/kaishan-baik/janken",
      demoUrl: "https://rock-paper-scissors-janken.netlify.app/",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-5">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 capitalize ">
            projects
          </p>
          <p className="py-5 text-xl">Check out some of my work right here!</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {projects.map(({ id, src, desc, name, codeUrl, demoUrl }) => (
            <div
              key={id}
              className="shadow-xl shadow-gray-600 rounded-lg overflow-hidden  "
            >
              <div className="overflow-hidden">
                <img
                  src={src}
                  alt="project-pic"
                  className="rounded-md h-40 w-full hover:scale-110 object-fill duration-300 "
                />
              </div>
              <div className="flex items-center justify-start text-xl pl-2 font-bold mt-2">
                {name}
              </div>
              <div className="px-2 text-xs py-1 overflow-scroll h-8 ">
                <p>{desc}</p>
              </div>
              <div className="flex items-center justify-center overflow-hidden font-semibold">
                <a
                  href={codeUrl}
                  className="w-1/2 px-6 py-2 m-3 rounded-md bg-blue-600 duration-200 hover:scale-110 text-center"
                >
                  Code
                </a>
                <a
                  href={demoUrl}
                  className="w-1/2 px-6 py-2 m-3 text-center rounded-md bg-cyan-500 duration-200 hover:scale-110 "
                >
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
