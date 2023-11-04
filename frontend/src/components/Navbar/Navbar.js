import React from "react";

export default function Navbar() {
    return (

        <nav className="bg-blue-500 p-4 items-center justify-between px-0 py-2 mx-6 transition-all " navbar-main="true" navbar-scroll="true">
            <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
                <nav>
                    <h1 className="text-white mb-0 font-bold">Statistics</h1>
                </nav>
                <div className="items-center">
                    <div className="relative items-stretch w-full transition-all rounded-lg ease-soft">
                        <span className="text-sm ease-soft leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-white-500 transition-all">
                        </span>
                        <input type="text" className="pl-10 text-center text-sm focus:shadow-soft-primary-outline ease-soft w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg   bg-gray-800 py-2 pr-5  text-gray-700 transition-all placeholder:text-gray-500 focus:border-yellow-300 focus:outline-none focus:transition-shadow" placeholder="Search something..." />
                    </div>
                </div>
                <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
                    <li className="flex items-center">
                        <button className="px-6 py-1 text-sm text-yellow-600 font-semibold rounded-full border border-yellow-200 hover:text-white hover:bg-yellow-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2">Upgrade</button>
                    </li>
                    <li className="px-4 flex items-center">
                        <button className="px-6 py-1 text-sm text-yellow-600 font-semibold rounded-full border border-yellow-200 hover:text-white hover:bg-yellow-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2">Notif</button>
                    </li>
                </ul>

            </div>
        </nav>

    );
}