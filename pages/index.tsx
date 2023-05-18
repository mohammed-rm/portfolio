import Head from 'next/head'
import {GetStaticProps} from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Link from "next/link";
import {ArrowUpCircleIcon} from "@heroicons/react/24/solid";
import {Experience, PageInfo, Project, Skill, Social} from "../typings";
import {fetchPageInfos} from "../utils/fetchPageInfos";
import {fetchExperiences} from "../utils/fetchExperiences";
import {fetchSkills} from "../utils/fetchSkills";
import {fetchProjects} from "../utils/fetchProjects";
import {fetchSocials} from "../utils/fetchSocials";

type Props = {
    pageInfo: PageInfo;
    experiences: Experience[];
    skills: Skill[];
    projects: Project[];
    socials: Social[];
}

const Home = ({pageInfo, experiences, skills, projects, socials}: Props) => {
    return (
        <div className="bg-[rgb(36,37,38)] text-white h-screen snap-y snap-mandatory
        overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
        scrollbar-thumb-[#F7AB0A]/80">
            <Head>
                <title>Create Next App</title>
            </Head>

            <Header socials={socials}/>

            <section id="hero" className="snap-start">
                <Hero pageInfo={pageInfo}/>
            </section>

            <section id="about" className="snap-center">
                <About pageInfo={pageInfo}/>
            </section>

            <section id="experience" className="snap-center">
                <WorkExperience experiences={experiences}/>
            </section>

            <section id="skills" className="snap-start">
                <Skills skills={skills}/>
            </section>

            <section id="projects" className="snap-start">
                <Projects projects={projects}/>
            </section>

            <section id="contact" className="snap-start">
                <Contact/>
            </section>

            <Link href={"#hero"}>
                <footer className="fixed bottom-10 right-10 z-20">
                    <ArrowUpCircleIcon className="h-10 w-10 text-slate-400 hover:text-[#F7AB0A] cursor-pointer"/>
                </footer>
            </Link>

        </div>
    );
};

export default Home;


export const getStaticProps: GetStaticProps<Props> = async () => {
    const pageInfo: PageInfo = await fetchPageInfos();
    const experiences: Experience[] = await fetchExperiences();
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocials();

    return {
        props: {
            pageInfo,
            experiences,
            skills,
            projects,
            socials
        },
        revalidate: 10
    }
}


