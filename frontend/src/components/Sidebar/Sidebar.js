import React from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Alert,
    Button,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import {
    ChevronRightIcon,
    ChevronDownIcon,
    CubeTransparentIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar({ isDarkMode, onClick }) {
    const [open, setOpen] = React.useState(0);
    const [openAlert, setOpenAlert] = React.useState(true);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <Card variant="gradient"  className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-8 shadow-xl shadow-blue-gray-900/5 ">

            <div className="flex flex-col items-center gap-4">
                <div className="mb-2 flex items-center gap-4 p-4">
                    <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="brand" className="h-8 w-8" />
                    <Typography variant="h5" color="blue-gray">
                        Wise
                    </Typography>
                </div>
                <img
                    className="h-40 w-40 rounded-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                    alt="nature image"
                />
                <Typography variant="h6" color="blue-gray">
                    Louis Carter
                </Typography>
                <Button variant="outlined" className="rounded-full">
                    Edit
                </Button>
            </div>
            <List>
                <hr className="my-2 border-blue-gray-50" />
                <ListItem>
                    <ListItemPrefix>
                        <PresentationChartBarIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Dashboard
                    <ListItemSuffix>
                        <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                    </ListItemSuffix>
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <UserCircleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Activity
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <Cog6ToothIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Schedule
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <Cog6ToothIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Setting
                </ListItem>
            </List>
            <div className="flex">
                <button className={`px-4 py-2 rounded-md focus:outline-none transition-all duration-300 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'
                    }`}
                    onClick={onClick}
                >
                    <svg
                        className={`h-5 w-5 mr-2 ${isDarkMode ? 'text-white' : 'text-black'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isDarkMode ? 'M13 21v-8l8-5-8-5v-8h-6v8l-8 5 8 5v8z' : 'M5 3v18h14V3H5z'}
                        ></path>
                    </svg>
                    {isDarkMode ? 'Light' : 'Dark'} Mode
                </button>
            </div >
            <Alert open={openAlert} className="mt-auto" onClose={() => setOpenAlert(false)}>
                <CubeTransparentIcon className="mb-4 h-12 w-12" />
                <Typography variant="h6" className="mb-1">
                    Upgrade to PRO
                </Typography>
                <Typography variant="small" className="font-normal opacity-80">
                    Upgrade Message
                </Typography>
                <div className="mt-4 flex gap-3">
                    <Typography
                        as="a"
                        href="#"
                        variant="small"
                        className="font-medium opacity-80"
                        onClick={() => setOpenAlert(false)}
                    >
                        Dismiss
                    </Typography>
                    <Typography as="a" href="#" variant="small" className="font-medium">
                        Upgrade Now
                    </Typography>
                </div>
            </Alert>
        </Card >
    );
}



// export default function Sidebar({ isDarkMode, onClick }) {

//     return (
//         <aside className="w-1/6 p-4 flex flex-col justify-between">
//             <div>
//                 <div className=" px-10 py-10 ">
//                     <a className="block text-sm whitespace-nowrap text-slate-700" href="#" target="_blank">
//                         <img src="logo.png" className="inline h-full max-w-full transition-all duration-200 ease-nav-brand max-h-8" alt="main_logo" />
//                     </a>
//                     <img
//                         className="my-3 relative flex items-center p-0 mt-6 overflow-hidden bg-center bg-cover min-h-75 rounded-2xl"
//                         src="profile.jpg"
//                         alt="profile"
//                         width={100}
//                         height={100}
//                     />
//                     <h2 className="py-2">Louis Carter</h2>
//                     <button className="my-3 px-6 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-slate-400 hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Edit</button>
//                 </div>
//                 <div className="items-center block w-auto max-h-screen overflow-auto grow basis-full">
//                     <ul className="flex flex-col pl-0 mb-0">
//                         <li className="mt-0.5 w-full">
//                             <a className="py-2.7 text-sm ease-nav-brand my-3 mx-4 flex items-center whitespace-nowrap px-4 transition-colors" href="#">
//                                 <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
//                                     <svg className="h-10 w-10 text-black" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" >  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="13" r="2" />  <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />  <path d="M6.4 20a9 9 0 1 1 11.2 0Z" /></svg>
//                                 </div>
//                                 <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Dashboard</span>
//                             </a>
//                         </li>
//                         <li className="mt-0.5 w-full">
//                             <a className="py-2.7 text-sm ease-nav-brand my-3 mx-4 flex items-center whitespace-nowrap px-4 transition-colors" href="#">
//                                 <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
//                                     <svg className="h-10 w-10 text-black" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" >  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="13" r="2" />  <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />  <path d="M6.4 20a9 9 0 1 1 11.2 0Z" /></svg>

//                                 </div>
//                                 <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Activity</span>
//                             </a>
//                         </li>
//                         <li className="mt-0.5 w-full">
//                             <a className="py-2.7 text-sm ease-nav-brand my-3 mx-4 flex items-center whitespace-nowrap px-4 transition-colors" href="#">
//                                 <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current stroke-0 text-center xl:p-2.5">
//                                     <svg className="h-10 w-10 text-black" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" >  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="13" r="2" />  <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />  <path d="M6.4 20a9 9 0 1 1 11.2 0Z" /></svg>
//                                 </div>
//                                 <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Schedule</span>
//                             </a>
//                         </li>
//                         <li className="mt-0.5 w-full">
//                             <a className="py-2.7 text-sm ease-nav-brand my-3 mx-4 flex items-center whitespace-nowrap px-4 transition-colors" href="#">
//                                 <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
//                                     <svg className="h-10 w-10 text-black" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" >  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="13" r="2" />  <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />  <path d="M6.4 20a9 9 0 1 1 11.2 0Z" /></svg>
//                                 </div>
//                                 <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Setting</span>
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//             <button className={`px-4 py-2 rounded-md focus:outline-none transition-all duration-300 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'
//                 }`}
//                 onClick={onClick}
//             >
//                 <svg
//                     className={`h-5 w-5 mr-2 ${isDarkMode ? 'text-white' : 'text-black'}`}
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                 >
//                     <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d={isDarkMode ? 'M13 21v-8l8-5-8-5v-8h-6v8l-8 5 8 5v8z' : 'M5 3v18h14V3H5z'}
//                     ></path>
//                 </svg>
//                 {isDarkMode ? 'Light' : 'Dark'} Mode
//             </button>

//         </aside>
//     );
// }

