import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project-4.jpg";
import project5 from "../assets/images/project-5.png";
import project_person from "../assets/images/project_person1.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Volunteer Lanka",
      github_link: "https://github.com/HasinduSudeepana/bookshelf",
    },
    {
      img: project2,
      name: "Book Shelf",
      github_link: "https://github.com/HasinduSudeepana/bookshelf",
    },
    {
      img: project3,
      name: "Blog Application",
      github_link: "https://github.com/HasinduSudeepana/bookshelf",
    },
    
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl  mx-auto min-h-[auto] mt-24 flex gap-6 lg:flex-col flex-row-reverse items-left">
        <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
          <div className="lg:w-2/3 w-full">
            <Swiper
              slidesPerview={1.2}
              spaceBetween={20}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
              }}
              loop={true}
              autoplay={{
                delay: 3000,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
            >
              {projects.map((project_info, i) => (
                <SwiperSlide key={i}>
                  <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                    <img src={project_info.img} alt="" className="rounded-lg" />
                    <h3 className="text-xl my-4">{project_info.name}</h3>
                    <div className="flex gap-3">
                      <a
                        href={project_info.github_link}
                        target="_blank"
                        className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* <div className="lg:block hidden">
            <img src={project_person} alt="" />
          </div> */}
        </div>
      </div>
      
    </section>
  );
};

export default Project;

