import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {NextPage} from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
    return (
        <div className="bg-[rgb(36,37,38)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
            <Head>
                <title>Create Next App</title>
            </Head>

            <Header/>

            {/* Hero */}
            <section id="hero" className="snap-center">
                <Hero/>
            </section>

            {/* About */}

            {/* Experience */}

            {/* Skills */}

            {/* Projects */}

            {/* Contact */}
        </div>
    );
};

export default Home;
