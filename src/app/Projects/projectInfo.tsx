import { StaticImageData } from "next/image";

export interface ProjectInfo {
    projectName: string;
    technologiesUsed: string[];
    projectDescription: string[];
    codeLink: string;
    videoLink: string;
    srcImage: string | StaticImageData;
    deployedLink: string;
}
