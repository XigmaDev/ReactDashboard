import React from "react";
import {
    Typography,
    Card,
    CardHeader,
    CardBody,

} from "@material-tailwind/react";


export default function CustomerChurn() {


    return (
        <div className=" rounded-3xl shadow-md w-96 mb-4  mr-3">
            <Card shadow={true} variant="gradient" className="bg-gray-800 p-4 h-96 overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm flex flex-col justify-between">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 flex items-center justify-between p-6"
                >
                    <div>
                        <Typography variant="h5" color="white" className="mb-1">
                            Customer Churn Rate
                        </Typography>

                    </div>
                   
                </CardHeader>
                <CardBody className="overflow-x-scroll px-0 pt-0 pb-2 ">
                    
                </CardBody>
            </Card>
        </div>
    );
}