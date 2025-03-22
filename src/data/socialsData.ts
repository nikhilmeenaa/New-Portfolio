import LinkedinIcon from '../assets/logo/linkedin.png';
import GithubIcon from '../assets/logo/github.png';
import InstagramIcon from '../assets/logo/instagram.png';
import GmailIcon from '../assets/logo/gmail.png';
import YoutubeIcon from '../assets/logo/youtube.png';
import { StaticImageData } from 'next/image';


const socialsData: {name: string, logo: StaticImageData, url: string}[] = [
    {
        name: "LinkedIn",
        logo: LinkedinIcon,
        url: "https://www.linkedin.com/in/nikhil-meena-8152771a1/"
    },
    {
        name: "Github",
        logo: GithubIcon,
        url: "https://github.com/nikhilmeenaa"
    },
    {
        name: "Instagram",
        logo: InstagramIcon,
        url: "http://instagram.com/nikhilkameena/"
    },
    // {
    //     name: "Twit",
    //     logo: "",
    //     url: "https://www.linkedin.com/in/nikhil-meena-8152771a1/"
    // },
    {
        name: "Gmail",
        logo: GmailIcon,
        url: "mailto:nikhilmeena809@gmail.com"
    },
    {
        name: "Youtube",
        logo: YoutubeIcon,
        url: "https://www.youtube.com/@nikhilmeena7258"
    },
]

export default socialsData;