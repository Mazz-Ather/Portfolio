import Link from "next/link";

const Footer = ()=>{
    return(
       <footer className="w-full border-t-2 border-solid  border-white text-white font-medium text-lg h-[49px] bg-gray-950 bottom-0">
        <div className="flex items-center justify-between px-12">
        <span>{2024} &copy; All Rights Reserved </span>
        <div className="mr-9 flex items-center">
        Created With <span className="text-pink-600 text-3xl  px-1">
        &#9825;
            </span> By &nbsp;<Link href={`mailto:mazzather@example.com`} target="_blank" className="underline underline-offset-2">Maaz Ather</Link>
        </div>
     
        <Link href={`mailto:mazzather@example.com`} target="_blank">Say Hello</Link>
        </div>
       </footer>
    )
}
export default Footer;