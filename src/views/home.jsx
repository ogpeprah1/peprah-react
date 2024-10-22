import React, { useState, useRef } from "react";
import ServiceCard from "../components/service-component";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import ProgressBar from "../components/progress-bar";
import emailjs from "@emailjs/browser";

import AnalyticsImg from "../assets/analytics.png";
import WebDevImg from "../assets/web-development.png";
import GraphicImg from "../assets/graphics.png";
import AppImg from "../assets/development.png";
import CaseStudyCard from "../components/case-study-card";
import whatsapp_icon from "../assets/whatsapp.png";
import insta_icon from "../assets/instagram.png";
import github_icon from "../assets/github.png";

function Home() {
  const services = [
    {
      title: "Web Development",
      description:
        "Elevate your online presence with my expert web development services. Customized solutions for a seamless, responsive, and visually stunning website.",
      img: WebDevImg,
    },
    {
      title: "Graphic Design",
      description:
        "I transform your ideas into visuals with top-notch graphic design tools. Elevate your brand with captivating designs that leave a lasting impression.",
      img: GraphicImg,
    },
    {
      title: "Data Analytics",
      description:
        "I have the passion for unlocking insights from data that drive decisions. Harness the power of data analytics for smarter business strategies.",
      img: AnalyticsImg,
    },
    {
      title: "App Development",
      description:
        "I have the skill to help elevate your business with custom app development. From concept to code, i craft user-friendly, innovative solutions, transforming ideas into reality.",
      img: AppImg,
    },
  ];

  const Cases = [
    {
      title: "A Simple Dictionary",
      description:
        "A dictionary web app that utilises APIs. I used fetch.js to get all the JSON data needed to provide meaning for any word in the dictionary. Feel free to use it",
      img: WebDevImg,
      url: "https://github.com/ogpeprah1/simple-dictionary.git",
      tags: "HTML, CSS, Fetch Api",
    },
    {
      title: "TODO APP",
      description:
        "A Todo web app with HTML, CSS and JS. The user inputs some activities that are yet to be accomplished at a particular time. The user also has the ability to edit and delete todos. ",
      img: GraphicImg,
      url: "https://github.com/ogpeprah1/todo-app.git",
      tags: "HTML, CSS, JS, Local Storage",
    },
    {
      title: "Portfolio Website",
      description:
        "This website was built in REACT JS. Browse the code on github if you like yours to be like this. Hit me up if you can't find your way around it too.",
      img: AnalyticsImg,
      url: "https://github.com/ogpeprah1/peprah-react.git",
      tags: "React JS, Tailwind CSS",
    },
    {
      title: "School Website",
      description: "A simple school website with HTML and CSS.",
      img: AppImg,
      url: "https://github.com/ogpeprah1/school-website-new.git",
      tags: "HTML, CSS",
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
      value: 90,
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
      title: "Flutter",
      value: 70,
    },
    {
      title: "Next JS",
      value: 75,
    },
  ];
  const [isOpen, setIsopen] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERIAL_KEY,
        process.env.REACT_APP_TEMPLATE_KEY,
        form.current,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
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
      <div className="w-full fixed top-0 left-0 ">
        {/*logo */}
        <div className="md:px-[7em] py-6 px-[2em] text-white md:flex justify-between items-center bg-black rounded-bl-[3rem]  rounded-br-[3.8rem]">
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
        className="w-[100%] h-[full] bg-[#202124] text-white p-[2em] md:p-[7em] md:justify-around flex flex-col md:flex-row"
        id="header-text"
      >
        {/*Home Section */}
        <div className=" w-[100%] md:w-1/2 h-full mt-[10vh]">
          <h1 className="text-3xl">Hello i am</h1>
          <h1 className=" text-[5em] md:text-[7em] font-bold">Peprah</h1>
          <p className="text-gray-300 md:w-[70%]">
            a Full Stack Developer, a Graphic Designer and an aspiring Data
            Scientist.
          </p>
          <div className=" py-2  mt-[30px] flex gap-5">
            <a href="https://wa.link/h33aon" target="_blank" rel="noreferrer">
              <img
                src={whatsapp_icon}
                alt=""
                className="w-8 h-8 hover:scale-125 duration-500 hover:cursor-pointer"
              />
            </a>

            <a
              href="https://github.com/ogpeprah1"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={github_icon}
                alt=""
                className="w-8 h-8 hover:scale-125 duration-500 hover:cursor-pointer"
              />
            </a>

            <a
              href="https://instagram.com/gho_dey/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={insta_icon}
                alt=""
                className="w-8 h-8 hover:scale-125 duration-500 hover:cursor-pointer"
              />
            </a>
          </div>
        </div>
        <div className="hero-img md:w-[60%] h-[200px] md:h-auto md:block mt-10 md:mt-[10vh] rounded-md"></div>
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
            I am,<span className="text-green-400"> Godfred Peprah Owusu</span>
          </h1>
          <p className="text-gray-300 mt-4 mb-5">
            I am a self-taught full-stack developer and graphic designer,
            passionate about creating seamless digital experiences. My skills
            span coding and design, merging creativity and technology for
            innovative solutions."
          </p>
          <a
            href="Peprah_CV.pdf"
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
            <div className="flex md:flex-row gap-0 md:gap-2 justify-center items-center w-full md:w-[70%]">
              <p className="w-[50%] md:w-[20%] text-green-400 md:text-[1.1em] font-medium">
                {skill.title}
              </p>
              <div className="border h-[10px] md:h-[50px] border-green-400 hidden md:block"></div>
              <ProgressBar completed={skill.value} />
            </div>
          ))}
        </div>
      </div>

      {/* Case Studies Section */}
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
          {Cases.map((case_comp) => (
            <CaseStudyCard
              img={case_comp.img}
              title={case_comp.title}
              key={case_comp.id}
              description={case_comp.description}
              case_url={case_comp.url}
              tags={case_comp.tags}
            />
          ))}
        </div>
      </div>
      {/*Contact form */}

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-[100%] bg-black text-white p-[1.3em] md:p-[7em] flex flex-col justify-center items-center gap-5 text-[0.9em]"
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
          className="w-full md:w-1/2 h-[15vh] p-3 rounded-md border-2 bg-[#202124] border-green-400 outline-none"
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
