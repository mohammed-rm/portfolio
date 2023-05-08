import React from "react";
import {motion} from "framer-motion";

type Props = {
    directionLeft?: boolean;
};

export default function Skill(directionLeft: Props) {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0,
                }}
                transition={{duration: 1}}
                whileInView={{x: 0, opacity: 1}}
                src="https://th.bing.com/th/id/OIP.c3Gj0DVBKnjavIjQ5SN7RAHaHa?pid=ImgDet&rs=1"
                alt="Skill"
                className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28
            xl:w-32 xl:h-32 filter group-hover:brightness-50 transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 group-hover:bg-white transition duration-300 ease-linear
            w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-3xl font-bold text-black">100%</p>
                </div>
            </div>
        </div>
    );
}
