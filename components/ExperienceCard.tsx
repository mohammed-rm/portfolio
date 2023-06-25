import React from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import {Experience} from "../typings";
import {urlFor} from "../sanity";

type Props = {
    experience: Experience;
}

export default function ExperienceCard({experience}: Props) {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
        w-[500px] md:w-[600px] xl:w-[700px] snap-center bg-[#292929] p-10 hover:opacity-100
        opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden border border-[#F7AB0A]">
            <motion.img
                initial={{opacity: 0, y: -100}}
                transition={{duration: 1.2}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover
                object-center"
                //src={urlFor(experience?.companyImage).url()}
                alt="Company Logo"
            />

            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">CEO of Hopymed</h4>
                <p className="font-bold text-2xl mt-1">My Company</p>
                <div className="flex space-x-2 my-2">
                    {experience.technologies.map((technology) => (
                        <Image
                            key={technology._id}
                            width={40}
                            height={40}
                            className="h-10 w-10 rounded-full"
                            src={urlFor(technology.image).url()}
                            alt="Technology"
                        />
                    ))}
                </div>
                <p className="uppercase py-5 text-gray-300">
                    {new Date(experience.dateStarted).toDateString()} -{" "}
                    {experience.isCurrentlyWorkingHere
                        ? "Present"
                        : new Date(experience.dateEnded).toDateString()}
                </p>

                <ul className="list-disc space-y-4 ml-5 text-lg max-h-80 w-4/5 pr-5 overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
                    {experience.points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    );
}
