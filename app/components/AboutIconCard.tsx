import React from "react";

type Props = {
    imgUrl: string;
    title: string;
};

function AboutIconCard({ imgUrl, title }: Props) {
    return (
        <div className="flex flex-col items-center justify-center bg-purple-600 rounded p-4 max-w-[170px] min-h-[200px]">
            <img src={imgUrl} alt={title} className="w-16 h-16 mb-2" />
            <h3 className="text-white text-center text-lg font-semibold">
                {title}
            </h3>
        </div>
    );
}

export default AboutIconCard;
