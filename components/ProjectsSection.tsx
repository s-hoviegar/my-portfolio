import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Zhuan Restaurant",
    description:
      "A single page application built for a restaurant which contains menu, about page, manage page and so on. The admin can add, edit or delete menu items freely. Normal users (or visitors) can only veiw items and they are able to add, delete or change items in their order list. Any user can sign up and login but only the predefined admin can manage the items. This website offers two different languages with two different layouts (English with LTR layout & Persian with RTL layout).",
    image: "/thankfulthoughts.png",
    github: "https://github.com/s-hoviegar/zhuan-restaurant",
    link: "https://zhuan-restaurant.netlify.app",
  },
  {
    name: "Offline hash-based password manager",
    description:
      "An offline hash-based password manager which doesn't store any password on any cloud storage or remote server.",
    image: "/thankfulthoughts.png",
    github: "https://github.com/s-hoviegar/hash-based-password-manager",
    link: "https://hash-based-password-manager.netlify.app",
  },
  {
    name: "Cute Planner",
    description:
      "This react app is a simple project which mixes two different applications in one: a calender and a todo list (or reminder). With the help of this app you can easily add new tasks and track the time remaining for any particular task. This project is a simple CRUD web application that uses firebase realtime databases and firebase authentication for users login and signup.",
    image: "/thankfulthoughts.png",
    github: "https://github.com/s-hoviegar/cute-planner",
    link: "https://cute-planner.netlify.app",
  },
  {
    name: "Subtraction Game",
    description:
      'The Subtraction Game (One-Heap Game of Nim) is a mathematical turn-based strategy game that involves removing objects from a set. The objective of the game is to be the player who doesn\'t take the last object. Players take turns removing objects, but they must remove at least one object and at max the number defined in "New Game" page with "Moves" field. The player who takes the last object, loses the game. So be carefull choosing the objects and make your opponent take the last one! Be aware that you cannot beat the computer if the first turn is set to "Computer".',
    image: "/thankfulthoughts.png",
    github: "https://github.com/s-hoviegar/subtraction-game",
    link: "https://subtraction-game.netlify.app",
  },
  {
    name: "Conway Game Of Life ⠠⠵",
    description:
      "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. It is Turing complete and can simulate a universal constructor or any other Turing machine.",
    image: "/thankfulthoughts.png",
    github: "https://github.com/s-hoviegar/conway-game-of-life",
    link: "https://game-of-life-conway-reactjs.netlify.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
