import React from "react";

const Skills = () => {
  const skills = [
    {
      logo: 'html.png',
      name: "HTML",
      count: 86,
    },
    {
      logo: 'css.png',
      name: "CSS",
      count: 86,
    },
    {
      logo: 'javascript.png',
      name: "JavaScript",
      count: 86,
    },
    {
      logo: 'react.png',
      name: "React",
      count: 75,
    },
    {
      logo: 'nodejs.png',
      name: "NodeJs",
      count: 70,
    }, 
    {
      logo: 'php.png',
      name: "PHP",
      count: 70,
    },
    {
      logo: 'c.png',
      name: "C",
      count: 80,
    },
    {
      logo: 'c++.png',
      name: "C++",
      count: 70,
    },
    {
      logo: 'java.png',
      name: "Java",
      count: 70,
    },
    {
      logo: 'spring.png',
      name: "Springboot",
      count: 60,
    },
    {
      logo: 'angular.png',
      name: "Angular",
      count: 60,
    },
    {
      logo: 'scala.png',
      name: "Scala",
      count: 75,
    },
    {
      logo: 'database.png',
      name: "SQL",
      count: 70,
    },
    {
      logo: 'postgree.png',
      name: "PostgreSQL",
      count: 70,
    },
    {
      logo: 'chakra.png',
      name: "ChakraUI",
      count: 85,
    },
  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl 	flex-wrap: wrap;"

            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  <img src={skill.logo} alt="" className="w-20 h-20 h-full object-cover" />

                </div>
              </div>
              <p className="text-xl mt-3">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
