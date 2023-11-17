import React from "react";
import {
    Navbar,
    Typography,
    IconButton,
    Button,
    Input,
} from "@material-tailwind/react";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
export default function NavbarDark() {
    return (
        <Navbar
            variant="gradient"
            className="mx-auto  from-blue-gray-900 to-blue-gray-800 px-2 py-3"
        >
            <div className="flex flex-wrap items-center justify-between gap-y-4 text-black">
                <Typography
                    as="a"
                    href="#"
                    variant="h6"
                    className="mr-4 ml-2 cursor-pointer py-1.5"
                >
                    Statistics
                </Typography>
                <div className="relative flex ml-auto w-full gap-2 md:w-max">
                    <Input
                        type="search"
                        color="black"
                        label="Type here..."
                        className="pr-20"
                        containerProps={{
                            className: "min-w-[288px]",
                        }}
                    />
                    <Button
                        size="sm"
                        color="white"
                        className="!absolute right-1 top-1 rounded"
                    >
                        Search
                    </Button>
                </div>
                <div className="ml-auto flex gap-1 md:mr-4">
                    <IconButton variant="text" color="black">
                        <Cog6ToothIcon className="h-4 w-4" />
                    </IconButton>
                    <IconButton variant="text" color="black">
                        <BellIcon className="h-4 w-4" />
                    </IconButton>
                </div>
                
            </div>
        </Navbar>

        // <nav className=" p-4 items-center justify-between px-0 py-2 mx-6 transition-all " navbar-main="true" navbar-scroll="true">
        //     <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
        //         <nav>
        //             <h1 className="text-white mb-0 font-bold">Statistics</h1>
        //         </nav>
        //         <div className="items-center">
        //             <div className="relative items-stretch w-full transition-all rounded-lg ease-soft">
        //                 <span className="text-sm ease-soft leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-white-500 transition-all">
        //                 </span>
        //                 <input type="text" className="pl-10 text-center text-sm focus:shadow-soft-primary-outline ease-soft w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg   bg-gray-800 py-2 pr-5  text-gray-700 transition-all placeholder:text-gray-500 focus:border-yellow-300 focus:outline-none focus:transition-shadow" placeholder="Search something..." />
        //             </div>
        //         </div>
        //         <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
        //             <li className="flex items-center">
        //                 <button className="px-6 py-1 text-sm bg-yellow-300 text-black font-semibold rounded-full border border-yellow-600 hover:text-black hover:bg-yellow-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2">Upgrade</button>
        //             </li>
        //             <li className="px-4 flex items-center">
        //                 <button className="px-6 py-1 text-sm text-white bg-slate-600 font-semibold rounded-full border border-slate-400 hover:text-white hover:bg-slate-700 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2">Notif</button>
        //             </li>
        //         </ul>

        //     </div>
        // </nav>

    );
}