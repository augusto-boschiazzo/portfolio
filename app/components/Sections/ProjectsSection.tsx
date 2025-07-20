import React from "react";
import Project from "../Project";

function ProjectsSection() {
    const list = [
        /* {
            title: "StudentHomepage",
            description: "A platform for students to manage their assignments.",
            imgUrl: "carga_de_fuego.png",
            githubUrl: "augusto-boschiazzo/student-homepage",
        }, */
        {
            title: "Carga de fuego",
            description: "A web app for managing fire load calculations.",
            imgUrl: "carga_de_fuego.png",
            githubUrl: "augusto-boschiazzo/carga-de-fuego",
        },
    ];
    return (
        <section
            id="projects"
            className="pb-[150px] min-h-screen flex flex-col gap-10"
        >
            <div className="bg-purple-600 w-full flex left-0">
                <h1 className="text-4xl lg:text-8xl text-white mt-20 lg:mt-30 mb-10 lg:mb-20 ml-5 lg:ml-15 font-bold">
                    Projects
                </h1>
            </div>
            <div className="flex flex-col gap-[100px] max-w-screen lg:max-w-7xl mx-auto px-8">
                {list.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.imgUrl}
                        githubUrl={project.githubUrl}
                    />
                ))}
            </div>
        </section>
    );
}

export default ProjectsSection;
