import React from "react";

function HomeHeading() {
    return (
        <div className="flex flex-col">
            <h1 className="text-5xl font-bold">
                Hi, my name is <span className="text-purple-600">Augusto</span>
            </h1>
            <h3 className="mt-1 text-3xl font-medium">Software Developer</h3>
            <p className="mt-4 text-lg">
                I'm 22 years old and based in Argentina. <br />
                I'm interested in building web applications and learning new
                technologies. <br />
                Currently focused on Next.js and TypeScript.
            </p>
        </div>
    );
}

export default HomeHeading;
