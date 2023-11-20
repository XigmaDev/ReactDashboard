import React from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Alert,
    Button,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    UserCircleIcon,
    Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import {
    CubeTransparentIcon,
} from "@heroicons/react/24/outline";

const Sidebar = ({ isDarkMode, onClick }) => {
    const [openAlert, setOpenAlert] = React.useState(true);

    return (
        <Card variant="gradient"  className={`${isDarkMode ? 'bg-gray-900 text-white shadow-blue-gray-800 shadow-sm' : 'text-black shadow-blue-gray-900/5'} flex flex-col justify-between items-center h-[calc(100vh-2rem)] w-full max-w-[20rem] p-8 shadow-xl  `}>

            <div className="flex flex-col items-center gap-4">
                <div className="mb-2 flex items-center gap-4 p-4">
                    <img src={`${isDarkMode ? ' https://docs.material-tailwind.com/img/logo-ct-dark.png' : 'https://docs.material-tailwind.com/img/logo-ct.png '}`} alt="brand" className="h-8 w-8" />
                    <Typography variant="h5" >
                        Wise
                    </Typography>
                </div>
                <img
                    className="h-40 w-40 rounded-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                    alt="nature image"
                />
                <Typography variant="h6" >
                    Louis Carter
                </Typography>
                <Button variant="outlined" className={`${isDarkMode ? ' text-white border-white' : 'text-black '} rounded-full`}>
                    Edit
                </Button>
                <List className={`${isDarkMode ? ' text-white' : 'text-black '}`}>
                    <hr className="my-2  border-blue-gray-50" />
                    <ListItem>
                        <ListItemPrefix>
                            <PresentationChartBarIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Dashboard
                       
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
            </div>
            <div className="items-center">
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

export default Sidebar
