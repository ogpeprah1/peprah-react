import React, { useState, useRef, useEffect } from "react";
import ServiceCard from "../components/service-component";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import emailjs from "@emailjs/browser";

import AnalyticsImg from "../assets/analytics.png";
import WebDevImg from "../assets/web-development.png";
import GraphicImg from "../assets/graphics.png";
import AppImg from "../assets/development.png";
import CaseStudyCard from "../components/case-study-card";
import linkedin_icon from "../assets/linkedin.png";
import insta_icon from "../assets/instagram.png";
import github_icon from "../assets/github.png";

function Home() {
  const services = [
    {
      title: "Software Development",
      description:
        "Building scalable and efficient software solutions using modern technologies. Full-stack development with expertise in React, Node.js, and cloud-native architectures.",
      img: WebDevImg,
    },
    {
      title: "Data Analytics",
      description:
        "Transforming complex data into actionable insights. Advanced analytics, machine learning, and data visualization expertise to drive informed business decisions.",
      img: AnalyticsImg,
    },
    {
      title: "Cloud Architect",
      description:
        "Designing and implementing robust cloud infrastructure solutions. Expertise in AWS, Azure, and GCP with focus on scalability, security, and cost optimization.",
      img: AppImg,
    },
    {
      title: "Designer",
      description:
        "Creating intuitive and visually stunning user experiences. UI/UX design with a focus on user-centered design principles and modern design systems.",
      img: GraphicImg,
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

  const SkillsRow1 = [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Flask",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Figma",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
  ];

  const SkillsRow2 = [
    {
      name: "AWS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
      name: "Azure",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    },
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Kubernetes",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    },
    {
      name: "TensorFlow",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    },
    {
      name: "Pandas",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Tailwind",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
  ];
  const [isOpen, setIsopen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Determine active section
      const sections = [
        "header-text",
        "about-head-text",
        "services-head-text",
        "skills-head-text",
        "case-head-text",
        "contact-head-text",
      ];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        },
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
        },
      );
  };

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Ultra-Modern Floating Side Navigation */}
      <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col gap-1">
        {Links.map((link, index) => {
          const isActive = activeSection === link.link.slice(1);
          return (
            <div
              key={index}
              className="group relative flex items-center justify-end"
            >
              {/* Label tooltip */}
              <div className="absolute right-12 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="backdrop-blur-xl bg-emerald-500/90 px-4 py-2 rounded-lg border border-emerald-400/20 shadow-lg shadow-emerald-500/20">
                  <span className="text-white text-sm font-semibold whitespace-nowrap">
                    {link.name}
                  </span>
                </div>
              </div>

              {/* Dot indicator */}
              <a
                href={link.link}
                className="relative block transition-all duration-500"
              >
                {isActive && (
                  <div className="absolute inset-0 animate-ping">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  </div>
                )}
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    isActive
                      ? "w-12 bg-gradient-to-r from-emerald-400 to-teal-500 shadow-lg shadow-emerald-500/50"
                      : "bg-gray-500 hover:bg-emerald-400 hover:w-8 hover:shadow-lg hover:shadow-emerald-500/30"
                  }`}
                ></div>
              </a>
            </div>
          );
        })}
      </nav>

      {/* Minimal Top Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 backdrop-blur-md bg-black/20 border-b border-emerald-500/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex justify-between items-center">
          <h1 className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-emerald-400 via-teal-400 to-green-500 bg-clip-text text-transparent">
            PEPRAH{" "}
            <span className="text-xs font-light text-emerald-400/60">
              DATA + DEV
            </span>
          </h1>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {Links.slice(0, 3).map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="text-sm font-medium text-gray-400 hover:text-emerald-400 transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="#contact-head-text"
              className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full text-sm font-semibold hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300"
            >
              Let's Connect
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsopen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center"
          >
            {!isOpen ? (
              <Bars3BottomLeftIcon className="w-7 h-7" />
            ) : (
              <XMarkIcon className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden backdrop-blur-xl bg-black/95 border-t border-white/10">
            <div className="px-6 py-6 space-y-4">
              {Links.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  onClick={() => setIsopen(false)}
                  className="block text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* HERO - Full Screen Split Layout */}
      <section
        id="header-text"
        className="relative min-h-screen flex items-center overflow-hidden mt-8"
      >
        {/* Animated Technical Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/40 via-black to-teal-950/40"></div>
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Animated Code Lines Background */}
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="code-rain absolute top-0 left-[10%] text-emerald-400 text-xs font-mono animate-codeRain">
            const data = analyzeMetrics();
          </div>
          <div
            className="code-rain absolute top-0 left-[30%] text-teal-400 text-xs font-mono animate-codeRain"
            style={{ animationDelay: "1s" }}
          >
            function optimize() &#123;
          </div>
          <div
            className="code-rain absolute top-0 left-[50%] text-green-400 text-xs font-mono animate-codeRain"
            style={{ animationDelay: "2s" }}
          >
            SELECT * FROM analytics
          </div>
          <div
            className="code-rain absolute top-0 left-[70%] text-emerald-300 text-xs font-mono animate-codeRain"
            style={{ animationDelay: "1.5s" }}
          >
            import pandas as pd
          </div>
          <div
            className="code-rain absolute top-0 left-[90%] text-teal-300 text-xs font-mono animate-codeRain"
            style={{ animationDelay: "0.5s" }}
          >
            &#125; catch (error) &#123;
          </div>
        </div>

        {/* Floating Technical SVG Icons */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
          {/* Chart Icon */}
          <svg
            className="absolute top-20 right-20 w-16 h-16 text-emerald-500/20 animate-float"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3 13h2v8H3v-8zm4-6h2v14H7V7zm4-4h2v18h-2V3zm4 9h2v9h-2v-9zm4-3h2v12h-2V9z" />
          </svg>
          {/* Code Brackets */}
          <svg
            className="absolute bottom-32 left-20 w-12 h-12 text-teal-500/20 animate-float"
            style={{ animationDelay: "1s" }}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
          </svg>
          {/* Database Icon */}
          <svg
            className="absolute top-40 left-1/4 w-14 h-14 text-green-500/20 animate-float"
            style={{ animationDelay: "2s" }}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4zm0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z" />
          </svg>
          {/* Terminal Icon */}
          <svg
            className="absolute top-1/3 right-1/4 w-14 h-14 text-emerald-500/20 animate-float"
            style={{ animationDelay: "1.5s" }}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm-7 14H4v-4h9v4zm0-5H4V9h9v4zm7 5h-5V9h5v9z" />
          </svg>
          {/* Function Icon */}
          <svg
            className="absolute bottom-1/4 right-1/3 w-12 h-12 text-teal-500/20 animate-float"
            style={{ animationDelay: "2.5s" }}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" />
          </svg>
          {/* API Icon */}
          <svg
            className="absolute top-2/3 left-1/3 w-14 h-14 text-green-500/20 animate-float"
            style={{ animationDelay: "0.8s" }}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
          </svg>
          {/* Gear Icon */}
          <svg
            className="absolute bottom-40 right-1/2 w-10 h-10 text-emerald-500/15 animate-float"
            style={{ animationDelay: "3s" }}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94L14.4 2.81c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 z-10">
            <div className="space-y-4">
              <p className="text-xs text-emerald-400 font-semibold tracking-widest uppercase animate-fadeIn flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                </svg>
                MSc Management with Data Analytics
              </p>
              <h1 className="text-6xl lg:text-8xl font-black leading-none animate-slideUp">
                <span className="block text-gray-300">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-green-500 bg-clip-text text-transparent mt-2">
                  Godfred
                </span>
              </h1>
            </div>

            <p
              className="text-base text-gray-400 max-w-lg leading-relaxed animate-fadeIn"
              style={{ animationDelay: "0.5s" }}
            >
              MSc in Management with Data Analytics and Full-Stack Developer. I
              am just a curious mind that seeks to solve business problems with
              tech, data, and creativity.
            </p>

            <div
              className="flex flex-wrap gap-4 animate-fadeIn text-sm"
              style={{ animationDelay: "0.7s" }}
            >
              <a
                href="#contact-head-text"
                className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full font-medium hover:scale-105 transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50"
              >
                Start a Project
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
              <a
                href="#case-head-text"
                className="px-8 py-4 backdrop-blur-xl bg-white/5 border border-emerald-500/30 rounded-full font-medium hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all duration-300"
              >
                View Portfolio
              </a>
            </div>

            {/* Social Links */}
            <div
              className="flex gap-4 animate-fadeIn"
              style={{ animationDelay: "0.9s" }}
            >
              {[
                {
                  icon: linkedin_icon,
                  url: "https://linkedin.com/in/ogpeprah",
                  color: "from-blue-500 to-blue-700",
                },
                {
                  icon: github_icon,
                  url: "https://github.com/ogpeprah1",
                  color: "from-gray-700 to-gray-900",
                },
                {
                  icon: insta_icon,
                  url: "https://instagram.com/gho_dey/",
                  color: "from-teal-500 to-emerald-600",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-emerald-500/30`}
                >
                  <img src={social.icon} alt="" className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Image - Floating Card Design */}
          <div
            className="relative lg:h-[600px] animate-fadeIn"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-3xl blur-3xl"></div>
            <div
              className="relative hero-img h-full min-h-[400px] rounded-3xl border border-emerald-500/20 backdrop-blur-sm overflow-hidden transform hover:scale-105 transition-all duration-700"
              style={{ transform: `translateY(${scrollY * 0.05}px)` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              {/* Floating stats cards */}
              <div className="absolute bottom-8 left-8 right-8 backdrop-blur-xl bg-emerald-500/10 rounded-2xl p-6 border border-emerald-500/30">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                      MSc
                    </p>
                    <p className="text-xs text-gray-400 mt-1">Data Analytics</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                      5+
                    </p>
                    <p className="text-xs text-gray-400 mt-1">Years Exp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About - Diagonal Split Layout */}
      <section
        id="about-head-text"
        className="relative min-h-screen overflow-hidden"
      >
        {/* Diagonal Background Split */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-emerald-950/20 to-black"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-teal-950/30 to-transparent transform skew-x-12 origin-top-right"></div>

          {/* Animated Data Visualization Background */}
          <div className="absolute inset-0 opacity-5">
            <svg
              className="absolute top-20 right-40 w-64 h-64 animate-pulse"
              viewBox="0 0 200 200"
            >
              <circle
                cx="50"
                cy="150"
                r="4"
                fill="#10b981"
                className="animate-ping"
              />
              <circle
                cx="80"
                cy="120"
                r="4"
                fill="#14b8a6"
                className="animate-ping"
                style={{ animationDelay: "0.2s" }}
              />
              <circle
                cx="110"
                cy="90"
                r="4"
                fill="#22c55e"
                className="animate-ping"
                style={{ animationDelay: "0.4s" }}
              />
              <circle
                cx="140"
                cy="60"
                r="4"
                fill="#10b981"
                className="animate-ping"
                style={{ animationDelay: "0.6s" }}
              />
              <polyline
                points="50,150 80,120 110,90 140,60"
                stroke="#10b981"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
              />
            </svg>
          </div>

          {/* Floating Code Snippets */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="code-rain absolute top-0 left-[10%] text-emerald-400 text-xs font-mono animate-codeRain">
              class DataModel:
            </div>
            <div
              className="code-rain absolute top-0 left-[30%] text-teal-400 text-xs font-mono animate-codeRain"
              style={{ animationDelay: "2s" }}
            >
              plt.figure(figsize=(10,6))
            </div>
            <div
              className="code-rain absolute top-0 left-[50%] text-green-400 text-xs font-mono animate-codeRain"
              style={{ animationDelay: "4s" }}
            >
              async function getData()
            </div>
            <div
              className="code-rain absolute top-0 left-[70%] text-emerald-300 text-xs font-mono animate-codeRain"
              style={{ animationDelay: "1s" }}
            >
              X_scaled = scaler.fit()
            </div>
            <div
              className="code-rain absolute top-0 left-[90%] text-teal-300 text-xs font-mono animate-codeRain"
              style={{ animationDelay: "3s" }}
            >
              &#125; else &#123;
            </div>
          </div>

          {/* Floating Technical Icons in About */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
            <svg
              className="absolute top-1/4 left-10 w-12 h-12 text-emerald-500 animate-float"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <svg
              className="absolute bottom-1/4 right-16 w-14 h-14 text-teal-500 animate-float"
              style={{ animationDelay: "1.5s" }}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
            </svg>
            <svg
              className="absolute top-1/3 right-1/4 w-10 h-10 text-green-500 animate-float"
              style={{ animationDelay: "2.3s" }}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
            </svg>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 lg:py-32 flex gap-12 items-center justify-center">
          <div className="space-y-8">
            <div>
              <span className="text-xs text-emerald-400 font-semibold tracking-widest uppercase flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                Technical Expertise
              </span>
              <h2 className="text-5xl lg:text-7xl font-black mt-4 leading-tight">
                <span className="block text-white">Data Science</span>
                <span className="block bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                  Meets Code
                </span>
              </h2>
            </div>

            {/* Description Card */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/5 p-8 rounded-3xl border border-emerald-500/20">
              <h3 className="text-2xl font-bold mb-4 text-white">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                  Godfred Peprah Owusu
                </span>
              </h3>
              <p className="text-gray-300 leading-relaxed text-base">
                I am passionate about turning data into clear, strategic
                decisions. I combine analytical insight with a strong
                understanding of technology to design practical, data-driven
                solutions that improve performance and efficiency. My experience
                spans analytics, software development, and cloud architecture,
                enabling me to build systems that are both intelligent and
                scalable. I approach every project with a focus on impact,
                clarity, and long-term value.
              </p>
              <a
                href="cv.pdf"
                download="Godfred_Peprah_Owusu_CV.pdf"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full font-semibold hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300"
                id="to-services-head-text"
              >
                Download CV
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Bento Box Grid */}
      <section
        id="services-head-text"
        className="relative bg-black lg:px-12 lg:py-32 overflow-hidden"
      >
        {/* Floating Code Background */}
        <div className="absolute inset-0 opacity-8">
          <div className="code-rain absolute top-0 left-[8%] text-emerald-500/30 text-xs font-mono animate-codeRain">
            const apiUrl = '/api/v1'
          </div>
          <div
            className="code-rain absolute top-0 left-[22%] text-teal-500/30 text-xs font-mono animate-codeRain"
            style={{ animationDelay: "1.5s" }}
          >
            if (condition) return;
          </div>
          <div
            className="code-rain absolute top-0 left-[38%] text-green-500/30 text-xs font-mono animate-codeRain"
            style={{ animationDelay: "3s" }}
          >
            db.collection('users')
          </div>
          <div
            className="code-rain absolute top-0 left-[52%] text-emerald-500/30 text-xs font-mono animate-codeRain"
            style={{ animationDelay: "0.8s" }}
          >
            np.array([1, 2, 3])
          </div>
          <div
            className="code-rain absolute top-0 left-[68%] text-teal-500/30 text-xs font-mono animate-codeRain"
            style={{ animationDelay: "2.2s" }}
          >
            &#123; status: 'success' &#125;
          </div>
          <div
            className="code-rain absolute top-0 left-[82%] text-green-500/30 text-xs font-mono animate-codeRain"
            style={{ animationDelay: "4s" }}
          >
            print(f'Result: &#123;x&#125;')
          </div>
          <div
            className="code-rain absolute top-0 left-[96%] text-emerald-500/30 text-xs font-mono animate-codeRain"
            style={{ animationDelay: "1s" }}
          >
            await response.json()
          </div>
        </div>

        {/* Floating Technical Icons in Services */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
          <svg
            className="absolute top-20 right-1/4 w-16 h-16 text-emerald-500 animate-float"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm-7 14H4v-4h9v4zm0-5H4V9h9v4zm7 5h-5V9h5v9z" />
          </svg>
          <svg
            className="absolute bottom-32 left-1/3 w-12 h-12 text-teal-500 animate-float"
            style={{ animationDelay: "1.8s" }}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-0 relative z-10">
          {/* Header - Asymmetric */}

          <div className="text-center mb-16 ">
            <span className="text-xs text-emerald-400 font-semibold tracking-widest uppercase flex items-center justify-center gap-2 ">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 00-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2z" />
              </svg>
              Core Expertise
            </span>
            <h2 className="text-5xl lg:text-7xl font-black mt-4 leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-green-500 bg-clip-text text-transparent">
                Technical Solutions
              </span>
            </h2>
          </div>

          {/* 2x2 Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                img={service.img}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills - Side by Side Layout */}
      <section
        id="skills-head-text"
        className="relative bg-gradient-to-br from-black via-teal-950/20 to-black py-32 overflow-hidden"
      >
        {/* Floating Code Background */}
        <div className="absolute inset-0 opacity-8">
          <div className="code-rain absolute top-0 left-[12%] text-emerald-500/30 text-xs font-mono animate-codeRain">
            for i in range(len(data)):
          </div>
          <div
            className="code-rain absolute top-0 left-[28%] text-teal-500/30 text-xs font-mono animate-codeRain"
            style={{ animationDelay: "2.5s" }}
          >
            const [state, setState]
          </div>
          <div
            className="code-rain absolute top-0 left-[44%] text-green-500/30 text-xs font-mono animate-codeRain"
            style={{ animationDelay: "1.2s" }}
          >
            train_test_split(X, y)
          </div>
          <div
            className="code-rain absolute top-0 left-[60%] text-emerald-500/30 text-xs font-mono animate-codeRain"
            style={{ animationDelay: "3.8s" }}
          >
            CREATE TABLE analytics
          </div>
          <div
            className="code-rain absolute top-0 left-[76%] text-teal-500/30 text-xs font-mono animate-codeRain"
            style={{ animationDelay: "0.5s" }}
          >
            useEffect(() =&gt; &#123;
          </div>
          <div
            className="code-rain absolute top-0 left-[92%] text-green-500/30 text-xs font-mono animate-codeRain"
            style={{ animationDelay: "2.8s" }}
          >
            correlation_matrix
          </div>
        </div>

        {/* Floating Technical Icons in Skills */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
          <svg
            className="absolute top-40 left-20 w-14 h-14 text-emerald-500 animate-float"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3 13h2v8H3v-8zm4-6h2v14H7V7zm4-4h2v18h-2V3zm4 9h2v9h-2v-9zm4-3h2v12h-2V9z" />
          </svg>
          <svg
            className="absolute bottom-40 right-24 w-12 h-12 text-teal-500 animate-float"
            style={{ animationDelay: "2s" }}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4zm0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Centered Heading */}
          <div className="text-center mb-16">
            <span className="text-xs text-emerald-400 font-semibold tracking-widest uppercase">
              Technical Stack
            </span>
            <h2 className="text-5xl lg:text-7xl font-black mt-4 leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                My Tools
              </span>
            </h2>
          </div>

          {/* Infinite Sliding Tools - Two Rows */}
          <div className="relative overflow-hidden py-8 space-y-8">
            {/* First Row - Right to Left */}
            <div className="flex animate-slide">
              {/* Triple duplication for seamless infinite loop */}
              {[...SkillsRow1, ...SkillsRow1, ...SkillsRow1].map(
                (tool, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 mx-3 backdrop-blur-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-lg p-4 border border-emerald-500/20 hover:border-emerald-500/50 hover:scale-110 transition-all duration-300 cursor-pointer min-w-[70px] h-[70px] flex items-center justify-center"
                  >
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="w-8 h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ),
              )}
            </div>

            {/* Second Row - Left to Right */}
            <div className="flex animate-slide-reverse">
              {/* Triple duplication for seamless infinite loop */}
              {[...SkillsRow2, ...SkillsRow2, ...SkillsRow2].map(
                (tool, index) => (
                  <div
                    key={`reverse-${index}`}
                    className="flex-shrink-0 mx-3 backdrop-blur-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-lg p-4 border border-emerald-500/20 hover:border-emerald-500/50 hover:scale-110 transition-all duration-300 cursor-pointer min-w-[70px] h-[70px] flex items-center justify-center"
                  >
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="w-8 h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies - Creative Grid */}
      <section
        id="case-head-text"
        className="relative bg-black py-32 overflow-hidden"
      >
        {/* Floating Technical Icons in Case Studies */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
          <svg
            className="absolute top-1/4 right-32 w-14 h-14 text-green-500 animate-float"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
          </svg>
          <svg
            className="absolute bottom-1/3 left-28 w-12 h-12 text-emerald-500 animate-float"
            style={{ animationDelay: "1.6s" }}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
          </svg>
        </div>
        {/* Floating Code Background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="code-rain absolute top-0 left-[6%] text-emerald-500/30 text-xs font-mono animate-codeRain">
            git commit -m 'feature'
          </div>
          <div
            className="code-rain absolute top-0 left-[18%] text-teal-500/30 text-xs font-mono animate-codeRain"
            style={{ animationDelay: "3.2s" }}
          >
            model.predict(X_test)
          </div>
          <div
            className="code-rain absolute top-0 left-[32%] text-green-500/30 text-xs font-mono animate-codeRain"
            style={{ animationDelay: "1.8s" }}
          >
            router.get('/api/:id')
          </div>
          <div
            className="code-rain absolute top-0 left-[46%] text-emerald-500/30 text-xs font-mono animate-codeRain"
            style={{ animationDelay: "4.5s" }}
          >
            df.groupby('category')
          </div>
          <div
            className="code-rain absolute top-0 left-[60%] text-teal-500/30 text-xs font-mono animate-codeRain"
            style={{ animationDelay: "2s" }}
          >
            export default App;
          </div>
          <div
            className="code-rain absolute top-0 left-[74%] text-green-500/30 text-xs font-mono animate-codeRain"
            style={{ animationDelay: "0.3s" }}
          >
            plt.show()
          </div>
          <div
            className="code-rain absolute top-0 left-[88%] text-emerald-500/30 text-xs font-mono animate-codeRain"
            style={{ animationDelay: "3.5s" }}
          >
            JOIN users ON id
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <span className="text-xs text-emerald-400 font-semibold tracking-widest uppercase">
              Portfolio
            </span>
            <h2 className="text-5xl lg:text-7xl font-black mt-4 mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-green-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-12">
              Innovative data-driven applications and software solutions
              showcasing technical excellence
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mt-12 text-xs">
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-emerald-500/30">
                All Projects
              </button>
              <button className="px-6 py-3 rounded-full backdrop-blur-xl bg-emerald-500/10 border border-emerald-500/30 text-gray-300 font-semibold hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:scale-105 transition-all duration-300">
                Developer
              </button>
              <button className="px-6 py-3 rounded-full backdrop-blur-xl bg-emerald-500/10 border border-emerald-500/30 text-gray-300 font-semibold hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:scale-105 transition-all duration-300">
                Data Analyst
              </button>
              <button className="px-6 py-3 rounded-full backdrop-blur-xl bg-emerald-500/10 border border-emerald-500/30 text-gray-300 font-semibold hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:scale-105 transition-all duration-300">
                Cloud Architect
              </button>
              <button className="px-6 py-3 rounded-full backdrop-blur-xl bg-emerald-500/10 border border-emerald-500/30 text-gray-300 font-semibold hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:scale-105 transition-all duration-300">
                Designer
              </button>
            </div>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Cases.map((case_comp, index) => (
              <CaseStudyCard
                key={index}
                img={case_comp.img}
                title={case_comp.title}
                description={case_comp.description}
                case_url={case_comp.url}
                tags={case_comp.tags}
                index={index}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <a
              href="https://github.com/ogpeprah1"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 backdrop-blur-xl bg-emerald-500/10 border border-emerald-500/30 rounded-full font-semibold hover:bg-emerald-500/20 hover:border-emerald-500/50 hover:scale-105 transition-all duration-300"
            >
              View All Projects
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact - Split Design */}
      <section
        id="contact-head-text"
        className="relative bg-gradient-to-br from-black via-emerald-950/20 to-black py-32 overflow-hidden"
      >
        {/* Floating Code Background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="code-rain absolute top-0 left-[10%] text-emerald-500/30 text-xs font-mono animate-codeRain">
            fetch(url).then(res)
          </div>
          <div
            className="code-rain absolute top-0 left-[25%] text-teal-500/30 text-xs font-mono animate-codeRain"
            style={{ animationDelay: "2.7s" }}
          >
            sklearn.metrics import
          </div>
          <div
            className="code-rain absolute top-0 left-[40%] text-green-500/30 text-xs font-mono animate-codeRain"
            style={{ animationDelay: "1.3s" }}
          >
            &#60;Component /&#62;
          </div>
          <div
            className="code-rain absolute top-0 left-[55%] text-emerald-500/30 text-xs font-mono animate-codeRain"
            style={{ animationDelay: "4.2s" }}
          >
            WHERE timestamp &gt; NOW()
          </div>
          <div
            className="code-rain absolute top-0 left-[70%] text-teal-500/30 text-xs font-mono animate-codeRain"
            style={{ animationDelay: "0.9s" }}
          >
            try &#123; await db.save()
          </div>
          <div
            className="code-rain absolute top-0 left-[85%] text-green-500/30 text-xs font-mono animate-codeRain"
            style={{ animationDelay: "3.4s" }}
          >
            accuracy = 0.95
          </div>
        </div>

        {/* Floating Technical Icons in Contact */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
          <svg
            className="absolute top-32 right-40 w-14 h-14 text-teal-500 animate-float"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm-7 14H4v-4h9v4zm0-5H4V9h9v4zm7 5h-5V9h5v9z" />
          </svg>
          <svg
            className="absolute bottom-48 left-32 w-12 h-12 text-emerald-500 animate-float"
            style={{ animationDelay: "1.9s" }}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left - Info */}
          <div className="space-y-8">
            <div>
              <span className="text-xs text-emerald-400 font-semibold tracking-widest uppercase text-center lg:text-left flex items-center gap-2 justify-center lg:justify-start">
                Get in Touch
              </span>
              <h2 className="text-5xl lg:text-7xl font-black mt-4 mb-6 leading-tight text-center lg:text-left">
                <span className="block text-white">Let's </span>
                <span className="block bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                  Collaborate
                </span>
              </h2>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="backdrop-blur-xl bg-emerald-500/5 p-6 rounded-2xl border border-emerald-500/20 flex items-center  gap-4 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-medium text-xs">
                    godfredpeprahowusu@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {[
                {
                  icon: linkedin_icon,
                  url: "https://linkedin.com/in/ogpeprah",
                  label: "LinkedIn",
                },
                {
                  icon: github_icon,
                  url: "https://github.com/ogpeprah1",
                  label: "GitHub",
                },
                {
                  icon: insta_icon,
                  url: "https://instagram.com/gho_dey/",
                  label: "Instagram",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 backdrop-blur-xl bg-emerald-500/5 border border-emerald-500/20 rounded-2xl flex items-center justify-center hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:scale-110 transition-all duration-300"
                  title={social.label}
                >
                  <img
                    src={social.icon}
                    alt={social.label}
                    className="w-6 h-6"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="backdrop-blur-xl bg-emerald-500/5 p-8 lg:p-12 rounded-3xl border border-emerald-500/20 text-xs"
          >
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className="w-full h-14 px-5 rounded-2xl bg-black/40 border border-emerald-500/20 outline-none text-white placeholder-gray-500 focus:border-emerald-500 focus:bg-black/60 transition-all"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="user_email"
                  placeholder="your@email.com"
                  className="w-full h-14 px-5 rounded-2xl bg-black/40 border border-emerald-500/20 outline-none text-white placeholder-gray-500 focus:border-emerald-500 focus:bg-black/60 transition-all"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="6"
                  className="w-full px-5 py-4 rounded-2xl bg-black/40 border border-emerald-500/20 outline-none text-white placeholder-gray-500 focus:border-emerald-500 focus:bg-black/60 transition-all resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl font-medium text-sm hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black border-t border-emerald-500/10 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-black bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent mb-4">
                PEPRAH.INC
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md text-xs">
                MSc Data Analytics • Full-Stack Development • Intelligent
                Solutions
              </p>
              <div className="flex gap-3">
                {[
                  {
                    icon: linkedin_icon,
                    url: "https://linkedin.com/in/ogpeprah",
                  },
                  { icon: github_icon, url: "https://github.com/ogpeprah1" },
                  { icon: insta_icon, url: "https://instagram.com/gho_dey/" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 backdrop-blur-xl bg-emerald-500/5 border border-emerald-500/20 rounded-xl flex items-center justify-center hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:scale-110 transition-all duration-300"
                  >
                    <img src={social.icon} alt="" className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-1">
                {Links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.link}
                      className="text-gray-400 hover:text-teal-500 transition-colors text-xs"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-2">Services</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index} className="text-gray-400 text-xs">
                    {service.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t text-xs border-emerald-500/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 ">
              © 2024 Peprah Inc. All rights reserved.
            </p>
            <p className="text-gray-500">
              Powered by Data & Code{" "}
              <span className="text-emerald-500">✨</span>
            </p>
          </div>
        </div>

        {/* Gradient Line */}
        <div className="h-1 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500"></div>
      </footer>
    </div>
  );
}

export default Home;
