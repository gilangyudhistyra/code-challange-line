import Link from "next/link"
import { RxHamburgerMenu } from "react-icons/rx";
// import { IoMdClose } from "react-icons/io";
import { MdClose } from "react-icons/md";
export default function Navbar() {
    return (
        <nav>
            {/* DEKSTOP */}
            <div className="lg:block hidden">
                <div className=" flex flex-row justify-center py-5 fixed w-full bg-white z-10">
                    <div className="flex items-center bg-base-100 px-10 py-2">

                        <div className="flex-1 flex items-center gap-3">
                            <Link href="/">
                                <div className="w-[80px] bg-white">
                                    <img src='https://static.line-scdn.net/linecorpweb-uit/18dee39ad57/images/logo_h1_v2.png'
                                        width={100}
                                        height={70}
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="flex col items-center gap-10 px-10 py-2">
                        <div className="hover:text-green-500 text-lg"><Link href="/aboutus">About</Link></div>
                        <div className="hover:text-green-500 text-lg"><Link href={'/ourservice'}>Service</Link></div>
                        <div className="hover:text-green-500 text-lg"><Link href="/corporategovernance">News</Link></div>
                        <div className="hover:text-green-500 text-lg"><Link href="/corporategovernance">IR Archive</Link></div>
                        <div className="hover:text-green-500 text-lg"><Link href="/corporategovernance">Careers</Link></div>
                        <div className="hover:text-green-500 text-lg"><Link href="/corporategovernance">Corporate Governance</Link></div>
                        <div className="text-gray-500 text-lg"> SITEMAP </div>
                    </div>

                    <div>
                        <select className="select border rounded-full px-10 py-2 ">
                            <option className="font-sans">English</option>
                            <option className="font-sans">Indonesia</option>
                            <option className="font-sans">Arabic</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* /*DEKSTOP*/}
            {/* MOBILE */}
            <div className="lg:hidden">
                <div className=" flex flex-row justify-center py-5 fixed w-full z-10">
                    <div className="flex items-center px-10 py-2">
                        {/* Div Left */}
                        <div className="flex-1 flex items-center pl-[50px] bg-white gap-3">
                            <Link href="/">
                                <div className="w-[80px]">
                                    <img src='https://static.line-scdn.net/linecorpweb-uit/18dee39ad57/images/logo_h1_v2.png'
                                        width={100}
                                        height={70}
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/* Div Center */}
                    <div className="relative w-full flex items-center justify-between px-[180px] text-black ">
                        <div className="absolute right-10 z-50 flex pr-[70px]">
                            <div className="drawer">
                                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                                <div className="drawer-content">
                                    <label htmlFor="my-drawer" className="drawer-button">
                                        <RxHamburgerMenu size={25} />
                                    </label>
                                </div>
                                <div className="drawer-side">
                                    <label
                                        htmlFor="my-drawer"
                                        aria-label="close sidebar"
                                        className="drawer-overlay"
                                    ></label>
                                    <ul className="text-shuttlegray menu relative min-h-full w-80 bg-base-200 p-4 font-bold">
                                        <li className="hover:text-burnorange pt-10">
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link className="hover:text-burnorange" href="/aboutus">
                                                About
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="hover:text-burnorange" href="/ourservice">
                                                Our Service
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="hover:text-burnorange" href="/corporategovernance">
                                                Corporate Governance
                                            </Link>
                                        </li>
                                        {/* Close button */}
                                        <input id="my-drawer" type="checkbox" className="hidden" />
                                        <div className="absolute right-5">
                                            <label htmlFor="my-drawer">
                                                <MdClose size={25} className="text-black" />
                                            </label>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Div Right */}
                    <div className="hidden lg:block">
                        <select className="select border rounded-full px-10 py-2">
                            <option className="font-sans">English</option>
                            <option className="font-sans">Indonesia</option>
                            <option className="font-sans">Arabic</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* MOBILE */}
        </nav>
    )
}