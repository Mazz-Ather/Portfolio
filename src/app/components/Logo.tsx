import Link from "next/link"

const Logo = ()=>{
    return(
        <div className="flex">
        {/* Top-left corner logo */}
        <div className="absolute mx-8  my-5 h-12 w-14 -top-1 py-8 px-8 left-0  bg-gray-400 text-black flex items-center justify-center rounded-full font-bold text-2xl contrast-200">
          <Link href="/" className="hover:text-blue-500 hover:bg-white hover:border-blue-500 hover:border-2 hover:rounded-full hover:shadow-lg hover:transition-all duration-300 ease-in-out hover:brightness-75 hover:px-4 hover:py-4 contrast-200">MA</Link>
        </div>
        </div>
    )
}
export default Logo