import React from "react";


export default function WebSiteTraffic() {


    return (
        <div className="bg-yellow-300 p-4 rounded-3xl shadow-md w-96 mb-4 h-96 mr-3 flex flex-col justify-between">
            <div className="flex flex-wrap ">
                <h2 className="text-2xl text-slate-950 font-bold font-sans p-4">Website traffic</h2>
                <a className="py-3 text-sm  my-3 mx-4 flex px-4 transition-colors" href="#">
                    <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">More</span>
                </a>
            </div>
            <div className="flex flex-wrap p-4 w-80 justify-center">
                <div className="relative w-20 h-20">
                    <svg className="absolute" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50%" cy="50%" r="45%" fill="transparent" stroke="#e0e0e0" strokeWidth="0%" />
                        <circle
                            cx="50%"
                            cy="50%"
                            r="45%"
                            fill="transparent"
                            stroke="#111111"
                            strokeWidth="10%"
                            strokeDasharray="60% 100%"
                            transform="rotate(-90) translate(-100%)"
                        />
                    </svg>
                    <div className="absolute w-full h-full flex items-center justify-center">
                        <span className="text-lg font-bold text-black">12K</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap p-2 w-80 justify-between">
                <div className="flex items-center">
                    <div className="shadow-soft-2xl h-8 w-8 items-center justify-center rounded-lg bg-black bg-center inline-block"></div>
                    <p className="mx-3 inline-block">Social Media</p>
                </div>
                <p className="mx-3">78%</p>
            </div>
            <hr></hr>
            <div className="flex flex-wrap p-2 w-80 justify-between">
                <div className="flex items-center">
                    <div className="shadow-soft-2xl  h-8 w-8 items-center justify-center rounded-lg bg-gray-800 bg-center inline-block">
                    </div>
                    <p className="mx-3 text-left ">Organic Search</p>
                </div>
                <p className="text-right mx-3">22%</p>
            </div>
        </div >
    );
}
