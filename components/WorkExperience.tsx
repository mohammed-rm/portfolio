import React from "react";
import {motion} from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {}

export default function WorkExperience({}: Props) {
    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.5}}
            className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full
         px-10 justify-evenly mx-auto items-center space-y-20">

            <h3 className="custom-header">
                Experience
            </h3>
            <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
                <ExperienceCard></ExperienceCard>
                <ExperienceCard></ExperienceCard>
                <ExperienceCard></ExperienceCard>
                <ExperienceCard></ExperienceCard>

            </div>
        </motion.div>
    );
}


