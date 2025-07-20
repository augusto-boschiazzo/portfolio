import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
    title: string;
    description: string;
    imgUrl?: string;
    githubUrl?: string;
};

function Project({ title, description, imgUrl, githubUrl }: Props) {
    return (
        <div className="flex flex-col items-center gap-4 justify-center lg:flex-row lg:even:flex-row-reverse md:gap-[100px]">
            <div className="flex flex-col w-full items-center justify-center ">
                <h2 className="text-xl font-bold text-center">{title}</h2>
                <p className="max-w-sm text-TEXT_SECONDARY1 my-4 text-center">
                    {description}
                </p>
                {githubUrl && (
                    <Link
                        href={`https://github.com/${githubUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-purple-600 px-6 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition-colors duration-300 text-purple-600 text-center max-w-[60%]"
                    >
                        View on GitHub
                    </Link>
                )}
            </div>
            <Image
                src={`/project_images/${imgUrl}`}
                alt={title}
                width={630}
                height={360}
                className="rounded-lg object-cover hover:scale-110 transition-transform duration-300"
            />
        </div>
    );
}

export default Project;
