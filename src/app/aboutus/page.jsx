import Link from "next/link"
import Image from "next/image"
export default function AboutUs() {
    return (
        <div className="py-20">
            {/* DEKSTOP */}
            <div className="lg:block hidden">
                <div className="bg-gray-300 p-7 text-base font-light flex flex-row gap-8 justify-start pl-60 ">
                    <div className="hover:text-green-500">
                        <Link href="/aboutus">About</Link>
                    </div>
                    <button className="hover:text-green-500">
                        Line's Philosophy
                    </button>
                    <button className="hover:text-green-500">
                        Contacts
                    </button>
                    <button className="hover:text-green-500">
                        Line Logo Guidelines
                    </button>
                </div>
                <div className="p-20 text-3xl px-[200px]">
                    ABOUT
                </div>
                <div className="flex flex-row text-lg font-light px-40 gap-1 justify-center">
                    <div className="items-center grid grid-cols-3 pt-3 pb-3 border hover:border-black text-gray-500 hover:bg-green-500 hover:text-white duration-500">
                        Line Corporation
                    </div>
                    <div>
                        <div className="grid grid-cols-3 pt-3 pb-3 border hover:border-black text-gray-500 hover:bg-green-500 hover:text-white duration-500">
                            <Link href="/aboutuslineplus">Line Plus Corporation </Link>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div>
                    <div className="flex flex-row justify-middle p-10 text-sm px-[200px] font-light ">
                        With the LINE messaging app as the cornerstone, LINE Corporation's business encompasses development and operation of a wide range of mobile-first services—including communication, content, and entertainment—and advertising, as well as new businesses in Fintech, AI, and other domains. Under its corporate mission of "Closing the Distance," LINE Corporation strives to bring people around the world closer to each other, to information, and to services.
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-col pl-[200px] text-base font-light">
                        <div className="h-[60px]">
                            Established
                        </div>
                        <div className="h-[60px]">
                            Capital
                        </div>
                        <div className="h-[60px]">
                            Representative
                        </div>
                        <div className="h-[60px]">
                            Number of Employees
                        </div>
                        <div className="h-[60px]">
                            Location
                        </div>
                        <div className="h-[60px]">
                            Various Certifications
                        </div>
                        <div className="h-[60px] pt-[130px] pb-20">
                            Group Companies
                            <div>
                                *As of the end of September
                                <div>2023.</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col pl-10 font-light text-base">
                        <div className="h-[60px] ">
                            September 4, 2000
                            <div>
                                Changed trade name from NHN Japan Corporation to LINE Corporation on April 1, 2013
                            </div>
                        </div>
                        <div className="h-[60px]">
                            34,201 billion JPY（As of March 31,2021）
                        </div>
                        <div className="h-[60px]">
                            Takeshi Idezawa CEO and President
                            <div>
                                Jungho Shin  Co-CEO and Chief WOW Officer
                            </div>
                        </div>
                        <div className="h-[60px]">
                            3,100 (As of April 30, 2023)
                        </div>
                        <div className="h-[60px]">
                            Yotsuya Office
                            <div>
                                Yotsuya Tower 23rd FL., 1-6-1 Yotsuya, Shinjuku-ku, Tokyo, 160-0004
                            </div>
                        </div>
                        <div className="h-[60px]">
                            Registered telecommunications carrier A-20-9913
                            <div>
                                Acquired SOC2, SOC3 for free calls/messaging smartphone application "LINE"
                                <div>
                                    Acquired ISO27001 certification (January 2007)
                                    <img className="w-[100px]" src="https://static.line-scdn.net/linecorpweb-uit/18dee39ad57/images/logo_company_lnk_iso2_v2.png" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 h-[20] pt-[95px] ">
                                <div className="">
                                    LINE Biz Plus Corporation
                                </div>
                                <div>
                                    LINE Financial Corporation
                                </div>
                            </div>
                            <div className="grid grid-cols-2 h-[35] ">
                                <div className="">
                                    LINE Financial Plus Corporation
                                </div>
                                <div>
                                    LINE Financial Taiwan Limited
                                </div>
                            </div>
                            <div className="grid grid-cols-2 h-[35]">
                                <div className="">
                                    LINE FRIENDS INC.
                                </div>
                                <div>
                                    LINE Friends Japan Corporation
                                </div>
                            </div>
                            <div className="grid grid-cols-2 h-[35] ">
                                <div className="">
                                    Line Friends Taiwan Limited
                                </div>
                                <div>
                                    LINE Friends (Shanghai) Commercial Trade Co., Ltd.
                                </div>
                            </div>
                            <div className="grid grid-cols-2 h-[35] ">
                                <div className="">
                                    Line Growth Technology Limited
                                </div>
                                <div>
                                    LINE NEXT Corporation
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-[200px]">
                        <img src="https://static.line-scdn.net/linecorpweb-uit/18dee39ad57/images/img_company_t_info_v2.jpg" />
                    </div>
            </div>
            {/* DESKTOP */}
            {/* MOBILE */}
            <div className="lg:hidden block">
                <div className="p-5 text-3xl">
                    ABOUT
                </div>
                <div>
                    <div className="flex flex-row justify-middle p-5 text-sm font-light ">
                        With the LINE messaging app as the cornerstone, LINE Corporation's business encompasses development and operation of a wide range of mobile-first services—including communication, content, and entertainment—and advertising, as well as new businesses in Fintech, AI, and other domains. Under its corporate mission of "Closing the Distance," LINE Corporation strives to bring people around the world closer to each other, to information, and to services.
                    </div>
                </div>
                <div className="flex flex-col p-5">
                    <div className="flex flex-col text-medium font-light">
                        <div className="h-[100px]">
                            Established
                            <div className="h-[60px] text-sm">
                                September 4, 2000
                                <div>
                                    Changed trade name from NHN Japan Corporation to LINE Corporation on April 1, 2013
                                </div>
                            </div>
                        </div>
                        <div className="h-[60px]">
                            Capital
                            <div className="h-[60px] text-sm">
                                34,201 billion JPY（As of March 31,2021）
                            </div>
                        </div>
                        <div className="h-[80px]">
                            Representative
                            <div className="h-[60px] text-sm">
                                Takeshi Idezawa CEO and President
                                <div>
                                    Jungho Shin  Co-CEO and Chief WOW Officer
                                </div>
                            </div>
                        </div>
                        <div className="h-[60px]">
                            Number of Employees
                            <div className="h-[60px] text-sm">
                                3,100 (As of April 30, 2023)
                            </div>
                        </div>
                        <div className="h-[100px]">
                            Location
                            <div className="h-[60px] text-sm">
                                Yotsuya Office
                                <div>
                                    Yotsuya Tower 23rd FL., 1-6-1 Yotsuya, Shinjuku-ku, Tokyo, 160-0004
                                </div>
                            </div>
                        </div>
                        <div className="h-[50px]">
                            Various Certifications
                            <div className="text-sm">
                                Registered telecommunications carrier A-20-9913
                            </div>
                            <div className="text-sm">
                                Acquired SOC2, SOC3 for free calls/messaging smartphone application "LINE"
                                <div>
                                    Acquired ISO27001 certification (January 2007)
                                    <img className="w-[100px]" src="https://static.line-scdn.net/linecorpweb-uit/18dee39ad57/images/logo_company_lnk_iso2_v2.png" />
                                </div>
                            </div>
                        </div>
                        <div className="h-[60px] pt-[130px] pb-20">
                            Group Companies
                            <div>
                                *As of the end of September 2023.
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=" h-[60px] text-gray-500">
                            <div className="h-[30px]">
                                LINE Biz Plus Corporation
                            </div>
                            <div>
                                LINE Financial Corporation
                            </div>
                        </div>
                        <div className="h-[60px] text-gray-500">
                            <div className="h-[30px]">
                                LINE Financial Plus Corporation
                            </div>
                            <div>
                                LINE Financial Taiwan Limited
                            </div>
                        </div>
                        <div className=" h-[60px]   text-gray-500">
                            <div className="h-[30px]">
                                LINE FRIENDS INC.
                            </div>
                            <div>
                                LINE Friends Japan Corporation
                            </div>
                        </div>
                        <div className=" h-[60px] text-gray-500">
                            <div className="h-[30px]">
                                Line Friends Taiwan Limited
                            </div>
                            <div>
                                LINE Friends (Shanghai) Commercial Trade Co., Ltd.
                            </div>
                        </div>
                        <div className="h-[60px] text-gray-500">
                            <div className="h-[30px]">
                                Line Growth Technology Limited
                            </div>
                            <div>
                                LINE NEXT Corporation
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" ">
                    <img src="https://static.line-scdn.net/linecorpweb-uit/18dee39ad57/images/img_company_t_info_v2.jpg" />
                </div>
            </div>
            {/* MOBILE */}
        </div>
    )
}
