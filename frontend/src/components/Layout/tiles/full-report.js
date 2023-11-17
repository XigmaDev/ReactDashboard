import React from "react";


export default function FullReport() {


    return (
        <div className="bg-gray-800 p-4 rounded-3xl shadow-md w-96 mb-4 h-96 mr-3 flex flex-col justify-between">
            <div className="px-6 py-4 flex flex-wrap justify-between">
                <div className="text-white text-2xl font-semibold mb-2 p-4 ">Full Report</div>
                <a className="py-3 text-sm  my-3 mx-4  px-4 transition-colors inline-block" href="#">
                    <span className="text-yellow-300 ml-1 duration-300 opacity-100 pointer-events-none ease-soft ">/ 2023</span>
                </a>
            </div>
            <div className="">
                <button className="w-full h-20 text-sm flex justify-between items-center text-white bg-slate-600 font-semibold rounded-2xl border border-slate-400 hover:text-white hover:bg-gray-700 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">
                    <p className="px-2 font-bold text-xl ">Download Report</p>
                    <svg
                        className="h-5 w-5 mr-2 border-l border-white pl-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>

            </div>            

        </div>
    );
}