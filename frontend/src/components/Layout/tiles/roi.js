import React from "react";
import {
    Typography,
    Card,
    CardHeader,
    CardBody,
    Button
} from "@material-tailwind/react";
import {

    EyeIcon,
} from "@heroicons/react/24/outline";

function Roi() {


    return (
        <div className=" rounded-3xl shadow-md w-96 mb-4  mr-3">
            <Card shadow={true} variant="gradient" className="bg-gray-800 p-4 h-96 overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm flex flex-col justify-between">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 flex items-center justify-between p-6"
                >
                    <Button
                        size="sm"
                        color="white"
                        variant="text"
                        className="!absolute top-6 right-6 rounded-full"
                    >
                       Details
                    </Button>
                    <div className="flex flex-row justify-between">
                        <EyeIcon className="flex w-7 h-7"></EyeIcon>
                        <Typography variant="h4" color="white" className="flex mb-1 ml-3">
                            ROI
                        </Typography>

                    </div>
                   
                </CardHeader>
                <CardBody className="overflow-x-scroll px-0 pt-0 pb-2 ">
                    <div className="p-4">
                        <Typography variant="h2" color="white" className="mb-1">
                            283%
                        </Typography>
                        <Typography variant="h6" color="gray" className="mb-1">
                            Return On Investment
                        </Typography>
                    </div>

                </CardBody>
            </Card>
        </div>
    );
}
export default Roi
