import React from "react";
import TechIcon from "../TechIcon";
import { Arrow } from "../Icons/ArrowIcon";
import Link from "next/link";

function TechSection() {
    const techList = [
        { imgUrl: "typescript.png", title: "TypeScript" },
        { imgUrl: "javascript.png", title: "JavaScript" },
        { imgUrl: "react.png", title: "React" },
        { imgUrl: "nextjs.png", title: "Next.js" },
        { imgUrl: "tailwind.png", title: "Tailwind CSS" },
        { imgUrl: "python.svg", title: "Python" },
        { imgUrl: "django.svg", title: "Django" },
        { imgUrl: "rust.png", title: "Rust" },
        { imgUrl: "c++.png", title: "C++" },
        { imgUrl: "opengl.png", title: "OpenGL" },
        { imgUrl: "java.png", title: "Java" },
        { imgUrl: "bash.png", title: "Bash" },
    ];
    return (
        <section
            id="tech"
            className="min-h-screen w-full relative flex items-center lg:flex-col lg:justify-center sm:gap-[30px] lg:gap-[70px] px-4"
        >
            <div className="w-full lg:w-[70%] max-w-screen-lg mx-auto fade-in">
                <h1 className="text-2xl lg:text-6xl font-bold text-center mb-6">
                    Technologies
                </h1>
                <div className="w-full flex flex-wrap justify-center">
                    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
                        {techList.map((tech, index) => (
                            <TechIcon
                                key={index}
                                imgUrl={tech.imgUrl}
                                title={tech.title}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="absolute bottom-5 left-0 w-full flex justify-center animate-bounce">
                <Link
                    href="/#projects"
                    aria-label="Go to projects section"
                    className="flex flex-col items-center justify-center text-center"
                >
                    <p>
                        <span className="text-purple-600">Projects</span>{" "}
                        I&apos;ve Worked On
                    </p>
                    <Arrow />
                </Link>
            </div>
        </section>
    );
}

export default TechSection;
