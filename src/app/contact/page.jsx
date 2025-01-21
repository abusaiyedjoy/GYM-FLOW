"use client"
import Header from "@/Components/ui/Header";
import { usePathname } from "next/navigation";

const Contact =()=>{
    const path = usePathname();

    return (
        <>
            <Header Title={"Contact Page"} Path={path}></Header>
        </>
    );
}
export default Contact;