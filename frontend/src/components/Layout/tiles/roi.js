import React from "react";
import {
    Typography,
    Card,
    CardHeader,
    CardBody,
    Button
} from "@material-tailwind/react";
import Chart from "react-apexcharts";

import {
    EyeIcon,
} from "@heroicons/react/24/outline";

function Roi() {
    const chartdata = {
        type: "line",
        height: 200,
        width: 320,
        series: [
            {
                name: "money",
                data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
            },
        ],
        options: {
            chart: {
                toolbar: {
                    show: false,
                },
            },
            yaxis: {
                labels: {
                    style: {
                        colors: "#dddddd",
                        fontSize: "13px",
                        fontFamily: "inherit",
                        fontWeight: 300,
                    },
                },
            },
            grid: {
                show: false,
                borderColor: "#dddddd",
                strokeDashArray: 0,
                xaxis: {
                    lines: {
                        show: false,
                    },
                },
                padding: {
                    top: 5,
                    right: 20,
                },
            },
            fill: {
                opacity: 0.8,
            },
            tooltip: {
                theme: "dark",
            },
            dataLabels: {
                enabled: false,
            },
            colors: ["#F8DE22"],
            stroke: {
                lineCap: "round",
            },
            markers: {
                size: 5,
            },
            xaxis: {
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                labels: {
                    style: {
                        colors: "#dddddd",
                        fontSize: "13px",
                        fontFamily: "inherit",
                        fontWeight: 300,
                    },
                },
                name: "income",
                categories: [
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ],
            },
        },
    };

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
                        className="!absolute top-4 right-6 rounded-full"
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
                <CardBody className="px-0 pt-0 pb-0">
                    <div className="p-2">
                        <Typography variant="h2" color="white" className="mb-1">
                            283%
                        </Typography>
                        <Typography variant="h6" color="gray" className="mb-1">
                            Return On Investment
                        </Typography>
                    </div>
                    <div>
                        <Chart {...chartdata} />
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}
export default Roi
