
import {  IconType } from "react-icons";

export interface ProjectsInterface {
    title:string;
    description:string;
    image:string;
    technologies:Technology[];
    githubLink:string;
}

interface Technology {
    name:string;
    icon:IconType;
}

