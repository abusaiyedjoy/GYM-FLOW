"use client"
import Header from "@/Components/ui/Header";
import { usePathname } from "next/navigation";



export const metadata = {
    title: "GYM-FLOW | Contact Us",
    description: "Get in touch with us for any inquiries, support, or feedback about GYM-FLOW.",
  };

const Contact =()=>{
    const path = usePathname();

    return (
        <>
            <Header Title={"Contact Page"} Path={path}></Header>
        </>
    );
}
export default Contact;