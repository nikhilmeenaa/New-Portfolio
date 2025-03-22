import { ProjectTileInterface } from "../interfaces/frontendInterfaces";
import PenLogo from '../assets/icons/pen.jpg';
import GitLogo from '../assets/icons/git.jpg';
import KeyboardLogo from '../assets/icons/keyboard.jpg';
import FilterLogo from '../assets/icons/filter.jpg';


const projectsData: ProjectTileInterface[] = [
    {
        projectName: "Collaborative Drawing Board",
        projectDescription: "Collaborative Drawing Board",
        projectLogo : PenLogo,
        githubLink: "https://github.com/nikhilmeenaa/whiteboard",
        liveDemoLink: "https://board-3254.onrender.com/",
        backgroundColor: "#28183A",
        textColor: "#D6CAE2",
        technologiesUsed: []
    },
    // {
    //     projectName: "VS Commit Automate",
    //     projectDescription: "VS Code extension, which analyzes changes done and automates writing commit message for you.",
    //     projectLogo : GitLogo,
    //     githubLink: "https://github.com/nikhilmeenaa/AI-GitCommits",
    //     liveDemoLink: ""
    // },
    {
        projectName: "AceType",
        projectDescription: "AceType",
        projectLogo : KeyboardLogo,
        githubLink: "https://github.com/nikhilmeenaa/Type-Ace",
        liveDemoLink: "https://acetype.onrender.com/",
        backgroundColor: "black",
        textColor: "#D6CAE2",
        technologiesUsed: []

    },
    {
        projectName: "LinkedIn Posts Filter",
        projectDescription: "LinkedIn Posts Filter",
        projectLogo : FilterLogo,
        githubLink: "https://github.com/nikhilmeenaa/linkedin-posts-filter-llm-and-static",
        liveDemoLink: "https://chromewebstore.google.com/detail/linkedin-posts-filter/lgjobdoomhngeepifkmdjfecdagnfcah?pli=1",
        backgroundColor: "white", 
        textColor: "black",
        technologiesUsed: []
    },
]
export default projectsData;