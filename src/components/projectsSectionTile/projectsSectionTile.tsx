"use client";
import { ProjectTileInterface } from "@/src/interfaces/frontendInterfaces";
import Image from "next/image";
import GithubLogo from "../../assets/icons/github.png";
import "./projectsSectionTile.css";
import { useRouter } from "next/navigation";
import TechnologiesList from "../TechnologiesComponent/Technologies";

const ProjectSectionTile = (data: ProjectTileInterface) => {
  const handleGoToGithubrepo = (repository: string) => {
    if (repository && typeof window !== "undefined") {
      window.open(repository);
    }
  };
  const handleGoToLiveDemp = (liveDemoLink: string) => {
    if (liveDemoLink && typeof window !== "undefined") {
      window.open(liveDemoLink);
    }
  };
  return (
    <div
      className="projectSectionTile"
      style={{ backgroundColor: data.backgroundColor }}
    >
      <div className="projectLogoSection">
        <Image src={data.projectLogo} alt={data.projectName} />
      </div>
      <div className="DescriptionSection" style={{ color: data.textColor }}>
        {data.projectDescription}
      </div>
      <div className="githubLiveDemoSection">
        <Image
          src={GithubLogo}
          alt={"Github"}
          className="githubLogo"
          height={40}
          onClick={() => handleGoToGithubrepo(data.githubLink)}
        />
        <TechnologiesList technologiesData={data} />

        <span
          onClick={() => handleGoToLiveDemp(data.liveDemoLink)}
          style={{ color: data.textColor }}
        >
          Live Demo
        </span>
      </div>
    </div>
  );
};
export default ProjectSectionTile;
