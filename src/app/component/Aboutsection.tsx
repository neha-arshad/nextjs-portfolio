"use client";
import React from "react";
import { useState, useTransition } from "react";
import Button from "./Button";

const data = [
  {
    title: "SKILLS",
    id: "SKILLS",
    content: (
      <ul className="list-disc pl-2 text-red-100">
        <li>✨ Ability to Delegate Responsibilitie</li>
        <li>✨ Excellent Communictaion</li>
        <li>🧠 Html</li>
        <li>🧠 CSS</li>
        <li>🧠 JavaScript</li>
        <li>🧠 TypeSript</li>
        <li>🧠 React</li>
        <li>🧠 Next.js</li>
        <li>🧠 Tailwind.css</li>
      </ul>
    ),
  },
  {
    title: "EDUCATION",
    id: "EDUCATION",
    content: (
      <ul className="list-disc pl-2 text-red-100">
        <li>Matriculation in Science</li>
        <li>Intermediate in Science group</li>
        <li>Master in Arts</li>
        <li>
          Certified cloud Applied Generative AI Engineer (Gen Eng) In process
        </li>
      </ul>
    ),
  },
  {
    title: "EXPERIENCE",
    id: "EXPERIENCE",
    content: (
      <ul className="list-disc pl-2 text-red-100">
        <li>
          "My interest lies in web 3.0 and metaverse AI, where I'm passionate about exploring new technologies and virtual experiences. My exploration aims to open new
					doors in the digital world and advance understanding through AI. My
          skills encompass front-end and back-end development, along with AI
          integration and crafting immersive user experiences. I'm keep on
          finding innovative solutions to new challenges and transforming the
          digital landscape. My goal is to materialize creative and impactful
          projects in the evolving metaverse." Designed and developed a personal
          portfolio to showcase my projects, skills, and resume using HTML, CSS,
          and JavaScript".
        </li>
        <li>
          Developed a responsive web application using Next.js and TypeScript.
        </li>
      </ul>
    ),
  },
];

const Aboutsection = () => {
  const [tab, setTab] = useState("SKILLS");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab((prevTab) => (prevTab === id ? "" : id));
    });
  };
  return (
    <section className="text-white mt-10" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img src="/images/its_all_about_me-.jpg" width={600} height={600} />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="mt-10 text-4xl font-bold mb-4 text-white ">
            ABOUT ME
          </h2>
          <p className=" text-base md:text-lg italic mt-4 mb-4 text-red-100 text-left ">
            I'm a frontend and backend web deveploper with a passion for creating
            interactive and responsive web applictaions. I have experience with
            JavaScript, react, nodejs, html, CSS. I'm a quick learner and i m
            always looking to expend my knowledge and skill set. I'm excited to
            work with others to create amazing applictaions.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <Button
              selectTab={() => handleTabChange("SKILLS")}
              active={tab === "SKILLS"}
            >
              SKILLS
            </Button>

            <Button
              selectTab={() => handleTabChange("EDUCATION")}
              active={tab === "EDUCATION"}
            >
              EDUCATION
            </Button>

            <Button
              selectTab={() => handleTabChange("EXPERIENCE")}
              active={tab === "EXPERIENCE"}
            >
              EXPERIENCE
            </Button>
          </div>
          <div className="mt-8 ">{data.find((t) => t.id === tab)?.content}</div>
        </div>
      </div>
    </section>
  );
};

export default Aboutsection;
