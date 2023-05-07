import React from "react";
import {motion} from "framer-motion";
import Image from "next/image";

type Props = {}

export default function ExperienceCard({}: Props) {
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
                src="https://th.bing.com/th/id/OIP.c3Gj0DVBKnjavIjQ5SN7RAHaHa?pid=ImgDet&rs=1"
                alt="Twitter"
            />

            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">CEO of Hopymed</h4>
                <p className="font-bold text-2xl mt-1">My Company</p>
                <div className="flex space-x-2 my-2">
                    <Image
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full"
                        src="https://th.bing.com/th/id/OIP.c3Gj0DVBKnjavIjQ5SN7RAHaHa?pid=ImgDet&rs=1"
                        alt=""
                    />
                    <Image
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full"
                        src="https://th.bing.com/th/id/OIP.c3Gj0DVBKnjavIjQ5SN7RAHaHa?pid=ImgDet&rs=1"
                        alt=""
                    />
                    <Image
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full"
                        src="https://th.bing.com/th/id/OIP.c3Gj0DVBKnjavIjQ5SN7RAHaHa?pid=ImgDet&rs=1"
                        alt=""
                    />
                    <Image
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full"
                        src="https://th.bing.com/th/id/OIP.c3Gj0DVBKnjavIjQ5SN7RAHaHa?pid=ImgDet&rs=1"
                        alt=""
                    />

                </div>
                <p className="uppercase py-5 text-gray-300"> Started ... Ended ...</p>
                <ul className="list-disc space-y-4 ml-5 text-lg">
                    <li>Sumammary Points</li>
                    <li>Sumammary Points</li>
                    <li>Sumammary Points</li>
                    <li>Sumammary Points</li>
                    <li>Sumammary Points</li>
                </ul>
            </div>
        </article>
    );
}
