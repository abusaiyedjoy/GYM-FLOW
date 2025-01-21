"use client"
import Header from "@/Components/ui/Header";
import { usePathname } from "next/navigation";

const About = () => {
    const path = usePathname();

    return (
        <>
            <Header Title={"About Page"} Path={path}></Header>
        </>
    );
}
export default About;