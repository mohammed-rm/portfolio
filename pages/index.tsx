import Head from 'next/head'
import {NextPage} from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import GoUPButton from "../components/GoUPButton";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home: NextPage = () => {
    return (
        <div className="bg-[rgb(36,37,38)] text-white h-screen snap-y snap-mandatory
        overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
        scrollbar-thumb-[#F7AB0A]/80">
            <Head>
                <title>Create Next App</title>
            </Head>

            <Header/>

            <GoUPButton/>

            <section id="hero" className="snap-start">
                <Hero/>
            </section>

            <section id="about" className="snap-center">
                <About/>
            </section>

            <section id="experience" className="snap-center">
                <WorkExperience/>
            </section>

            <section id="skills" className="snap-start">
                <Skills/>
            </section>

            <section id="projects" className="snap-start">
                <Projects/>
            </section>

            <section id="contact" className="snap-start">
                <Contact/>
            </section>
        </div>
    );
};

export default Home;
