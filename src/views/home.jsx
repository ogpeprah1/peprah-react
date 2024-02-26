import React, { useState, useRef } from "react";
import ServiceCard from "../components/service-component";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import ProgressBar from "../components/progress-bar";
import emailjs from "@emailjs/browser";

import AnalyticsImg from "../assets/analytics.png";
import WebDevImg from "../assets/web-development.png";
import GraphicImg from "../assets/graphics.png";
import AppImg from "../assets/development.png";

function Home() {
  const services = [
    {
      title: "Web Development",
      description:
        "Lorem, ipsum dolor sit amet uptatibus numquam asperiores ducimus sed veritatisnobis",
      img: WebDevImg,
    },
    {
      title: "Graphic Design",
      description:
        "Lorem, ipsum dolor sit amet uptatibus numquam asperiores ducimus sed veritatisnobis",
      img: GraphicImg,
    },
    {
      title: "Data Analytics",
      description:
        "Lorem, ipsum dolor sit amet uptatibus numquam asperiores ducimus sed veritatisnobis",
      img: AnalyticsImg,
    },
    {
      title: "App Development",
      description:
        "Lorem, ipsum dolor sit amet uptatibus numquam asperiores ducimus sed veritatisnobis",
      img: AppImg,
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
      link: "#contact-head-text",
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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_uriaea9", "template_esmxml7", form.current, {
        publicKey: "tbWXyHJwTsGcY_3Ki",
      })
      .then(
        (res) => {
          console.log(res.text);
          window.alert("message sent!");
          e.target.reset();
        },
        (error) => {
          console.log("failed...", error.text);
          window.alert("message did not send!");
        }
      );
  };

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
            {!isOpen ? <Bars3BottomLeftIcon /> : <XMarkIcon />}
          </div>
          {/*nav Links */}
          <ul
            className={`md:flex md:items-center md:pb-0 md:pt-0 pt-3 pb-3 absolute md:static z-[-1]
           md:z-auto left-0 md:w-auto md-pl-0 pl-9 transition-all bg-black w-full duration-500 ease-in ${
             isOpen ? "top-12" : "top-[-40vh]"
           }`}
          >
            {Links.map((Link) => (
              <li className="my-7 md:my-0 md:ml-8 hover:text-green-400 duration-500">
                <a href={Link.link} key={Link.id}>
                  {Link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="w-[100%] h-[full] bg-[#202124] text-white p-[2em] md:p-[7em] flex flex-col md:flex-row gap-10"
        id="header-text"
      >
        {/*Home Section */}
        <div className=" w-[100%] md:w-1/2 h-full mt-[10vh] ">
          <h1 className="text-3xl">Hello i am</h1>
          <h1 className="text-[5em] font-bold">Peprah</h1>
          <p className="text-gray-300">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            minus atque voluptatibus numquam asperiores ducimus sed veritatis
            nobis voluptatum voluptates
          </p>
          <div className="bg-green-400 py-2 px-4 mt-[30px] flex gap-5">
            icons over here
          </div>
        </div>
        <img
          src="../assets/ceo.png"
          alt="pic of CEO"
          className="w-[100%] md:w-1/2 mt-[10vh]"
        />
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
            I am a ,<span className="text-green-400">Godfred Peprah Owusu</span>
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
            className="text-2xl md:text-5xl text-center border-green-400  border-b-2 p-4 w-fit"
            id="services-head-text"
          >
            Services
          </h1>
        </div>
        <div className="flex gap-5 md:10 justify-center flex-wrap">
          {services.map((service) => (
            <ServiceCard
              img={service.img}
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
          <h1 className="text-2xl md:text-5xl text-center border-green-400  border-b-2 p-4 w-fit">
            Skills and Portfolio
          </h1>
        </div>

        <div className="flex flex-col w-full justify-center items-center ">
          {Skills.map((skill) => (
            <div className="flex flex-col md:flex-row gap-0 md:gap-2 justify-center items-center w-full md:w-[70%]">
              <p className="w-full md:w-[20%] text-green-400 text-[1.2em] font-semibold">
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
            className="text-2xl md:text-5xl text-center border-green-400  border-b-2 p-4 w-fit"
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
              img={service.img}
            />
          ))}
        </div>
      </div>
      {/*Contact form */}

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-[100%] bg-black text-white p-[2em] md:p-[7em] flex flex-col justify-center items-center gap-5 text-[0.9em]"
        id="contact-head-text"
      >
        <div className=" mt-[2em] h-full">
          <h1
            className="text-2xl md:text-4xl text-center border-green-400  border-b-2 w-fit "
            id="contact-head-text"
          >
            Send me a message
          </h1>
        </div>
        <input
          type="text"
          name="user_name"
          placeholder="enter name"
          className="w-full md:w-1/2 h-12 p-3 rounded-md bg-[#202124] border-2 border-green-400 outline-none"
          required
        />
        <input
          type="email"
          placeholder="enter email"
          name="user_email"
          className="w-full md:w-1/2 h-12 p-3  rounded-md bg-[#202124] border-2 border-green-400 outline-none"
          required
        />
        <textarea
          id=""
          placeholder="enter message.."
          name="message"
          className="w-full md:w-1/2 h-[30vh] p-3 rounded-md border-2 bg-[#202124] border-green-400 outline-none"
          required
        ></textarea>

        <input
          className="bg-green-400 px-5 py-3 rounded-md hover:cursor-pointer"
          type="submit"
          value="Send Message"
        />
      </form>

      {/*footer section */}
      <footer className=" items-center bg-[#202124] text-white">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 py-5 md:py-10 md:px-[7em]">
          <p>peprah.inc</p>
          <p>Copyright©2024</p>
        </div>
        <div className="text-black bg-green-400 w-full p-3 text-center font-medium">
          <p>made with love &#60;3</p>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Home;
