import Navbar from "@/src/components/navbar/Navbar";
import projectsData from "@/src/data/experienceData";
import ExperienceTile from "@/src/components/experienceTile/experienceTile";
import "./landingScreen.css";
import { aboutMeLandingPage, landingPageSalutation } from "@/src/data/aboutMe";
import MonthHeatMap from "@/src/components/contributionHeatMap/contributionsHeatMap";
import ProjectsSection from "@/src/components/projectsSection/ProjectsSection";
import SocialsSection from "@/src/components/SocialsSection/SocialsSection";

const LandingScreen = () => {
  return (
    <div className="LandingScreenContainer">
      <div className="landingPageAboutMeSection">
        {/* <div className="SectionHeading" style={{ marginBottom: "0.5rem" }}>
          About
        </div> */}
        <div className="landingPageAboutMeSectionContainer">
          <span className="landingPageSalutation">{landingPageSalutation}</span>
          <span className="landingPageAboutMeText">{aboutMeLandingPage}</span>
        </div>
      </div>
      <div className="SocialsSection">
        <div className="SectionHeading">Socials</div>
        <SocialsSection />
      </div>
      <div className="ProjectsSection">
        <div className="SectionHeading">Experience</div>
        {projectsData.map((data, index) => {
          return <ExperienceTile key={"ExperienceTile" + index} {...data} />;
        })}
      </div>
      <div className="ProjectsSection">
        <div className="SectionHeading">Projects</div>
        <ProjectsSection />
      </div>

      <div className="ContributionsSection">
        <div className="SectionHeading">Github contributions</div>
        <MonthHeatMap
          startMonth={4}
          startYear={2024}
          endMonth={4}
          endYear={2025}
        />
      </div>

      <div className="CopyRightSection">
        <span>Copyright 2025 nikhilmeena.com</span>
      </div>
    </div>
  );
};

export default LandingScreen;
