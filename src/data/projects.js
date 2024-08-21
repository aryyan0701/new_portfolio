import Task_Tracker from "../assets/Projects/Task_Tracker.png";
import Quizzify from "../assets/Projects/Quizzify.png";
import Bloggify from "../assets/Projects/Bloggify.png";
import Sandbox from "../assets/Projects/Sandbox.png";
import Type_Verse from "../assets/Projects/Type_Verse.png";
import Guessing_Game from "../assets/Projects/Guessing_Game.png";
import Currency_Converter from "../assets/Projects/Currency_Converter.png";
import Repofinder from "../assets/Projects/Repofinder.png";
import briefify from "../assets/Projects/briefify.png";
import Battelfy from "../assets/Projects/Battelfy.png";


const projects = [
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
        img: Task_Tracker,
        name: "Ecommerce_Dashboard",
        demo: "https://notes-seven-liart.vercel.app/",
        code: "https://github.com/aryyan0701/notes",
        description: " This platform is designed to help users manage their daily tasks effectively, built with reactjs, tailwind for styling, framer-motion library, vercel.",
        style: {
            shadow: "shadow-[#3498AB]",
            cover: "from-[#3498AB]",
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
    // {
    //     img: Bloggify,
    //     name: "Bloggify",
    //     demo: "https://aryyan0701.github.io/Bloggify/",
    //     code: "https://github.com/aryyan0701/Bloggify",
    //     description: "This website is dedicated to providing users a simple static UI templet of blog site.",
    //     style: {
    //         shadow: "shadow-[#23CEEE]",
    //         cover: "from-[#23CEEE]",
    //         display: " hidden group-hover:flex"
    //     }
    // },
    {
        img: Sandbox,
        name: "sandbox_clone",
        demo: "https://aryyan0701.github.io/sandbox_clone/",
        code: "https://github.com/aryyan0701/sandbox_clone",
        description: "This project is a clone of the Sandbox website, offering seamless and impressive design both in web and responsive formats.",
        style: {
            shadow: "shadow-[#F8FAFC]",
            cover: "from-[#F8FAFC]",
            display: " hidden group-hover:flex"
        }
    },
    // {
    //     img: Guessing_Game,
    //     name: "Guess-the-name",
    //     demo: "https://extraordinary-fudge-e2bb79.netlify.app/",
    //     code: "https://github.com/aryyan0701/Guess-the-name",
    //     description: "Simple game to guess the words as per the hints and images provided, created using html, css and venila Js",
    //     style: {
    //         shadow: "shadow-[#FFD43B]",
    //         cover: "from-[#FFD43B]",
    //         display: " hidden group-hover:flex"
    //     }
    // },
    {
        img: Type_Verse,
        name: "Type Verse",
        demo: "https://aryyan0701.github.io/type_verse/",
        code: "https://github.com/aryyan0701/type_verse",
        description: "Type-it is a minimalistic typing speed testing app built with React and TailwindCSS that is highly inspired by other platform. The app allows users to test and improve their typing speed and accuracy. ",
        style: {
            shadow: "shadow-[#011F3F]",
            cover: "from-[#011F3F]",
            display: " hidden group-hover:flex"
        }
    },
    // {
    //     img: TODO_APP,
    //     name: "TODO APP",
    //     demo: "https://meen-to-do-app.onrender.com/",
    //     code: "https://github.com/dhawal-793/MEEN-TODO-APP",
    //     description: "MEEN ToDO App is a very simple Todo App created using MongoDb,Express Js EJs and Node Js.",
    //     style: {
    //         shadow: "shadow-[#A582E2]",
    //         cover: "from-[#A582E2]",
    //         display: " hidden group-hover:flex"
    //     }
    // },
    {
        img: Currency_Converter,
        name: "Currency_Converter",
        demo: "",
        code: "https://github.com/aryyan0701/Currency_converter",
        description: "Simple Currency Converter app created using HTML, CSS, JS, Bootstrap and REST api.",
        style: {
            shadow: "shadow-[#CEC3FB]",
            cover: "from-[#CEC3FB]",
            display: " hidden group-hover:flex"
        }
    },
    // {
    //     img: CLI_TMA,
    //     name: "Task Manager CLI",
    //     demo: "https://github.com/dhawal-793/Command-line-application-for-Task-Management",
    //     code: "https://github.com/dhawal-793/Command-line-application-for-Task-Management",
    //     description: "This is a Task Management CLI App created using C++, here user can create, read, Update and delete tasks.",
    //     style: {
    //         shadow: "shadow-[#763145]",
    //         cover: "from-[#763145]",
    //         display: " hidden group-hover:flex"
    //     }
    // },
    // {
    //     img: "",
    //     name: "WordCloud Generator",
    //     demo: "https://github.com/dhawal-793/Wordcloud-maker",
    //     code: "https://github.com/dhawal-793/Wordcloud-maker",
    //     description: "This is a WordCloud Maker, Created using Python. User can create WordCloud by giving paragraph of text as Input.   ",
    //     style: {
    //         shadow: "shadow-emerald-500",
    //         cover: "from-emerald-500",
    // display:" hidden group-hover:flex"
    //     }
    // },
]
export default projects;