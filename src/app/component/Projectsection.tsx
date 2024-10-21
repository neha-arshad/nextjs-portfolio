"use client";
import React, {useState} from 'react';
import Projectcard from './Projectcard';
import Projectag from './Projectag';

const ProjectData = [
  {
    id: "1",
    title: "hackathon",
    description: "Project 1",
    image: "/images/resume.jfif",
    tag: ["view"],
    gitUrl: "https://github.com/neha-arshad/milestone5.git",
    previewUrl: "https://resume-builder-milestone5-phi.vercel.app/",
  },

  {
    id: "2",
    title: "Online Ticket System",
    description: "Project 1",
    image: "/images/ticket.webp",
    tag: ["view"],
    gitUrl:
      "https://github.com/neha-arshad/project-Online-ticket-system-flo.git",
    previewUrl:
      "https://github.com/neha-arshad/project-Online-ticket-system-flo.git",
  },
  {
    id: "3",
    title: "Typing Speed Tester",
    description: "Project 2",
    image: "/images/typing-speed-tester.webp",
    tag: ["view"],
    gitUrl:
      "https://github.com/neha-arshad/project-typing-speed-tester-WPM-.git",
    previewUrl:
      "https://github.com/neha-arshad/project-typing-speed-tester-WPM-.git",
  },
  {
    id: "4",
    title: "OOP My Bank",
    description: "Project 3",
    image: "/images/my-bank.jpg",
    tag: ["view"],
    gitUrl: "https://github.com/neha-arshad/project_oop_my_Bank.git",
    previewUrl: "https://github.com/neha-arshad/project_oop_my_Bank.git",
  },
  {
    id: "5",
    title: "Count Down Timer",
    description: "Project 4",
    image: "/images/count-down.jpg",
    tag: ["view"],
    gitUrl: "https://github.com/neha-arshad/project_count_down_timer.git",
    previewUrl: "https://github.com/neha-arshad/project_count_down_timer.git",
  },
  {
    id: "6",
    title: "Currency Converter",
    description: "Project 5",
    image: "/images/currency-converteer.jfif",
    tag: ["view" ],
    gitUrl: "https://github.com/neha-arshad/project-currency-converter.git",
    previewUrl: "https://github.com/neha-arshad/project-currency-converter.git",
  },
  {
    id: "7",
    title: "Todo List",
    description: "Project 6",
    image: "/images/todo-list.jfif",
    tag: ["view"],
    gitUrl: "https://github.com/neha-arshad/Project-todo-list.git",
    previewUrl: "https://github.com/neha-arshad/Project-todo-list.git",
  },
  {
    id: "8",
    title: "ATM",
    description: "Project 7",
    image: "/images/ATM2.jfif",
    tag: ["view"],
    gitUrl: "https://github.com/neha-arshad/project_atm_cli.git",
    previewUrl: "https://github.com/neha-arshad/project_atm_cli.git",
  },
  {
    id: "9",
    title: "Number Guessing Game",
    description: "Project 8",
    image: "/images/number-guessing.jfif",
    tag: ["view"],
    gitUrl: "https://github.com/neha-arshad/project-cli-word-counter.git",
    previewUrl: "https://github.com/neha-arshad/project-cli-word-counter.git",
  },
  {
    id: "10",
    title: "Quiz",
    description: "Project 9",
    image: "/images/quiz.jpg",
    tag: ["view"],
    gitUrl: "https://github.com/neha-arshad/project-quiz-cli.git",
    previewUrl: "https://github.com/neha-arshad/project-quiz-cli.git",
  },
  {
    id: "11",
    title: "Word Counter",
    description: "Project 10",
    image: "/images/word-counter.jpg",
    tag: ["view"],
    gitUrl: "https://github.com/neha-arshad/project-cli-word-counter.git",
    previewUrl: "https://github.com/neha-arshad/project-cli-word-counter.git",
  },
  {
    id: "12",
    title: "Personality CLI",
    description: "Project 11",
    image: "/images/oop.jfif",
    tag: ["view",],
    gitUrl: "https://github.com/neha-arshad/oop-personality-cli.git",
    previewUrl: "https://github.com/neha-arshad/oop-personality-cli.git",
  },
  {
    id: "13",
    title: "Calculator",
    description: "Project 12",
    image: "/images/calculator.png",
    tag: ["view",],
    gitUrl: "https://github.com/neha-arshad/calc-cli.git",
    previewUrl: "https://github.com/neha-arshad/calc-cli.git",
  },
];

 const Projectsection = () => {
  const [tag, setTag] = useState("view");

  const handleTagChange = (newTag: unknown) => {
    setTag(newTag as string); 
  };

	const filteredProjects = ProjectData.filter((project) => {
		return project.tag.includes(tag);
	});

  return (
    <>
		<div id='projects'>
      <h1 className="text-white font-bold text-3xl text-center">MY PROJECTS</h1>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-2">
        <Projectag
          name="view"
          onClick={handleTagChange}
          active={tag === "view"} 
          isSelected={tag === "view"}
        />
        <Projectag
          name="hide"
          onClick={handleTagChange}
          active={tag === "hide"} 
          isSelected={tag === "hide"}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {filteredProjects.map((Project) => (

          <Projectcard
            key={Project.id}
            title={Project.title}
            description={Project.description}
            imagesUrl={Project.image}
            tag={Project.tag}
             gitUrl={Project.gitUrl}
            previewUrl={Project.previewUrl}
          />
        ))}
				
      </div>
			</div>
    </>
  );
};

export default Projectsection;
