import Link from "next/link"
export default function AboutUs() {
    return (
        <div>
            {/* DESKTOP */}
            <div className="lg:block hidden">
                <div className="p-[90px]">
                    <div className="bg-gray-300 p-3 text-lg flex flex-row gap-10 px-[250px] ">
                        <div className="hover:text-green-500">
                            Apps
                        </div>
                        <button className="hover:text-green-500">
                            Line Friend Business
                        </button>
                        <button className="hover:text-green-500">
                            Ads
                        </button>
                    </div>
                    <div className="flex flex-col justify-middle p-10 px-40 gap-5 ">
                        <div className="text-5xl font-extralight">
                            LINE
                        </div>
                        <div className="text-lg">
                            The Global Messenger.
                        </div>
                        <div className="font-light">
                            LINE is the fastest growing mobile messenger app in the world, bringing users closer to their friends and loved ones. Enjoy free messages, voice calls, and video calls anytime, anywhere. LINE is available on smartphones, including iPhones and Android devices, and also PCs and Macs.
                        </div>
                        <div className="flex flex-row gap-10">
                            <div className="underline underline-offset-8">
                                More Details
                            </div>
                            <div className="underline underline-offset-8 hover:text-green-500">
                                Download
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <img alt="Line Photo" src="https://static.line-scdn.net/linecorpweb-uit/18dee39ad57/images/img_services_business_services_01_en.png"
                            width={550}
                            height={250}
                        />
                    </div>
                    <div className="flex flex-col justify-middle p-10 px-40 gap-5 ">
                        <div className="text-5xl font-extralight">
                            LINE Stickers and Creators Market
                        </div>
                        <div className="text-lg">
                            Chatting is more fun with stickers!
                            <div>The Creators Market will help you make your original stickers known to the world.</div>
                        </div>
                        <div className="font-light">
                            LINE is the fastest growing mobile messenger app in the world, bringing users closer to their friends and loved ones. Enjoy free messages, voice calls, and video calls anytime, anywhere. LINE is available on smartphones, including iPhones and Android devices, and also PCs and Macs.
                        </div>
                        <div className="flex flex-row gap-10">
                            <div className="underline underline-offset-8">
                                More Details
                            </div>
                            <div className="underline underline-offset-8 hover:text-green-500">
                                Download
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className="flex justify-center" alt="Line Photo" src="https://static.line-scdn.net/linecorpweb-uit/18dee39ad57/images/img_services_business_services_02_pc.png"
                            width={650}
                            height={350}
                        />
                    </div>
                    <div className="flex flex-col justify-middle p-10 px-40 gap-5 ">
                        <div className="text-5xl font-extralight">
                            LINE Games
                        </div>
                        <div className="text-lg">
                            Play games with your LINE friends.
                        </div>
                        <div className="font-light">
                            LINE presents games of a variety of genres, some of them starring LINE characters. Invite all your LINE friends and have a blast!
                        </div>
                        <div className="flex flex-row gap-10">
                            <div className="underline underline-offset-8">
                                More Details
                            </div>
                            {/* <div className="underline underline-offset-8 hover:text-green-500">
                        Download
                    </div> */}
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className="flex justify-center" alt="Line Photo" src="https://static.line-scdn.net/linecorpweb-uit/18dee39ad57/images/img_services_business_services_03_pc.png"
                            width={750}
                            height={400}
                        />
                    </div>
                    <div className="flex flex-col justify-middle p-10 px-40 gap-5 ">
                        <div className="text-5xl font-extralight">
                            LINE Family Apps
                        </div>
                        <div className="text-lg">
                            Everything you would ever need on your smartphone.
                        </div>
                        <div className="font-light">
                            LINE family apps include a web comic app, a security app, and many more that will make your everyday life more fun! Use LINE Deco to decorate your phone however you want, and LINE Camera to take the best pics. There’s something for every aspect of your smartphone life in the LINE family.
                        </div>
                        <div className="flex flex-row gap-10">
                            <div className="underline underline-offset-8">
                                More Details
                            </div>
                            {/* <div className="underline underline-offset-8 hover:text-green-500">
                        Download
                    </div> */}
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className="flex justify-center" alt="Line Photo" src="https://static.line-scdn.net/linecorpweb-uit/18dee39ad57/images/img_services_business_services_04_pc.png"
                            width={950}
                            height={500}
                        />
                    </div>
                </div>
            </div>
            {/* DESKTOP */}
            {/* MOBILE */}
            <div className="lg:hidden block">
                <div className="">
                    <div className="flex flex-col justify-middle p-5 pt-[100px] gap-5 ">
                        <div className="text-2xl font-light">
                            LINE
                        </div>
                        <div className="text-base">
                            The Global Messenger.
                        </div>
                        <div className="font-light text-base">
                            LINE is the fastest growing mobile messenger app in the world, bringing users closer to their friends and loved ones. Enjoy free messages, voice calls, and video calls anytime, anywhere. LINE is available on smartphones, including iPhones and Android devices, and also PCs and Macs.
                        </div>
                        <div className="flex flex-row text-sm gap-10">
                            <div className="underline underline-offset-8">
                                More Details
                            </div>
                            <div className="underline underline-offset-8 hover:text-green-500">
                                Download
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <img alt="Line Photo" src="https://static.line-scdn.net/linecorpweb-uit/18dee39ad57/images/img_services_business_services_01_en.png"
                            width={550}
                            height={250}
                        />
                    </div>
                    <div className="flex flex-col justify-middle p-5 pt-20 gap-5 ">
                        <div className="text-2xl font-light">
                            LINE Stickers and Creators Market
                        </div>
                        <div className="text-base">
                            Chatting is more fun with stickers!
                            <div>The Creators Market will help you make your original stickers known to the world.</div>
                        </div>
                        <div className="font-light">
                        Whatever it is you want to message your friend, you will find the sticker that expresses your feelings best, like nothing else available in the market. The LINE Sticker Shop and LINE Store presents tens of thousands of stickers, and as a LINE user, you can join the LINE Creators Market and show off your creations to LINE friends across the globe. 
                        </div>
                        <div className="flex flex-row text-sm gap-10">
                            <div className="underline underline-offset-8">
                                More Details
                            </div>
                            <div className="underline underline-offset-8 hover:text-green-500">
                                Download
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className="flex justify-center" alt="Line Photo" src="https://static.line-scdn.net/linecorpweb-uit/18dee39ad57/images/img_services_business_services_02_pc.png"
                            width={650}
                            height={350}
                        />
                    </div>
                    <div className="flex flex-col justify-middle p-5 pt-20 gap-5 ">
                        <div className="text-2xl font-light">
                            LINE Games
                        </div>
                        <div className="text-base">
                            Play games with your LINE friends.
                        </div>
                        <div className="font-light">
                            LINE presents games of a variety of genres, some of them starring LINE characters. Invite all your LINE friends and have a blast!
                        </div>
                        <div className="flex flex-row text-sm gap-10">
                            <div className="underline underline-offset-8">
                                More Details
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className="flex justify-center" alt="Line Photo" src="https://static.line-scdn.net/linecorpweb-uit/18dee39ad57/images/img_services_business_services_03_pc.png"
                            width={750}
                            height={400}
                        />
                    </div>
                    <div className="flex flex-col justify-middle p-5 pt-20 gap-5 ">
                        <div className="text-2xl font-light">
                            LINE Family Apps
                        </div>
                        <div className="text-base">
                            Everything you would ever need on your smartphone.
                        </div>
                        <div className="font-light">
                            LINE family apps include a web comic app, a security app, and many more that will make your everyday life more fun! Use LINE Deco to decorate your phone however you want, and LINE Camera to take the best pics. There’s something for every aspect of your smartphone life in the LINE family.
                        </div>
                        <div className="flex flex-row text-sm gap-10">
                            <div className="underline underline-offset-8">
                                More Details
                            </div>
                            {/* <div className="underline underline-offset-8 hover:text-green-500">
                        Download
                    </div> */}
                        </div>
                    </div>
                    <div className="flex flex-col items-center pb-10 ">
                        <img className="flex justify-center" alt="Line Photo" src="https://static.line-scdn.net/linecorpweb-uit/18dee39ad57/images/img_services_business_services_04_pc.png"
                            width={950}
                            height={500}
                        />
                    </div>
                </div>
            </div>
            {/* MOBILE */}
        </div>
    )
}
