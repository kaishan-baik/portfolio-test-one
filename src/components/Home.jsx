import React from "react";
import profile from "./../assets/profile.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black  via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full w-full md:w-9/10">
          <h1 className="text-4xl sm:text-6xl font-bold text-white ">
            Hi, I'm Baik Kai Shan
          </h1>
          <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400 ">
            I'm a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md ">
            Currently, I love to work on web applications using technologies
            like JavaScript, TypeScript, React and Tailwind.
          </p>
          <div>
            <Link
              to="contact"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-300 to-blue-500 font-bold uppercase cursor-pointer "
            >
              Contact me
              <span className="group-hover:rotate-90 duration-300 ">
                <MdOutlineKeyboardArrowRight size={22} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="mx-auto sm:w-3/4 md:w-2/4">
          <img
            src={profile}
            alt="profile pic"
            className="rounded-2xl mx-auto w-3/4 sm:max-w-1/2 md:w-3/4"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
