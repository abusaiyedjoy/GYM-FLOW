"use client"
import Header from "@/Components/ui/Header";
import { usePathname } from "next/navigation";


export const metadata = {
    title: "GYM-FLOW | About Us",
    description: "Learn more about GYM-FLOW, our mission, and our journey to empower your fitness.",
  };

const About = () => {
    const path = usePathname();

    return (
        <>
            <Header Title={"About Page"} Path={path}></Header>
        </>
    );
}
export default About;