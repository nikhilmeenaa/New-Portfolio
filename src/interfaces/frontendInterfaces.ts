import { StaticImageData } from "next/image";

export interface ExperienceTileInterface {
    companyName: string;
    companyLogo: StaticImageData;
    roleName: string;
    experienceDescription: string;
    startDate: string;
    endDate: string;
    // technologiesUsed: {technologyName:string, technologyImage:  StaticImageData }[]
}
export interface ProjectTileInterface {
    projectLogo: StaticImageData;
    projectName: string;
    projectDescription: string;
    githubLink: string;
    liveDemoLink: string;
    backgroundColor: string;
    textColor: string;
    technologiesUsed: {technologyName:string, technologyImage:  StaticImageData }[]
}