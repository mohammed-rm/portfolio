import Head from 'next/head'
import {NextPage} from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";

const Home: NextPage = () => {
    return (
        <div className="bg-[rgb(36,37,38)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
            <Head>
                <title>Create Next App</title>
            </Head>

            <Header/>

            {/* Hero */}
            <section id="hero" className="snap-start">
                <Hero/>
            </section>

            {/* About */}
            <section id="about" className="snap-center">
                <About/>
            </section>

            {/* Experience */}

            {/* Skills */}

            {/* Projects */}

            {/* Contact */}
        </div>
    );
};

export default Home;
