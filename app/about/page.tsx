import React from "react";
import AboutIconCard from "../components/AboutIconCard";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
};

function About() {
    return (
        <section className="min-h-screen w-full mt-10 lg:mt-0 lg:max-w-7xl mx-auto flex items-center lg:flex-col lg:justify-center sm:gap-[30px] lg:gap-[70px]">
            <div className="flex flex-col lg:flex-row gap-5 w-full items-center justify-between">
                <div className="flex flex-col lg:max-w-xl">
                    <h1 className="text-4xl lg:text-6xl font-bold">About Me</h1>
                    <p>
                        I am a developer looking to learn different
                        technologies, to create a wide variety of applications.
                        I have experience in both frontend and backend
                        development, and I am always eager to learn more.
                        <br />
                        <br />
                        I&apos;ve been studying at the National University of La
                        Plata (UNLP) since 2021, where I have gained a solid
                        foundation in computer science and software engineering
                        principles, as well as getting to work with teams in
                        projects.
                        <br />
                        <br />
                        If you have any projects or ideas you&apos;d like to
                        discuss, please feel free to reach out to me in any way!
                    </p>
                    <Link
                        href={"/cv_boschiazzo_augusto.pdf"}
                        className="w-[60%] lg:w-[30%] self-center bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-200 text-center mt-10"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View CV
                    </Link>
                </div>
                <div className="grid lg:grid-cols-2 gap-4">
                    <AboutIconCard
                        imgUrl="/backend.svg"
                        title="Backend Development"
                    />
                    <div className="lg:min-h-[70px]"></div>
                    <div className="lg:min-h-[70px]"></div>
                    <AboutIconCard
                        imgUrl="/frontend.svg"
                        title="Frontend Development"
                    />
                </div>
            </div>
        </section>
    );
}

export default About;
