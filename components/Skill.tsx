import React from "react";
import {motion} from "framer-motion";
import {Skill as SkillType} from "../typings";
import {urlFor} from "../sanity";

type Props = {
    skill: SkillType;
    directionLeft?: boolean;
};

export default function Skill({skill, directionLeft}: Props) {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0,
                }}
                transition={{duration: 1}}
                whileInView={{x: 0, opacity: 1}}
                src={urlFor(skill?.image).url()}
                alt="Skill"
                className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28
            xl:w-32 xl:h-32 filter group-hover:brightness-50 transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 group-hover:bg-white transition duration-300 ease-linear
            w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-3xl font-bold text-black">{skill.progress}%</p>
                </div>
            </div>
        </div>
    );
}
