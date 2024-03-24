'use client'
import Image from "next/image"
import React from "react"
export default function Home() {
    return (
        <div>
            {/* DEKSTOP */}
            <div className="lg:block hidden">
                <div className="carousel w-full relative ">
                    <div id="slide1" className="carousel-item relative w-full sm">
                        <Image className="pt-[90px]" src="/homeimages/slide1.jpg"
                            width={1920}
                            height={1080}
                            alt="App store button"
                        />
                        <div className='absolute flex flex-col items-center font-medium text-white top-1/3 px-[200px] w-[100%]'>
                            <div className='text-6xl'> Create an amazing life platform </div>
                            <div className='text-6xl'> that brings WOW! to our users.</div>
                            <div className="pt-10">
                                <button className='border rounded-full px-5 py-2 text-lg text-white'> LINE's Phylosophy </button>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <Image className="pt-[90px]" src="/homeimages/slide2.jpg"
                            width={1920}
                            height={500}
                            alt="App store button"
                        />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <Image className="pt-[90px]" src="/homeimages/slide3.jpg"
                            width={2000}
                            height={500}
                            alt="App store button"
                        />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="pt-[100px] flex flex-row justify-between px-[200px] ">
                        <div className="text-4xl ">
                            <button> NEWS ROOM </button>
                        </div>

                        <div className="pr-[50px]">
                            <button> more</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 px-[150px] py-[100px]">
                        <div>
                            <div className="h-[80px]">
                                <div className="h-[35px] text-sm font-light">
                                    LINE AI Assistant' Brings AI Power to LINE Messenger
                                </div>
                                <div className="flex flex-row gap-5 text-sm font-light">
                                    <button className="text-green-500">
                                        2024.02.22
                                    </button>
                                    <div className="">|</div>
                                    <button className="text-green-500">
                                        Global News
                                    </button>
                                </div>
                            </div>
                            <div className="h-[80px]">
                                <div className="h-[35px] text-sm font-light">
                                    LINE NEXT Raises USD140 Million to Expand Web3 Ecosystem
                                </div>
                                <div className="flex flex-row gap-5 text-sm font-light">
                                    <button className="text-green-500">
                                        2024.02.22
                                    </button>
                                    <div className="">|</div>
                                    <button className="text-green-500">
                                        Global News
                                    </button>
                                </div>
                            </div>
                            <div className="h-[80px]">
                                <div className="h-[35px] text-sm font-light">
                                    Four Research Papers Selected for Largest International Conference on...
                                </div>
                                <div className="flex flex-row gap-5 text-sm font-light">
                                    <button className="text-green-500">
                                        2024.02.22
                                    </button>
                                    <div className="">|</div>
                                    <button className="text-green-500">
                                        Global News
                                    </button>
                                </div>
                            </div>
                            <div className="h-[80px]">
                                <div className="h-[35px] text-sm font-light">
                                    LINE NEXT Signs MOU with SEGA to Develop Game for GAME DOSI
                                </div>
                                <div className="flex flex-row gap-5 text-sm font-light">
                                    <button className="text-green-500">
                                        2024.02.22
                                    </button>
                                    <div className="">|</div>
                                    <button className="text-green-500">
                                        Global News
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="h-[80px]">
                                <div className="h-[35px] text-sm font-light">
                                    LINE NEXT Officially Launches DOSI as a Digital Commerce Platform
                                </div>
                                <div className="flex flex-row gap-5 text-sm font-light">
                                    <button className="text-green-500">
                                        2024.02.22
                                    </button>
                                    <div className="">|</div>
                                    <button className="text-green-500">
                                        Global News
                                    </button>
                                </div>
                            </div>
                            <div className="h-[80px]">
                                <div className="h-[35px] text-sm font-light">
                                    Z Holdings Concludes Enterprise Agreement with OpenAI, on the Use of All AP
                                </div>
                                <div className="flex flex-row gap-5 text-sm font-light">
                                    <button className="text-green-500">
                                        2024.02.22
                                    </button>
                                    <div className="">|</div>
                                    <button className="text-green-500">
                                        Global News
                                    </button>
                                </div>
                            </div>
                            <div className="h-[80px]">
                                <div className="h-[35px] text-sm font-light">
                                    On 2nd Anniversary, LINE Bank Taiwan Unveils ‘Fast Financial Platform’ Str
                                </div>
                                <div className="flex flex-row gap-5 text-sm font-light">
                                    <button className="text-green-500">
                                        2024.02.22
                                    </button>
                                    <div className="">|</div>
                                    <button className="text-green-500">
                                        Global News
                                    </button>
                                </div>
                            </div>
                            <div className="h-[80px]">
                                <div className="h-[35px] text-sm font-light">
                                    LINE and Yahoo Japan Strengthen Search Business Cooperation: Yahoo! JAP
                                </div>
                                <div className="flex flex-row gap-5 text-sm font-light">
                                    <button className="text-green-500">
                                        2024.02.22
                                    </button>
                                    <div className="">|</div>
                                    <button className="text-green-500">
                                        Global News
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row-4 justify-between px-[200px] py-[50px] bg-gray-200 font-extralight">
                        <div className="">
                            Line Blog
                            <div>
                                <p>Get all the key information about</p>
                                <p>the latest LINE app updates</p>
                            </div>
                        </div>
                        <div>
                            Business Partnership
                            <div>
                                <p>For those looking to develop </p>
                                <p>business partnerships, including </p>
                                <p>on the LINE Ads Platform </p>
                            </div>
                        </div>
                        <div>
                            Engineering
                            <p>The developer hub, with news,  </p>
                            <p>open-source libraries, APIs, and </p>
                            <p>more </p>
                        </div>
                        <div>
                            Career
                            <p>The latest job openings and   </p>
                            <p>career opportunities available at  </p>
                            <p>LINE</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* DEKSTOP */}
            {/* MOBILE */}
            <div className="lg:hidden block">
                <div className="carousel w-full relative ">
                    <div id="slide1" className="carousel-item relative w-full sm">
                        <Image className="pt-[90px]" src="/homeimages/slide1.jpg"
                            width={1920}
                            height={1080}
                            alt="HERO SECTION"
                        />
                        <div className='absolute flex flex-col items-center font-medium text-white top-1/2 w-[100%]'>
                            <div className='text-2xl'> Create an amazing life platform </div>
                            <div className='text-2xl'> that brings WOW! to our users.</div>
                            <div className="pt-2">
                                <button className='border rounded-full px-5 py-1 text-xs text-white'> LINE's Phylosophy </button>
                            </div>
                        </div>                     
                    </div>
                </div>
                <div>
                    <div className="pt-[100px] flex flex-row justify-between px-[50px] ">
                        <div className="text-3xl ">
                            <button> NEWS ROOM </button>
                        </div>
                        <div className="">
                            <button> more</button>
                        </div>
                    </div>
                    <div className="flex flex-col px-[20px] py-[60px]">
                        <div>
                            <div className="h-[80px]">
                                <div className="h-[35px] text-base font-normal">
                                    LINE AI Assistant' Brings AI Power to LINE Messenger
                                    <div className="text-green-500 flex flex-row gap-5 h-[5px] text-xs">
                                        2024.02.22
                                        <div className="text-gray-400">|</div>
                                        <button className="text-green-500">
                                            Global News
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[80px]">
                                <div className="h-[35px] text-base font-normal">
                                    LINE NEXT Officially Launches DOSI as a Digital Commerce Platform
                                    <div className="text-green-500 flex flex-row gap-5 h-[5px] text-xs">
                                        2024.02.22
                                        <div className="text-gray-400">|</div>
                                        <button className="text-green-500">
                                            Global News
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[80px]">
                                <div className="h-[35px] text-base font-normal">
                                    LINE NEXT Raises USD140 Million to Expand Web3 Ecosystem
                                    <div className="text-green-500 flex flex-row gap-5 h-[5px] text-xs">
                                        2024.02.22
                                        <div className="text-gray-400">|</div>
                                        <button className="text-green-500">
                                            Global News
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[150px]">
                                <div className="h-[35px] text-base font-normal">
                                    Z Holdings Concludes Enterprise Agreement with OpenAI, on the Use of All APIs, Including GPT-4 Original AI Assistant Service to Be Introduced to Approx. 20,000 Employees of the LINE Group and Yahoo Japan
                                    <div className="text-green-500 flex flex-row gap-5 h-[5px] text-xs">
                                        2024.02.22
                                        <div className="text-gray-400">|</div>
                                        <button className="text-green-500">
                                            Global News
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[100px]">
                                <div className="h-[35px] text-base font-normal">
                                    Four Research Papers Selected for Largest International Conference on Acoustics, Speech, and Signal Processing, INTERSPEECH 2023
                                    <div className="text-green-500 flex flex-row gap-5 h-[5px] text-xs">
                                        2024.02.22
                                        <div className="text-gray-400">|</div>
                                        <button className="text-green-500">
                                            Global News
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="h-[100px]">
                                <div className="h-[35px] text-base font-normal">
                                    On 2nd Anniversary, LINE Bank Taiwan Unveils ‘Fast Financial Platform’ Strategy, Aiming to Transform Digital Financial Services
                                    <div className="text-green-500 flex flex-row gap-5 h-[5px] text-xs">
                                        2024.02.22
                                        <div className="text-gray-400">|</div>
                                        <button className="text-green-500">
                                            Global News
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[80px]">
                                <div className="h-[35px] text-base font-normal">
                                    LINE NEXT Signs MOU with SEGA to Develop Game for GAME DOSI
                                    <div className="text-green-500 flex flex-row gap-5 h-[5px] text-xs">
                                        2024.02.22
                                        <div className="text-gray-400">|</div>
                                        <button className="text-green-500">
                                            Global News
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[100px]">
                                <div className="h-[35px] text-base font-normal">
                                    LINE and Yahoo Japan Strengthen Search Business Cooperation: Yahoo! JAPAN Search Takes Over from LINE Search to Elevate User Experience

                                    <div className="text-green-500 flex flex-row gap-5 h-[5px] text-xs">
                                        2024.02.22
                                        <div className="text-gray-400">|</div>
                                        <button className="text-green-500">
                                            Global News
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 justify-between px-[20px] py-[50px] bg-gray-200 font-extralight">
                        <div className="">
                            <div className="font-normal text-lg">Line Blog</div>
                            <div className="flex flex-row text-sm">
                                <p>Get all the key information about the latest LINE app updates</p>

                            </div>
                        </div>
                        <div className="">
                            <div className="font-normal text-lg">Business Partnership</div>
                            <div className="flex flex-row text-sm">
                                <p>Get all the key information about For those looking to develop business partnerships, including on the LINE Ads Platform</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="font-normal text-lg">Engineering</div>
                            <div className="flex flex-row text-sm">
                                <p>The developer hub, with news, open-source libraries, APIs, and more </p>
                            </div>
                        </div>
                        <div className="">
                            <div className="font-normal text-lg">Career</div>
                            <div className="flex flex-row text-sm">
                                <p>The latest job openings and career opportunities available at Line </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* MOBILE */}
        </div >
    )
}
