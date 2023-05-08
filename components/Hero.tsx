import React from 'react';
import {Cursor, useTypewriter} from "react-simple-typewriter";
import BackgroundCircles from "./Circles";
import Image from "next/image";
import Link from "next/link";


type Props = {};

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Hello",
            "World",
            "And",
            "Welcome"],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles/>
            <Image
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
                src="https://www.shin-sekai.fr/51780-home_default/naruto-shippuden-figurine-itachi-uchiha-wall-statue.jpg"
                alt="Itachi Uchiha"
                width={128}
                height={128}
            >
            </Image>
            <div className="z-20">
                <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                    <p className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                        Software Engineer
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
                    <Link href={"#contact"}>
                        <button className="hero-button">Contact</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
