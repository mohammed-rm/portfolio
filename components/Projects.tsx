import React from "react";
import {motion} from "framer-motion";
import {Project} from "../typings";
import {urlFor} from "../sanity";
import Image from "next/image";

type Props = {
    projects: Project[];
};

export default function Projects({projects}: Props) {
    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.5}}
            className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
            max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="custom-header">
                Projects
            </h3>
            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
            scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
                {projects.map((project, index) => (
                    <div key={project._id}
                         className="flex-shrink-0 snap-center flex flex-col space-y-5
                         items-center justify-center p-20 md:p-44 w-screen h-screen">
                        <motion.img
                            initial={{opacity: 0, y: -300}}
                            transition={{duration: 1.2}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            src={urlFor(project?.image).url()}
                            alt="Project"
                            className="rounded-3xl object-cover w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
                        />

                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-4xl font-semibold text-center">
                                <span className="underline decoration-[#F7AB0A]/50">
                                    Case Study {index + 1} of {projects.length}:
                                </span>{" "}
                                {project?.title}
                            </h4>
                            <div className="flex items-center space-x-2 justify-center">
                                {project?.technologies.map((technology) => (
                                    <Image
                                        className="h-10 w-10"
                                        key={technology._id}
                                        src={urlFor(technology.image).url()}
                                        alt="Technology"
                                        width={40}
                                        height={40}
                                    />
                                ))}
                            </div>
                            <p className="text-lg text-center md:text-left">
                                {project?.summary}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] skew-y-12"/>
        </motion.div>
    );
}
