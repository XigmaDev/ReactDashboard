import React from "react";

export default function Sidebar() {
    return (
        <aside className="w-1/6 p-4">
            <div className=" px-10 py-10 ">
                <a className="block text-sm whitespace-nowrap text-slate-700" href="#" target="_blank">
                    <img src="logo.png" className="inline h-full max-w-full transition-all duration-200 ease-nav-brand max-h-8" alt="main_logo" />
                </a>
                <img
                    className="my-3 relative flex items-center p-0 mt-6 overflow-hidden bg-center bg-cover min-h-75 rounded-2xl"
                    src="profile.jpg"
                    alt="profile"
                    width={100}
                    height={100}
                />
                <h2 className="py-2">Louis Carter</h2>
                <button className="my-3 px-6 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-slate-400 hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Edit</button>
            </div>
            <div className="items-center block w-auto max-h-screen overflow-auto grow basis-full">
                <ul className="flex flex-col pl-0 mb-0">
                    <li className="mt-0.5 w-full">
                        <a className="py-2.7 text-sm ease-nav-brand my-3 mx-4 flex items-center whitespace-nowrap px-4 transition-colors" href="../pages/dashboard.html">
                            <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                                <svg className="h-10 w-10 text-black" width="24" height="24" viewBox="0 0 24 24"  stroke="currentColor" fill="none" >  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="13" r="2" />  <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />  <path d="M6.4 20a9 9 0 1 1 11.2 0Z" /></svg>
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Dashboard</span>
                        </a>
                    </li>
                    <li className="mt-0.5 w-full">
                        <a className="py-2.7 text-sm ease-nav-brand my-3 mx-4 flex items-center whitespace-nowrap px-4 transition-colors" href="../pages/tables.html">
                            <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                                <svg className="h-10 w-10 text-black" width="24" height="24" viewBox="0 0 24 24"  stroke="currentColor" fill="none" >  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="13" r="2" />  <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />  <path d="M6.4 20a9 9 0 1 1 11.2 0Z" /></svg>

                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Activity</span>
                        </a>
                    </li>
                    <li className="mt-0.5 w-full">
                        <a className="py-2.7 text-sm ease-nav-brand my-3 mx-4 flex items-center whitespace-nowrap px-4 transition-colors" href="../pages/billing.html">
                            <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current stroke-0 text-center xl:p-2.5">
                                <svg className="h-10 w-10 text-black" width="24" height="24" viewBox="0 0 24 24"  stroke="currentColor" fill="none" >  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="13" r="2" />  <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />  <path d="M6.4 20a9 9 0 1 1 11.2 0Z" /></svg>
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Schedule</span>
                        </a>
                    </li>
                    <li className="mt-0.5 w-full">
                        <a className="py-2.7 text-sm ease-nav-brand my-3 mx-4 flex items-center whitespace-nowrap px-4 transition-colors" href="../pages/virtual-reality.html">
                            <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                                <svg className="h-10 w-10 text-black" width="24" height="24" viewBox="0 0 24 24"  stroke="currentColor" fill="none" >  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="13" r="2" />  <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />  <path d="M6.4 20a9 9 0 1 1 11.2 0Z" /></svg>
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Setting</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
}