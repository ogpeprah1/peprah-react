import React from "react";
import ServiceCard from "../components/service-component";

function Home() {
  const services = [
    {
      title: "Web Design",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta minus atque voluptatibus numquam asperiores ducimus sed veritatisnobis",
    },
    {
      title: "Graphic Design",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta minus atque voluptatibus numquam asperiores ducimus sed veritatisnobis",
    },
    {
      title: "Data Analytics",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta minus atque voluptatibus numquam asperiores ducimus sed veritatisnobis",
    },
    {
      title: "Data Analytics",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta minus atque voluptatibus numquam asperiores ducimus sed veritatisnobis",
    },
  ];

  return (
    <React.Fragment>
      {/*Home Section */}
      <div className="w-[100%] h-[90vh] bg-[#202124] text-white p-[7em]">
        <img src="" alt="" />
        <div className=" w-[50%] h-full">
          <h1 className="text-3xl home-head-text">Hello i am</h1>
          <h1 className="text-[5em] font-bold">Peprah</h1>
          <p className="text-gray-300">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            minus atque voluptatibus numquam asperiores ducimus sed veritatis
            nobis voluptatum voluptates
          </p>
          <div className="bg-green-400 py-2 px-4 mt-[30px]">
            icons over here
          </div>
        </div>

        {/*Navbar */}
        <ul className="flex gap-6 bg-red-500 px-4 py-3 float-right top-[50px] right-[50px] rounded-md fixed">
          <a href=".home-head-text">Home</a>
          <a href=".about-head-text">About</a>
          <a href=".services-head-text">Services</a>
          <a href=".portfolio-head-text">Porfolio</a>
          <a href=".portfolio-head-text">Contact</a>
        </ul>
      </div>

      {/* About Section */}
      <div className=" w-[100%] bg-[#111112] text-white p-[7em] flex gap-10">
        <div className=" w-[50%] h-full">
          <h1 className="text-5xl about-head-text">About Me</h1>
          <br />
          <h1 className="text-[1.5em]">I am a , Godfred Peprah Owusu</h1>
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
          >
            Download CV
          </a>
        </div>
        <div className="bg-green-400 w-[50%] h-[full]"></div>
      </div>

      {/*Services Section */}
      <div className=" w-[100%] bg-[#202124] text-white p-[7em] flex flex-col justify-center items-center gap-10">
        <div className=" h-full">
          <h1 className="services-head-text text-5xl  text-center border-red-300  border-b-2 p-4 w-fit">
            Services
          </h1>
        </div>
        <div className="flex gap-10 justify-center flex-wrap">
          {services.map((service) => (
            <ServiceCard
              title={service.title}
              key={service.id}
              description={service.description}
            />
          ))}
        </div>
      </div>

      {/*Portfolio Section */}
      <div className=" w-[100%] bg-[#111112] text-white p-[7em] flex flex-col justify-center items-center gap-10">
        <div className=" h-full">
          <h1 className="portfolio-head-text text-5xl  text-center border-red-300  border-b-2 p-4 w-fit">
            My Skills and Tools
          </h1>
        </div>
        <div className="flex gap-10 justify-center flex-wrap"></div>
      </div>
    </React.Fragment>
  );
}

export default Home;
