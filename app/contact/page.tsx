import React from "react";
import ContactForm from "../components/ContactForm";
import { LinkedInIcon } from "../components/Icons/LinkedInIcon";
import Link from "next/link";
import { InstagramIcon } from "../components/Icons/InstagramIcon";

function Contact() {
    return (
        <section className="min-h-screen flex relative items-center flex-col justify-center sm:gap-[30px]">
            <h1 className="text-2xl lg:text-4xl font-bold text-center mb-6">
                Contact Me
            </h1>
            <ContactForm />
            <footer className="absolute bottom-5 text-center flex flex-col gap-2">
                <p>Or</p>
                <div className="flex justify-center gap-4">
                    <Link
                        href={
                            "https://www.linkedin.com/in/augusto-boschiazzo-marinelli-9950b4376"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedInIcon className="w-8 h-8 fill-black hover:fill-[#2868b2] transition duration-200" />
                    </Link>
                    <Link
                        href={"https://www.instagram.com/augusto.boschiazzo08"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <InstagramIcon className="w-8 h-8 fill-black hover:fill-[#db00ac] transition duration-200" />
                    </Link>
                </div>
            </footer>
        </section>
    );
}

export default Contact;
