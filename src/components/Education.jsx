import React from "react";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Education</span>
        </h3>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl  mx-auto min-h-[auto] mt-24 flex gap-6 lg:flex-col flex-row-reverse items-left">
        <div >
          <h2 className="text-2xl font-semibold">
            Bachelor Degree
          </h2>
          <p className="ml-5 text-justify max-w-lg text-xl mt-4 text-gray-200 leading-6">
            University of Colombo School of Computing
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
