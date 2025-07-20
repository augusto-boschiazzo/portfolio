import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <header className="w-full flex backdrop-blur fixed top-0 z-10">
            <div className="w-full max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
                <div className="flex gap-4">
                    <Link href="/" aria-label="Go to home page">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={32}
                            height={32}
                            className="dark:invert rounded-full hover:scale-110 transition-transform duration-300"
                        />
                    </Link>
                    <Link
                        href="https://github.com/augusto-boschiazzo"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Go to GitHub profile"
                    >
                        <Image
                            src="/github-mark.svg"
                            alt="GitHub Logo"
                            width={32}
                            height={32}
                            className="dark:invert rounded-full hover:scale-110 transition-transform duration-300"
                        />
                    </Link>
                </div>
                <nav>
                    <ul className="flex gap-4 sm:text-[18px] text-white dark:text-black">
                        <li>
                            <Link
                                href="/about"
                                aria-label="Go to about page"
                                className="text-TEXT_SECONDARY1 hover:underline" //hover:bg-purple-600 hover:text-white rounded-full px-2 py-1 transition-colors duration-300
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                aria-label="Go to contact page"
                                className="text-TEXT_SECONDARY1 hover:underline"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
