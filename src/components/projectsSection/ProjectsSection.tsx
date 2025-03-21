import projectsData from "@/src/data/projectsData";
import ProjectSectionTile from "../projectsSectionTile/projectsSectionTile";
import "./ProjectsSection.css";

const ProjectsSection = () => {
  return (
    <div className="ProjectsGridContainer">
      {projectsData.map((data, index) => (
        <ProjectSectionTile {...data} key={"projectsGrid" + index} />
      ))}
    </div>
  );
};

export default ProjectsSection;
