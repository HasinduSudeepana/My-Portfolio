import React from "react";
import hireMe from "../assets/images/hireMe.png";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Education</span>
        </h3>
        {/* <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p> */}
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl  mx-auto min-h-[auto] mt-24 flex gap-6 lg:flex-col flex-row-reverse items-left">
        <div >
          <h2 className="text-2xl font-semibold">
            Bachelor Degree
          </h2>
          <p className="ml-5 text-justify max-w-lg text-xl mt-4 text-gray-200 leading-6">
            Univercity of colombo school of computing
          </p>
        </div>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl  mx-auto min-h-[auto] mt-24 flex gap-6 lg:flex-col flex-row-reverse items-left">
        <div>
            <h2 className="text-2xl font-semibold">
              Schools
            </h2>
            <p className="ml-5 text-justify max-w-lg text-xl mt-4 text-gray-200 leading-6">
              D.S Senanayake College Colombo 07
            </p>
          <p className="ml-5 text-justify max-w-lg text-xl mt-4 text-gray-200 leading-6">
            Boys' School Malabe
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
