import Link from "next/link"
export default function LinePlusPage() {
    return (
        <div className="h-auto">
            <div className="bg-gray-300 p-5 text-xl flex flex-row gap-10 justify-start pl-60 ">
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
            <div className="flex flex-row justify-middle text-xl p-20 px-40 gap-1 justify-center ">
                <div className="">
                    <div className="items-center grid grid-cols-3 pt-3 pb-3 border hover:border-black text-gray-500 hover:bg-green-500 hover:text-white duration-500">
                        <Link href="/aboutus">Line Corporation</Link>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-3 pt-3 pb-3 border hover:border-black text-gray-500 hover:bg-green-500 hover:text-white duration-500">
                        Line Plus Corporation
                    </div>
                </div>
            </div>
            <div className="flex flex-col  px-40 gap-1 justify-center">
                <div>
                    LINE Plus Corporation was established in March 2013 in South Korea to support LINE's global business development and expansion.
                </div>
                <div>
                    LINE Plus employees work with colleagues from around the world in areas such as engineering, planning, design, sales and marketing, and communications.
                </div>
            </div>
            <div className="pt-[200px]">
                <img src="https://static.line-scdn.net/linecorpweb-uit/18dee39ad57/images/img_company_t_pc_info_v2.jpg" />
            </div>
        </div>
    )
}