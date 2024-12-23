import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#151515] z-[999] text-black w-full px-4 py-8 md:px-8 lg:px-16 xl:px-24 2xl:px-64">
            <div className="flex flex-col z-[999] md:flex-row justify-between gap-12 md:gap-24">
                {/* LEFT */}
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-7">
                    <Link href={'/'} className="text-2xl text-yellow-600 font-serif contrast-200">
                        Maaz Ather
                    </Link>
                    <p className="text-white/80 text-lg">pechs street 5 karachi, Pakistan</p>
                    <Link href={'mailto:mazzather@gmail.com'} className="text-white/80 text-lg">
                        mazzather@gmail.com
                    </Link>
                    <span className="text-white/80 text-lg">+92-335-2861062</span>
                    <div className="flex gap-6">
                        {['facebook', 'instagram', 'linkedin', 'gmail'].map((social) => (
                            <Link key={social} href={`https://www.${social}.com/`} className="hover:scale-110 transition-all duration-300">
                                <Image src={`/${social}.svg`} alt={social} width={40} height={40} />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* CENTER */}
                <div className="w-full md:w-1/2 lg:w-/2 hidden lg:flex justify-center gap-36">
                    {['Useful Links'].map((section) => (
                        <div key={section} className="flex flex-col gap-7">
                            <h2 className="text-white/80 text-xl hover:text-yellow-500 transition-all duration-300">{section}</h2>
                            <div className="flex flex-col gap-4">
                                {['About us', 'Terms of use', 'Carrer', 'Contact'].map((item) => (
                                    <Link key={item} href={'/'} className="text-white/80 text-lg hover:text-yellow-500 transition-all duration-300">
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* RIGHT */}
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-7">
                    <h2 className="text-white/80 text-xl hover:text-yellow-500 transition-all duration-300">SUBSCRIBE</h2>
                    <p className="text-white/80 text-lg lg:text-xl">Let&apos;s Connect Together</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="flex-grow text-white/80 text-lg bg-transparent border-2 border-white/20 rounded-md px-4 py-2 focus:outline-none focus:border-yellow-500 transition-all duration-300" 
                        />
                        <button className="text-black text-lg bg-yellow-500 rounded-md px-4 py-2 hover:bg-yellow-600 hover:shadow-lg hover:shadow-yellow-500 hover:contrast-200 transition-all duration-200">
                            JOIN
                        </button>
                    </div>
                </div>
            </div>

            {/* BOTTOM */}
            <div className="flex items-center justify-center py-4 border-t border-white/20 mt-12">
                <span>&copy;</span>
                <span className="text-white/80 text-sm">
                    {new Date().getFullYear()}. All rights reserved.
                </span>
            </div>
        </footer>
    )
}
