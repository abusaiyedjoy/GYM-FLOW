"use client"
import Header from "@/Components/ui/Header";
import { usePathname } from "next/navigation";


export const metadata = {
    title: "GYM-FLOW | Class Schedule",
    description: "Check out our class schedule and plan your fitness journey with GYM-FLOW.",
  };


const Schedule =()=>{
    const path = usePathname();

    return (
        <>
            <Header Title={"Schedule Page"} Path={path}></Header>
        </>
    );
}
export default Schedule;