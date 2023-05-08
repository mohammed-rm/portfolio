import React from "react";
import {motion} from "framer-motion";

type Props = {};

export default function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
                    <div key={index}
                         className="flex-shrink-0 snap-center flex flex-col space-y-5
                         items-center justify-center p-20 md:p-44 w-screen h-screen">
                        <motion.img
                            initial={{opacity: 0, y: -300}}
                            transition={{duration: 1.2}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            src={`https://picsum.photos/seed/${index}/1920/1080`}
                            alt="Project"
                            className="rounded-3xl object-cover w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
                        />

                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-4xl font-semibold text-center">
                                <span className="underline decoration-[#F7AB0A]/50">
                                    Case Study {index + 1} of {projects.length}:
                                </span>{" "}
                                Twitter Clone
                            </h4>
                            <p className="text-lg text-center md:text-left">
                                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] skew-y-12"/>
        </motion.div>
    );
}
