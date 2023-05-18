import React from 'react';
import {Cursor, useTypewriter} from "react-simple-typewriter";
import BackgroundCircles from "./Circles";
import Image from "next/image";
import Link from "next/link";
import {PageInfo} from "../typings";
import {urlFor} from "../sanity";


type Props = {
    pageInfo: PageInfo;
};

export default function Hero({pageInfo}: Props) {
    const [text, count] = useTypewriter({
        words: [`Hello, I'm ${pageInfo?.name}`,
            "Welcome to my portfolio"
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles/>
            <Image
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
                src={urlFor(pageInfo?.heroImage).url()}
                alt="Profile Picture"
                width={128}
                height={128}
            >
            </Image>
            <div className="z-20">
                <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                    <p className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                        {pageInfo?.role}
                    </p>
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#F7AB0A"/>
                </h1>
                <div
                    className="pt-5">
                    <Link href={"#about"}>
                        <button className="hero-button">About</button>
                    </Link>
                    <Link href={"#experience"}>
                        <button className="hero-button">Experience</button>
                    </Link>
                    <Link href={"#skills"}>
                        <button className="hero-button">Skills</button>
                    </Link>
                    <Link href={"#projects"}>
                        <button className="hero-button">Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
