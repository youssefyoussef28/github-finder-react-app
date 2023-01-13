import React from "react";
import {
  FaCodepen,
  FaOctopusDeploy,
  FaStore,
  FaUser,
  FaUserFriends,
  FaUsers,
} from "react-icons/fa";

function About() {
  return (
    <div className="font-bold">
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <div className="">
        {" "}
        <div className="text-2xl mb-4 font-semibold">
          This WebApp is part of a paid course by Traversy Media "React Front to
          back 2022" on Udemy.
        </div>
      </div>

      <h2 className="text-2xl mb-4 flex items-center">
        <a className="text-blue-500" href="https://github.com/youssefyoussef28">
          {" "}
          Completed by Youssef Youssef
        </a>

        <div className="text-orange-500 pl-2">
          <FaOctopusDeploy />
        </div>
      </h2>
    </div>
  );
}

export default About;
