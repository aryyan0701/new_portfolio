import NextAuth from "../assets/Projects/NextAuth.png"
import Quizzify from "../assets/Projects/Quizzify.png";
import Repofinder from "../assets/Projects/Repofinder.png";
import briefify from "../assets/Projects/briefify.png";
import Battelfy from "../assets/Projects/Battelfy.png";


const projects = [
    {
        img: NextAuth,
        name: "Authentication",
        demo: "https://github.com/aryyan0701/authetication",
        code: "https://github.com/aryyan0701/authetication",
        description: "NextJs authetication web app devloped using NextAuth + Manual authentication process.",
        style: {
            shadow: "shadow-[#011F3F]",
            cover: "from-[#011F3F]",
            display: " hidden group-hover:flex"
        }
    },
     {
        img: Battelfy,
        name: "Battelfy",
        demo: "https://e-sports-ashy.vercel.app/",
        code: "https://github.com/aryyan0701/e-sports",
        description: "This platform provides you all information about upcoming e-sport events, and functionality to participate in that events.  ",
        style: {
            shadow: "shadow-[#A582E2]",
            cover: "from-[#A582E2]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: "https://cdn.hashnode.com/res/hashnode/image/upload/v1721746767664/923b7fe6-a143-4e6c-aaff-941922f1c36b.png?auto=compress,format&format=webp",
        name: "Multilingual_React_App",
        demo: "https://react-i18-xi.vercel.app/",
        code: "https://github.com/aryyan0701/react-i18",
        description: "Multilingual is all about how to make a react app in any language using i18next or react-i18next.",
        style: {
            shadow: "shadow-[#FB923C]",
            cover: "from-[#FB923C]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: Repofinder,
        name: "Github-Repofinder",
        demo: "https://github-repofinder.vercel.app/",
        code: "https://github.com/aryyan0701/github_repofinder",
        description: " RepoFinder is platform where beginners, intermediate, advanced all type of dev's can find the repos as per there interest, knowledge and their personal tech stack to contribute in open source.",
        style: {
            shadow: "shadow-[#333333]",
            cover: "from-[#333333]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: briefify,
        name: "Briefify",
        demo: "https://text-summarization-six.vercel.app/",
        code: "https://github.com/aryyan0701/text-summarization",
        description: "This application leverages the power of AI to provide concise and accurate summaries, helping you save time and understand the core ideas of any lengthy text.",
        style: {
            shadow: "shadow-[#011F3F]",
            cover: "from-[#011F3F]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: Quizzify,
        name: "Quizzify",
        demo: "https://quizzad.netlify.app/",
        code: "https://github.com/aryyan0701/Quizzify",
        description: "This platform is dedicated to testing users' knowledge in the field of technology. built using react js, tailwind css, netlify",
        style: {
            shadow: "shadow-[#FB923C]",
            cover: "from-[#FB923C]",
            display: " hidden group-hover:flex"
        }
    },
   
]
export default projects;