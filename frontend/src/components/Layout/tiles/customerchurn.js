import React from "react";
import {
    Typography,
    Card,
    CardHeader,
    CardBody,

} from "@material-tailwind/react";
import Chart from "react-apexcharts";

function CustomerChurn() {

    const chartdata = {
        type: "bar",
        height: 280,
        width: 320,
        series: [
            {
                name: "money",
                data: [10, 14, 6, 8],
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
                show: true,
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
            colors: "#388e3c",
            plotOptions: {
                bar: {
                    columnWidth: "40%",
                    borderRadius: 10,
                },
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
                categories: ["50-100", "100-250", "250-500", ">500"],
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
                    <div>
                        <Typography variant="h5" color="white" className="mb-1">
                            Customer Churn Rate
                        </Typography>
                    </div>
                </CardHeader>
                <CardBody className="px-0 pt-0 pb-0 ">
                    <Chart{...chartdata} />
                </CardBody>
            </Card>
        </div>
    );
}
export default CustomerChurn
