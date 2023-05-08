import React from "react";
import {motion} from "framer-motion";
import Skill from "./Skill";

type Props = {};

export default function Skills(props: Props) {
    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.5}}
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row
            max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">

            <h3 className="custom-header">
                Skills
            </h3>

            <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
                Hover over the cards to see the skills
            </h3>

            <div className="grid grid-cols-4 gap-5">
                <Skill directionLeft={true}/>
                <Skill directionLeft={true}/>
                <Skill directionLeft={true}/>
                <Skill directionLeft={true}/>
                <Skill directionLeft={true}/>
                <Skill directionLeft={true}/>
                <Skill directionLeft={true}/>
                <Skill directionLeft={true}/>
                <Skill directionLeft={true}/>
                <Skill directionLeft={true}/>
            </div>
        </motion.div>
    );
}
