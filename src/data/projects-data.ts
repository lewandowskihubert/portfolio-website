
import { ProjectsInterface } from "../types/projects-interface";
import { FaReact } from "react-icons/fa";
import { SiRedux, SiTypescript } from "react-icons/si";

export const projects:ProjectsInterface[] = [{
    title: "Todolist",
    description: "It's a todolist website.",
    image: "https://i.ibb.co/qMRDRK8/todolist.png",
    technologies: [
      { name: "React", icon: FaReact},
      { name: "Typescript", icon: SiTypescript },
    ],
    githubLink: "https://github.com/lewandowskihubert/to-do-list",
  },
  {
    title: "Steemlet",
    description: "It's a website about videogames.",
    image: "https://i.ibb.co/MkM423d/steemlet.png",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "Typescript", icon: SiTypescript },
      {name:"Redux", icon: SiRedux}
    ],
    githubLink: "https://github.com/lewandowskihubert/project-sda-gry",
  },
  
  {
    title:"GigaScore",
    description: "It's a website with football fixtures",
    image:"https://i.ibb.co/VvQ1Dkp/Work-in-progress.png",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "Typescript", icon: SiTypescript },
      {name:"Redux", icon: SiRedux}
    ],
    githubLink:"https://github.com/GigaSzefy/gigascore"
  }]