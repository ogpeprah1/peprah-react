import React, { useState } from "react";
import ServiceCard from "../components/service-component";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import ProgressBar from "../components/progress-bar";

function Home() {
  const services = [
    {
      title: "Web Design",
      description:
        "Lorem, ipsum dolor sit amet uptatibus numquam asperiores ducimus sed veritatisnobis",
    },
    {
      title: "Graphic Design",
      description:
        "Lorem, ipsum dolor sit amet uptatibus numquam asperiores ducimus sed veritatisnobis",
    },
    {
      title: "Data Analytics",
      description:
        "Lorem, ipsum dolor sit amet uptatibus numquam asperiores ducimus sed veritatisnobis",
    },
    {
      title: "Data Analytics",
      description:
        "Lorem, ipsum dolor sit amet uptatibus numquam asperiores ducimus sed veritatisnobis",
    },
  ];

  const Links = [
    {
      name: "Home",
      link: "#header-text",
    },
    {
      name: "About",
      link: "#about-head-text",
    },
    {
      name: "Services",
      link: "#to-services-head-text",
    },
    {
      name: "Portfolio",
      link: "#skills-head-text",
    },
    {
      name: "Case Studies",
      link: "#case-head-text",
    },
    {
      name: "Contact",
      link: "/",
    },
  ];

  const Skills = [
    {
      title: "React JS",
      value: 80,
    },
    {
      title: "Laravel PHP",
      value: 60,
    },
    {
      title: "WordPress",
      value: 90,
    },
    {
      title: ".NET",
      value: 50,
    },
    {
      title: "Flutter",
      value: 70,
    },
  ];
  const [isOpen, setIsopen] = useState(false);

  return (
    <React.Fragment>
      <div className="w-full fixed top-0 left-0 bg-black">
        {/*logo */}
        <div className="md:px-[7em] py-6 px-[2em] text-white md:flex justify-between items-center bg-black">
          {/*Nav Logo */}
          <p className="font-bold">peprah.inc</p>

          {/*Menu Icon */}
          <div
            onClick={() => setIsopen(!isOpen)}
            className="w-7 absolute right-10 top-5 cursor-pointer md:hidden"
          >
            {!isOpen ? (
              <Bars3BottomLeftIcon className="" />
            ) : (
              <XMarkIcon className="" />
            )}
          </div>
          {/*nav Links */}
          <ul
            className={`md:flex md:items-center md:pb-0 pt-4 pb-4 absolute md:static z-[-1]
           md:z-auto left-0 md:w-auto md-pl-0 pl-9 transition-all bg-black w-full duration-500 ease-in ${
             isOpen ? "top-12" : "top-[-40vh]"
           }`}
          >
            {Links.map((Link) => (
              <li className="my-7 md:my-0 md:ml-8">
                <a href={Link.link}>{Link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="w-[100%] h-[full] bg-[#202124] text-white p-[2em] md:p-[7em] flex flex-col gap-10"
        id="header-text"
      >
        {/*Home Section */}
        <img src="" alt="" />
        <div className=" w-[100%] md:w-1/2 h-full mt-[10vh]">
          <h1 className="text-3xl">Hello i am</h1>
          <h1 className="text-[5em] font-bold">Peprah</h1>
          <p className="text-gray-300">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            minus atque voluptatibus numquam asperiores ducimus sed veritatis
            nobis voluptatum voluptates
          </p>
          <div className="bg-green-400 py-2 px-4 mt-[30px] flex gap-5">icons over here</div>
        </div>

        {/*Navbar */}
      </div>

      {/* About Section */}
      <div
        className="flex flex-col-reverse md:flex-row w-[100%] h-[full] bg-[#111112] text-white p-[2em] md:p-[7em] gap-10"
        id="about-head-text"
      >
        <div className=" w-[100%] h-[50%] md:w-1/2">
          <h1 className="text-2xl md:text-5xl">About Me</h1>
          <br />
          <h1 className="text-[1.2em] md:text-[1.5em]">
            I am a ,{" "}
            <span className="text-green-400">Godfred Peprah Owusu</span>
          </h1>
          <p className="text-gray-300 mt-4 mb-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            minus atque voluptatibus numquam asperiores ducimus sed veritatis
            nobis voluptatum voluptates voluptatibus numquam asperiores ducimus
            sed veritatis nobis voluptatum voluptates
          </p>
          <a
            href="file.pdf"
            download="CV"
            className="bg-green-400 py-2 px-4 rounded-md mt-4"
            id="to-services-head-text"
          >
            Download CV
          </a>
        </div>
        <div
          className="bg-black w-[100%] h-[250px] md:w-1/2 bg-[url('./assets/companylogo.png')]
         bg-no-repeat bg-auto bg-center"
        ></div>
      </div>

      {/*Services Section */}
      <div className=" w-[100%] bg-[#202124] text-white p-[1em] md:p-[7em] flex flex-col justify-center items-center gap-10">
        <div className=" h-full">
          <h1
            className="text-2xl md:text-5xl text-center border-red-300  border-b-2 p-4 w-fit"
            id="services-head-text"
          >
            Services
          </h1>
        </div>
        <div className="flex gap-5 md:10 justify-center flex-wrap">
          {services.map((service) => (
            <ServiceCard
              title={service.title}
              key={service.id}
              description={service.description}
            />
          ))}
        </div>
      </div>

      {/*Skills Section */}
      <div
        className=" w-[100%] bg-black text-white p-[1em] md:p-[7em] flex flex-col justify-center items-center gap-10"
        id="skills-head-text"
      >
        <div className="mt-[2em] h-full">
          <h1 className="text-2xl md:text-5xl text-center border-red-300  border-b-2 p-4 w-fit">
            Skills and Portfolio
          </h1>
        </div>

        <div className="flex flex-col w-full justify-center items-center ">
          {Skills.map((skill) => (
            <div className="flex flex-col md:flex-row gap-0 md:gap-2 justify-center items-center w-full md:w-[70%]">
              <p className="w-full md:w-[20%] text-red-300 text-[1.2em] font-semibold">
                {skill.title}
              </p>
              <ProgressBar completed={skill.value} />
            </div>
          ))}
        </div>

        {/* <div className="flex overflow-x-auto bg-white w-[600px] p-2 gap-2">
          <div className="w-[150px] bg-black h-12"></div>
          <div className="w-[150px] bg-black h-12"></div>
          <div className="w-[150px] bg-black h-12"></div>
          <div className="w-[150px] bg-black h-12"></div>
          <div className="w-[150px] bg-black h-12"></div>
        </div> */}
      </div>

      {/*Case Studies Section */}
      <div
        className=" w-[100%] bg-[#202124] text-white p-[1em] md:p-[7em] flex flex-col justify-center items-center gap-10"
        id="case-head-text"
      >
        <div className=" mt-[2em] h-full">
          <h1
            className="text-2xl md:text-5xl text-center border-red-300  border-b-2 p-4 w-fit"
            id="services-head-text"
          >
            Case Studies
          </h1>
        </div>

        <div className="flex gap-5 md:10 justify-center flex-wrap">
          {services.map((service) => (
            <ServiceCard
              title={service.title}
              key={service.id}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
