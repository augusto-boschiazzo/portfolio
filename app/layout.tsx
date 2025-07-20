import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Toaster } from "sonner";

export const gabarito = Gabarito({
    variable: "--font-gabarito",
    subsets: ["latin"],
    weight: "400",
});

export const metadata: Metadata = {
    title: "Augusto Boschiazzo | Developer Portfolio",
    description:
        "A portfolio showcasing the work and skills of Augusto Boschiazzo.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${gabarito.variable} `}>
                <Navbar />
                <main className="min-h-screen w-full mx-auto px-2 lg:px-0">
                    {children}
                </main>
                <Toaster />
            </body>
        </html>
    );
}
