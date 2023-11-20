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


function Sidebar({ theme, toggleTheme }) {
    const [openAlert, setOpenAlert] = React.useState(true);

    return (
        <Card variant="gradient" className={`${theme === 'dark' ? 'bg-gray-900 text-white shadow-inherit' : 'text-black shadow-blue-gray-900/5'} flex flex-col justify-between items-center h-[calc(100vh-2rem)] w-full max-w-[20rem] p-8 shadow-xl  `}>

            <div className="flex flex-col items-center gap-4">
                <div className="mb-2 flex items-center gap-4 p-4">
                    <img src={`${theme === 'dark' ? ' https://docs.material-tailwind.com/img/logo-ct-dark.png' : 'https://docs.material-tailwind.com/img/logo-ct-dark.png '}`} alt="brand" className="h-8 w-8" />
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
                <Button variant="outlined" className={`${theme === 'dark' ? ' text-white border-white' : 'text-black '} rounded-full`}>
                    Edit
                </Button>
                <List className={`${theme === 'dark' ? ' text-white' : 'text-black '}`}>
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
                <Button
                    variant="gradient"
                    className="flex items-center gap-3 "
                    onClick={toggleTheme}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                        />
                    </svg>
                    {`${theme === 'dark' ? 'Light Mode' : 'Dark Mode'}`}
                </Button>
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
