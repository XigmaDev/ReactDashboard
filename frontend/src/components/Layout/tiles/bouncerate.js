import React from "react";
import {
    Typography,
    Card,
    CardHeader,
    CardBody,
    IconButton,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Tooltip,
    Progress,
} from "@material-tailwind/react";
import {
    EllipsisVerticalIcon,
    ArrowUpIcon,
    CheckCircleIcon,
} from "@heroicons/react/24/outline";
export default function Bouncerate() {


    return (
        <div className=" rounded-3xl shadow-md w-96 mb-4  mr-3">
            <Card shadow={true} className="bg-gray-300 p-4 h-96 overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm flex flex-col justify-between">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 flex items-center justify-between p-6"
                >
                    <div>
                        <Typography variant="h4" color="blue-gray" className="mb-1">
                            Bounce Rate
                        </Typography>

                    </div>
                    <Menu placement="left-start">
                        <MenuHandler>
                            <IconButton size="sm" variant="text" color="blue-gray">
                                <EllipsisVerticalIcon
                                    strokeWidth={3}
                                    fill="currenColor"
                                    className="h-6 w-6"
                                />
                            </IconButton>
                        </MenuHandler>
                        <MenuList>
                            <MenuItem>Action</MenuItem>
                        </MenuList>
                    </Menu>
                </CardHeader>
                <CardBody className="overflow-x-scroll px-0 pt-0 pb-2 ">
                    <div className="flex flex-row justify-center p-4">
                        <div className="border-2 p-2 text-center rounded-xl w-20 m-2">
                            <div className="flex flex-col justify-between">
                                <Typography variant="h6" color="blue-gray" className="mb-1">
                                    Mon
                                </Typography>

                                <Typography variant="h6" color="blue-gray" className="mb-1 font-bold">
                                    2
                                </Typography>
                            </div>

                        </div>
                        <div className="bg-yellow-300 p-2 text-center rounded-xl w-20 m-2">
                            <div className="flex flex-col justify-between">
                                <Typography variant="h6" color="blue-gray" className="mb-1">
                                    Tue
                                </Typography>

                                <Typography variant="h6" color="blue-gray" className="mb-1 font-bold">
                                    3
                                </Typography>
                            </div>

                        </div>
                        <div className="border-2 p-2 text-center rounded-xl w-20 m-2">
                            <div className="flex flex-col justify-between">
                                <Typography variant="h6" color="blue-gray" className="mb-1">
                                    Wed
                                </Typography>

                                <Typography variant="h6" color="blue-gray" className="mb-1 font-bold">
                                    4
                                </Typography>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-row justify-between m-4 ">
                        <Typography variant="h1" color="blue-gray" className="mb-1">
                            23%
                        </Typography>
                        <div className="border-l-2 border-gray-400 h-20 "></div>
                        <div className="flex flex-col justify-center">
                            <Typography variant="h6" color="blue-gray" className="mb-1 font-bold">
                                -10%
                            </Typography>

                            <Typography variant="h6" color="blue-gray" className="mb-1">
                                Since last day
                            </Typography>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}