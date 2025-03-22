import { ExperienceTileInterface } from "../interfaces/frontendInterfaces";
import FinarbLogo from '../assets/logo/finarbLogo.png';
import AutotextLogo from '../assets/logo/autotextLogo.png';
import CodechefLogo from '../assets/logo/codechefLogo.png';


const experienceData
: ExperienceTileInterface[] = [
    {
        companyName: "Finarb",
        companyLogo: FinarbLogo,
        roleName: "Fullstack Developer (SDE)",
        experienceDescription: "Developed an AI-powered solution with FastAPI, optimized data pipelines, and a data-rich React frontend with real-time features via Sockets microservice. Ensured robust reliability with 1000+ test cases across the stack.",
        startDate: "Jan 2024",
        endDate: "Current",
    },
    {
        companyName: "Autotext",
        companyLogo: AutotextLogo,
        roleName: "Jr Software Developer",
        experienceDescription: "Streamlined social media integration, improving reliability by 25% and automating posts. Built data pipelines for faster insights, increased user acquisition by 20% with a referral system, and optimized CI/CD, cutting deployment time and reducing overhead.",
        startDate: "Aug 2023",
        endDate: "Dec 2023",
    },
    {
        companyName: "Codechef",
        companyLogo: CodechefLogo,
        roleName: "DSA Doubt Solver",
        experienceDescription: "Resolved complex doubts for 80+ students in Data Structures and Competitive Programming, offering strategic guidance. Mentored 25+ students, boosting their coding skills through personalized learning paths.",
        startDate: "Nov 2022",
        endDate: "May 2023",
    }
]

export default experienceData
;