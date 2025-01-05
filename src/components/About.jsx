import React from 'react'
import { Download } from './Icons';
import resume from "../assets/resume.pdf";
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
                </div>
                <div className='flex flex-col justify-center w-full px-2 xs: sm:px-12 md:px-4 lg:px-14 text-white '>
                    <h3 className='text-2xl xs:text-3xl  sm:text-4xl md:text-5xl lg:text-6xl font-semibold '>Hi, I'm <span className='text-cyan-500 block xs:inline'>Aryan Kadam</span></h3>
                    <div className='text-gray-400 py-4 space-y-2 md:space-y-4 md:pt-8 lg:pt-12 font-semibold text-justify'>
                        <p className='leading-tight'>
                        I am a web developer with a passion for building dynamic, user-friendly interfaces.
                        </p>
                        <p className='leading-tight'>During my internship as a Frontend Developer, I gained hands-on experience in Angular and Bootstrap, creating responsive and visually engaging designs. My journey into development has also expanded to include React.js and Next.js, where I’ve built scalable, high-performance applications from scratch.</p>
                        <p className='leading-tight'>
                        With a versatile skill set that includes JavaScript, TypeScript, React + Next.js, Tailwind, NextAuth, Node.js, Firebase, and GitHub, I bring both creativity and technical expertise to every project I take on. My focus is on delivering exceptional user experiences with intuitive, responsive, and optimized UI components.
                        </p>
                        <p className='leading-tight'>
                        I thrive on solving challenges, learning new technologies, and contributing to impactful projects that make a difference.
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