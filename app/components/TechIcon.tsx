import React from "react";

type Props = {
    imgUrl?: string;
    title: string;
};

function TechIcon({ imgUrl, title }: Props) {
    return (
        <div className="flex flex-col items-center justify-center lg:w-[150px] ">
            {imgUrl ? (
                <img
                    src={`/tech_images/${imgUrl}`}
                    alt={title + " icon"}
                    className={
                        ["Rust", "Next.js"].includes(title)
                            ? "w-12 h-12 object-scale-down rounded-sm hover:scale-150 transition-transform duration-300 invert dark:invert-0"
                            : "w-12 h-12 object-scale-down rounded-sm hover:scale-150 transition-transform duration-300"
                    }
                />
            ) : (
                <div className="w-12 h-12 bg-gray-300 animate-pulse" />
            )}
            <h2 className="text-center mt-2">{title}</h2>
        </div>
    );
}

export default TechIcon;
