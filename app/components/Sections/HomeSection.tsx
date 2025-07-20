import React from "react";
import HomeHeading from "../HomeHeading";
import ProfileImage from "../ProfileImage";
import Link from "next/link";
import { Arrow } from "../Icons/ArrowIcon";

function HomeSection() {
    return (
        <section className="min-h-screen max-w-screen lg:max-w-7xl mx-auto px-2 relative flex items-center lg:flex-col justify-center sm:gap-[30px] lg:gap-[70px]">
            <div className="lg:ml-0 w-full flex justify-between">
                <HomeHeading />
                <ProfileImage />
            </div>
            <Link
                href="/#tech"
                aria-label="Go to tech section"
                className="absolute bottom-5 animate-bounce"
            >
                <div className="flex flex-col items-center text-center">
                    <p>
                        <span className="text-purple-600">Technologies </span>
                        I&apos;ve worked with
                    </p>
                    <Arrow />
                </div>
            </Link>
        </section>
    );
}

export default HomeSection;
