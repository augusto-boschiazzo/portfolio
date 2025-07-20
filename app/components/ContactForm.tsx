"use client";

import React from "react";
import InputContact from "./InputContact";
import { toast } from "sonner";

function ContactForm() {
    const [nameInput, setName] = React.useState("");
    const [emailInput, setEmail] = React.useState("");
    const [messageInput, setMessage] = React.useState("");
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const clearInputs = () => {
        setName("");
        setEmail("");
        setMessage("");
    };

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log("Submitting form with:", {
            name: nameInput,
            email: emailInput,
            message: messageInput,
        });

        setIsSubmitting(true);
        fetch("/api/email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fromName: nameInput,
                fromEmail: emailInput,
                message: messageInput,
            }),
        })
            .then((response) => {
                if (response.status === 200) {
                    toast.success("Email sent successfully!");
                    clearInputs();
                } else {
                    console.error(response);
                    toast.error("Failed to send email. Please try again.");
                }
            })
            .catch((error) => {
                console.error(error);
                toast.error("Failed to send email. Please try again.");
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col max-w-lg mx-auto p-6 gap-4 items-center justify-center"
        >
            <div className="flex flex-col lg:flex-row w-full gap-4">
                <InputContact
                    label="Name"
                    type="text"
                    placeholder="Enter your name"
                    id="name"
                    value={nameInput}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setName(e.target.value)
                    }
                />
                <InputContact
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    id="email"
                    value={emailInput}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setEmail(e.target.value)
                    }
                />
            </div>
            <div className="flex flex-col w-full">
                <label className="mb-2 font-bold">
                    Message<span className="text-red-400 font-normal">*</span>
                </label>
                <textarea
                    id="message"
                    placeholder="Enter your message"
                    className="p-2 border-b-2 border-gray-300 focus:border-purple-600 focus:outline-none transition duration-200 "
                    required
                    value={messageInput}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        setMessage(e.target.value)
                    }
                />
            </div>
            <button
                type="submit"
                className="w-[50%] bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-200"
                disabled={isSubmitting}
            >
                Send Message
            </button>
        </form>
    );
}

export default ContactForm;
