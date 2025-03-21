import { ProjectTileInterface } from "@/src/interfaces/frontendInterfaces";
import Image from "next/image";
import GithubLogo from "../../assets/icons/github.png";
import "./projectsSectionTile.css";
import { useRouter } from "next/navigation";

const ProjectSectionTile = (data: ProjectTileInterface) => {
  const handleGoToGithubrepo = (repository: string) => {
    if (repository) {
      window.open(repository);
    }
  };
  const handleGoToLiveDemp = (liveDemoLink: string) => {
    if (liveDemoLink) {
      window.open(liveDemoLink);
    }
  };
  return (
    <div className="projectSectionTile">
      <div className="projectLogoSection">
        <Image src={data.projectLogo} alt={data.projectName} height={150} />
      </div>
      <div className="DescriptionSection">{data.projectDescription}</div>
      <div className="githubLiveDemoSection">
        <Image
          src={GithubLogo}
          alt={"Github"}
          className="githubLogo"
          height={40}
          onClick={() => handleGoToGithubrepo(data.githubLink)}
        />
        <span onClick={() => handleGoToLiveDemp(data.liveDemoLink)}>
          Live Demo
        </span>
      </div>
    </div>
  );
};
export default ProjectSectionTile;
