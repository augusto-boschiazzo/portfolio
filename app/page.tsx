import Image from "next/image";
import HomeSection from "./components/Sections/HomeSection";
import ProjectsSection from "./components/Sections/ProjectsSection";
import TechSection from "./components/Sections/TechSection";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <HomeSection />
            <TechSection />
            <ProjectsSection />
        </>
    );
}
