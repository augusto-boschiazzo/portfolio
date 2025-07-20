import Image from "next/image";
import React from "react";

type Props = {
    imgUrl: string;
    title: string;
};

function AboutIconCard({ imgUrl, title }: Props) {
    return (
        <div className="flex flex-col items-center justify-center bg-purple-600 rounded p-4 max-w-[170px] min-h-[200px]">
            <Image
                src={imgUrl}
                alt={title}
                width={16}
                height={16}
                className="mb-2"
            />
            <h3 className="text-white text-center text-lg font-semibold">
                {title}
            </h3>
        </div>
    );
}

export default AboutIconCard;
