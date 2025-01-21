"use client"
import Header from "@/Components/ui/Header";
import { usePathname } from "next/navigation";

const Schedule =()=>{
    const path = usePathname();

    return (
        <>
            <Header Title={"Schedule Page"} Path={path}></Header>
        </>
    );
}
export default Schedule;