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
        experienceDescription: "Engineered a mechanism provision to dedicated virtual machines to boost the exploratory data analystis Engineered a mechanism provision to dedicated virtual machines to boost the exploratory data analystis",
        startDate: "Jan 2024",
        endDate: "Current",
    },
    {
        companyName: "Autotext",
        companyLogo: AutotextLogo,
        roleName: "Jr Software Developer",
        experienceDescription: "EBuilt a full-stack application for sharing Power BIreports across organizations, with role-based access. Currently serves 254 users, streamlining report distribution and enhancing data security for 10+ departments.",
        startDate: "Aug 2023",
        endDate: "Dec 2023",
    },
    {
        companyName: "Codechef",
        companyLogo: CodechefLogo,
        roleName: "DSA Doubt Solver",
        experienceDescription: "Led coaching sessions that improved students problem-solving skills by 45% and boosted their rankings by 30%, Provided targeted mentorship on data structures, resulting in a 40% increase in performance in competitive programming.",
        startDate: "Nov 2022",
        endDate: "May 2023",
    }
]

export default experienceData
;