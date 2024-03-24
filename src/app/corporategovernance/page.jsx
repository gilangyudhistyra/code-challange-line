
"use client";
import { useCreateTeams } from "~/api/useCreateTeams";
import Link from "next/link";
export default function CorporateGovernance() {
  const { teams } = useCreateTeams();
  console.log(teams);

  return (
    <div>
      {/* DESKTOP */}
      <div className="lg:block hidden">
      <div className="bg-gray-300 text-base font-light flex flex-row gap-10 justify-center p-5 pt-[110px]">
        <button className="hover:text-green-500">
          IR Information
        </button>
        <button className="hover:text-green-500">
          IR News
        </button>
        <button className="hover:text-green-500">
          IR Library
        </button>
        <button className="hover:text-green-500">
          Stock Information
        </button>
        <Link href="/corporategovernance" className="hover:text-green-500 ">Corporate Governance</Link>
      </div>
      <div className="flex flex-row justify-between text-xl gap-50 px-[200px] py-20">
        <div className=" text-3xl ">
          CORPORATE GOVERNANCE
        </div>
        <div className="">
          HOME | IR | Corporate Governance
        </div>
      </div>
      <div className="h-[120px] flex justify-center text-4xl">
        Boards and Chiefs
      </div>
      <div className=" grid grid-rows-3 grid-cols-3 justify-items-center gap-10">
        {teams?.results?.map((results, index) => {
          return (
            <div>
              <div key={index}>
                <div className="">
                  <img
                    src={results.picture.large}
                    alt="profile"
                    className="h-[300px] w-[250px] rounded-lg"
                  />
                  <div className="">
                    <h1 className="text-lg font-bold">
                      {results.name.first} {results.name.last}
                    </h1>
                    <h1>{results.email}</h1>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    {/* DEKSTOP */}
    {/* MOBILE */}
    <div className="lg:hidden">
      <div className="flex justify-center  text-xl pt-20 py-20">
        <div className=" text-2xl">
          CORPORATE GOVERNANCE
        </div>
      </div>
      <div className=" flex justify-center text-2xl">
        Boards and Chiefs
      </div>
      <div className=" grid grid-rows justify-items-center gap-10 py-20">
        {teams?.results?.map((results, index) => {
          return (
            <div>
              <div key={index}>
                <div className="">
                  <img
                    src={results.picture.large}
                    alt="profile"
                    className="h-[300px] w-[250px] rounded-lg"
                  />
                  <div className="">
                    <h1 className="text-lg font-bold">
                      {results.name.first} {results.name.last}
                    </h1>
                    <h1>{results.email}</h1>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    {/* MOBILE */}
    </div>
  );
}

// import Link from "next/link";

// export default function CorporateGovernance() {
//     return (
//         <div className="bg-gray-100 py-20">
//             <div className="bg-gray-300 p-5 text-base font-light flex flex-row gap-10 justify-center ">
//                 <button className="hover:text-green-500">
//                     IR Information
//                 </button>
//                 <button className="hover:text-green-500">
//                     IR News
//                 </button>
//                 <button className="hover:text-green-500">
//                     IR Library
//                 </button>
//                 <button className="hover:text-green-500">
//                     Stock Information
//                 </button>
//                 <Link href="/corporategovernance" className="hover:text-green-500 ">Corporate Governance</Link>
//             </div>
//             <div className="flex flex-row justify-between text-xl gap-80 px-40 py-20">
//                 <div className=" text-3xl ">
//                     CORPORATE GOVERNANCE
//                 </div>
//                 <div className=" pr-20">
//                     HOME | IR | Corporate Governance
//                 </div>
//             </div>
//             <button className="flex flex-row text-xl px-40 gap-1 items-center">
//                 <div className="grid grid-cols-2 pb-3 pt-3 border hover:border-black text-gray-500 hover:bg-green-500 hover:text-white duration-500">
//                     Board & Corporate Auditor
//                 </div>
//                 <div className="grid grid-cols-2 pt-3 pb-3 border hover:border-black text-gray-500 hover:bg-green-500 hover:text-white duration-500">
//                     Corporate Governance Report
//                 </div>
//             </button>
//             <div className="flex justify-center text-3xl py-[60px]">
//                 Board & Corporate Auditors
//             </div>
//             <section className="px-40 pb-20 flex flex-row justify-center ">
//                 <div className=" pl-20 space-y-5 ">
//                     <div className="grid grid-col">
//                         <div> Takeshi Idezawa</div>
//                         <div className="text-[13px] font-light text-gray-500 grid grid-col">
//                             <a>Representative Director,</a>
//                             <a> President and</a>
//                             <a> Chief Executive Officer </a>
//                         </div>
//                     </div>
//                     <div className="grid grid-col">
//                         <div> Jungho Shin</div>
//                         <div className="text-[13px] font-light text-gray-500 grid grid-col">
//                         <a>Representative Director,</a>
//                         <a>Chief WOW Officer</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="pl-20 space-y-5 ">
//                     <div className="grid grid-col">
//                         <div> Jun Masuda</div>
//                         <div className="text-[13px] font-light text-gray-500 grid grid-col">
//                         <a>Director,</a>
//                         <a>Chief Strategy</a>
//                         <a>  & Marketing Officer </a>
//                         </div>
//                     </div>
//                     <div className="grid grid-col">
//                         <a> In Joon Hwang</a>
//                         <a>Director,</a>
//                         <a>Chief Financial Officer</a>
//                     </div>
//                     <div className="grid grid-col">
//                         <a> Euivin Park</a>
//                         <a>Director,</a>
//                         <a>Chief Technology Officer</a>
//                     </div>
//                     <div className="grid grid-col">
//                         <a> Youngsu Ko</a>
//                         <a>Director</a>
//                     </div>
//                     <div className="grid grid-col">
//                         <a> Takeshi Shimamura</a>
//                         <a>Director</a>
//                     </div>
//                 </div>
//                 <div className=" pl-20 space-y-5 ">
//                     <div className="grid grid-col">
//                         <a>Hitoshi Kurasawa</a>
//                         <a>Corporate Auditor</a>

//                     </div>
//                     <div className="grid grid-col">
//                         <a>Yoichi Namekata</a>
//                         <a>Corporate Auditor</a>

//                     </div>
//                     <div className="grid grid-col">
//                         <a>Noriyuki Uematsu</a>
//                         <a>Corporate Auditor</a>
//                     </div>
//                     <div className="grid grid-col ">
//                         <a> As of October 1, 2021</a>
//                     </div>

//                 </div>
//             </section>
//         </div>
//     );
// }
