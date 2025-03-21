import { ProjectTileInterface } from "../interfaces/frontendInterfaces";
import PenLogo from '../assets/icons/pen.jpg';
import GitLogo from '../assets/icons/git.jpg';
import KeyboardLogo from '../assets/icons/keyboard.jpg';
import FilterLogo from '../assets/icons/filter.jpg';


const projectsData: ProjectTileInterface[] = [
    {
        projectName: "Online Collaboard",
        projectDescription: "Collaboard is online drawing application, which allows multiple user to create rooms to draw together.",
        projectLogo : PenLogo,
        githubLink: "https://github.com/nikhilmeenaa/whiteboard",
        liveDemoLink: "https://board-3254.onrender.com/"
    },
    {
        projectName: "VS Commit Automate",
        projectDescription: "VS Code extension, which analyzes changes done and automates writing commit message for you.",
        projectLogo : GitLogo,
        githubLink: "https://github.com/nikhilmeenaa/AI-GitCommits",
        liveDemoLink: ""
    },
    {
        projectName: "AceType",
        projectDescription: "Acetype, is a typing practise application, makes user practise the english language patterns along with normal typing practise.... ",
        projectLogo : KeyboardLogo,
        githubLink: "https://github.com/nikhilmeenaa/Type-Ace",
        liveDemoLink: "https://acetype.onrender.com/"
    },
    {
        projectName: "LinkedIn Posts Filter",
        projectDescription: "Chrome extension to filter Linkedin feed, removing non hiring posts, with dash to filter cotent based on user preferences",
        projectLogo : FilterLogo,
        githubLink: "https://github.com/nikhilmeenaa/linkedin-posts-filter-llm-and-static",
        liveDemoLink: "https://chromewebstore.google.com/detail/linkedin-posts-filter/lgjobdoomhngeepifkmdjfecdagnfcah?pli=1"
    },
]
export default projectsData;