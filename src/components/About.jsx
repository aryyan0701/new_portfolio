import React from 'react'
import { Download } from './Icons';
import resume from "../assets/resume.pdf"
// import profile from "../assets/profile.jpg"
import SectionHeading from './SectionHeading';
import techStack from '../data/techStack';
import Skills from './Skills';

const About = () => {
    return (
        <>
        <div id='About' className=' pt-8 h-full min-h-screen w-full flex items-center  bg-gradient-to-b  from-gray-900 via-black to-black '>
            <div className='section justify-between'>
                <SectionHeading heading="About Me" />
                <div className='mb-10  flex flex-col justify-center '>
                    {/* <img src={profile} alt="Profile" width="auto" height="auto" loading='lazy' title='Profile Picture' className='cursor-pointer grayscale hover:grayscale-0 hover:scale-[1.02] transition-all delay-75 border-4 border-transparent hover:border-white duration-300 rounded-2xl min-w-[240px] w-1/2 mx-auto  md:w-[270px]' /> */}
                </div>
                <div className='flex flex-col justify-center w-full px-2 xs: sm:px-12 md:px-4 lg:px-14 text-white '>
                    <h3 className='text-2xl xs:text-3xl  sm:text-4xl md:text-5xl lg:text-6xl font-semibold '>Hi, I'm <span className='text-cyan-500 block xs:inline'>Aryan Kadam</span></h3>
                    <div className='text-gray-400 py-4 space-y-2 md:space-y-2 md:pt-8 lg:pt-12 font-semibold text-justify'>
                        <p className='leading-tight'>
                        I am currently pursuing b.tech in IT, As a Developer specializing in web development With hands-on experience in crafting dynamic user interfaces, I bring a blend of creativity and technical expertise to my role.
                        </p>
                        <p className='leading-tight'> Having secured an internship as a Frontend Developer at a reputable company, I've dived headfirst into Angular development, harnessing the power of Bootstrap for responsive and visually appealing designs. Additionally, my journey has acquainted me with Node.js, empowering me to contribute to server-side functionalities as well.</p>
                        <p className='leading-tight'>
                        Beyond Angular, I possess a versatile skill set. I am proficient in javascript, TypeScript, React.js, Bootstrap, Firebase, and GitHub, ensuring that I am well-equipped to adapt to diverse project requirements.
                        </p>
                        <p className='leading-tight'>
                        My focus lies in delivering exceptional user experiences through intuitive and scalable UI components.I have honed my skills in crafting impressive user interfaces, ensuring seamless navigation and optimal performance across devices.
                        </p>
                    </div>
                    <div className='py-5'>
                        <a href={resume} target="_blank" rel="noreferrer" download={true} className='z-30  group bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center gap-3 px-6 py-3  rounded-lg ease-linear duration-300 delay-75 transition-all cursor-pointer w-36 relative'>
                            <span className='pr-6 sm:pr-0 sm:group-hover:-translate-x-5 sm:transition-transform delay-[400ms] ease-out'>Resume</span>
                            <span className="absolute right-5 sm:scale-0 transition-all group-hover:scale-100 ease-in delay-200 animate-pulse duration-500 ">
                                <Download />
                            </span>
                        </a>
                    </div>
                </div>
            <Skills/>
            </div>
        </div>
        </>
    )
}


export default About;